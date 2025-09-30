import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, MessageSquare } from 'lucide-react';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/contact?type=contact&t=${Date.now()}`);
    window.scrollTo(0, 0);
  };

  const handleDocumentClick = () => {
    navigate(`/contact?type=document&t=${Date.now()}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-gray-50">
      <div className="grid md:grid-cols-2">
        {/* お問い合わせ */}
        <div className="bg-slate-500 text-white p-16 lg:p-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-white w-16 h-16 mx-auto mb-6">
              <MessageSquare className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold mb-6">
              お問い合わせ
            </h3>
            <button 
              onClick={handleContactClick}
              className="bg-gray-800 text-white px-8 py-3 rounded font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center mx-auto"
            >
              こちらから
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* 資料請求 */}
        <div className="bg-red-600 text-white p-16 lg:p-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-white w-16 h-16 mx-auto mb-6">
              <FileText className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold mb-6">
              資料請求
            </h3>
            <button 
              onClick={handleDocumentClick}
              className="bg-gray-800 text-white px-8 py-3 rounded font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center mx-auto"
            >
              資料請求する
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;