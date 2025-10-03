// server.js
require('dotenv').config();
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit'); // 簡易レート制限（必須推奨）

const app = express();
app.use(express.json());

// レート制限（IPあたり1分に5回等、運用に応じて調整）
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: '短時間に多くのリクエストがありました。少し時間を空けてから再度お試しください。' }
});
app.use('/api/send-material', limiter);

// materials フォルダ（サーバー内）— PDF をここに置く
const MATERIALS_DIR = process.env.MATERIALS_DIR || path.join(__dirname, 'materials');

// nodemailer transporter（環境変数で隠す）
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// ヘルパー：materials ディレクトリから更新日時が最新のファイルを返す
async function findLatestMaterial() {
  const files = await fs.readdir(MATERIALS_DIR);
  const filePaths = files
    .map(f => path.join(MATERIALS_DIR, f))
    .filter(fp => /\.(pdf)$/i.test(fp));
  if (filePaths.length === 0) return null;

  // mtime でソート（最新ファイルを選択）
  const stats = await Promise.all(filePaths.map(async fp => {
    const st = await fs.stat(fp);
    return { path: fp, mtime: st.mtimeMs };
  }));
  stats.sort((a, b) => b.mtime - a.mtime);
  return stats[0].path;
}

// エンドポイント：資料送信
app.post('/api/send-material', async (req, res) => {
  try {
    const { email, page } = req.body || {};
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'メールアドレスが有効ではありません。' });
    }
    // 簡易メール形式チェック（運用ではさらに厳格に）
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ error: 'メールアドレスの形式が不正です。' });

    const latest = await findLatestMaterial();
    if (!latest) return res.status(500).json({ error: '資料がサーバーに存在しません。管理者にお問い合わせください。' });

    const filename = path.basename(latest);

    // メール本文は用途に合わせてカスタマイズ
    const mailOptions = {
      from: process.env.MAIL_FROM || `"会社名" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '資料のご送付（最新）',
      text: `この度は資料請求いただきありがとうございます。\n添付の資料をご確認ください。\n\n送信元ページ: ${page || '不明'}`,
      html: `<p>この度は資料請求いただきありがとうございます。<br>添付の資料をご確認ください。<br><small>送信元ページ: ${page || '不明'}</small></p>`,
      attachments: [
        {
          filename,
          path: latest,
          contentType: 'application/pdf'
        }
      ]
    };

    // 送信
    await transporter.sendMail(mailOptions);

    // 送信ログ（必要に応じてDBに保存）
    console.info(`Sent material "${filename}" to ${email} (page: ${page || 'unknown'}) at ${new Date().toISOString()}`);

    res.json({ ok: true, message: '送信済み' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '送信中にエラーが発生しました。' });
  }
});

// 静的ファイル（フロントの index.html を配る場合）
app.use(express.static(path.join(__dirname, 'public')));

// 起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
