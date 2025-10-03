import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';


import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState<any>({
    company: '',
    name: '',
    email: '',
    time: '',
    down_link: '',
    phone: '',
    message: '',
    type: location.search.includes("type=document") ? "document" : "contact"
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev:any) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    location.search.includes("type=document") ? formData.type = "document" : formData.type = "contact";
    const now = new Date();
    const pad = (n:any) => n.toString().padStart(2, '0');
    const formattedDate = `${pad(now.getMonth() + 1)}/${pad(now.getDate())}/${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const sendData:any={
      company:formData.company,
      name: formData.name,
      email: formData.email,
      time: formattedDate,
      down_link: 'https://carbey.jp/ホワイトペーパー.pdf',
      phone: formData.phone,
      message: formData.message
    }
    try {
      emailjs.send('service_xiue0lq', 'template_cwkfrl8',sendData , {
        publicKey: 'ltfVvKgTVgzmJnLod',
      })
      .then(
        () => {
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          message: '',
          type: formData.type
        });

          if (formData.type === "document") {
            toast.success("資料請求ありがとうございます！ダウンロードが始まります。");
          } else {
            toast.success("お問い合わせありがとうございます！追ってご連絡いたします。");
          }
        },
        (error:any) => {
          console.log(error, 'error')
          console.log('FAILED...', error.text);
        },
      );
  }catch (err) {
      console.error(err);
    }
  };

  return (
    <div key={location.pathname + location.search} className="min-h-screen flex items-center justify-center py-32" style={{ backgroundColor: '#eef3f9' }}>
      <div className="max-w-2xl w-full mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            CONTACT
          </h1>
          <p className="text-lg text-gray-600">
            お問い合わせ
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <p className="text-gray-700 mb-8 leading-relaxed">
            資料に関するお問い合わせ・ビジネスのご相談・採用についてお気軽にお問い合わせください。
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 会社名 */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* 氏名 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                氏名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* 携帯電話 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                携帯電話
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>

            {/* プライバシーポリシー */}
            <div className="text-center">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                プライバシーポリシー
              </a>
              <span className="text-gray-600 text-sm ml-1">に同意する</span>
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-slate-700 text-white px-12 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200 text-lg"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;