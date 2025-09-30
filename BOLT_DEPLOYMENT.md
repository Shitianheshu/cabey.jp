# Bolt Deployment Guide for Carbey Website

## 概要
このガイドでは、CarbeyのウェブサイトをBoltにデプロイする手順を説明します。

## 前提条件
- Boltアカウント（hunako4125@gamil.com）
- GitHubリポジトリへのアクセス権限
- Node.js 18以上がインストールされていること

## デプロイ手順

### 1. Boltにログイン
- URL: https://bolt.new
- ログインID: hunako4125@gamil.com
- パスワード: Bolt2025

### 2. 新規プロジェクトの作成
1. Boltのダッシュボードで「New Project」をクリック
2. 「Import from GitHub」を選択
3. GitHubリポジトリURL: `https://github.com/kaguya0107/carbey`
4. プロジェクト名: `carbey-website`

### 3. デプロイ設定
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x

### 4. 環境変数（必要に応じて）
現在のプロジェクトでは特別な環境変数は必要ありませんが、将来的にAPIキーなどが必要になった場合は以下で設定：
- Boltダッシュボード → Project Settings → Environment Variables

### 5. カスタムドメイン設定
- お名前.comでドメインを管理
- Boltでカスタムドメインを設定
- DNS設定を更新

## プロジェクト構成
```
carbey/
├── src/                 # ソースコード
├── dist/               # ビルド済みファイル（デプロイ用）
├── package.json        # 依存関係とスクリプト
├── vite.config.ts      # Vite設定
├── bolt.json          # Bolt設定ファイル
├── deploy.sh          # デプロイスクリプト
└── BOLT_DEPLOYMENT.md # このファイル
```

## ビルド確認
ローカルでビルドを確認する場合：
```bash
npm install
npm run build
```

## トラブルシューティング
- ビルドが失敗する場合：Node.jsのバージョンを確認
- デプロイが失敗する場合：Boltのログを確認
- ドメインが表示されない場合：DNS設定を確認

## 連絡先
質問や問題がある場合は、開発チームまでお問い合わせください。
