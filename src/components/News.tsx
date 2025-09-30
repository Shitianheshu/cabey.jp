import React from 'react';
import { Calendar } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      date: '2025.09.01',
      category: 'プレスリリース',
      title: 'サービス提供開始のお知らせ',
      isNew: true
    },
    {
      date: '2024.07.15',
      category: 'お知らせ',
      title: '公式ドメイン取得・コーポレートサイト準備開始',
      isNew: false
    },
    {
      date: '2024.06.01',
      category: 'お知らせ',
      title: 'カーベイ株式会社 設立のお知らせ',
      isNew: false
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            NEWS
          </h2>
          <p className="text-xl text-gray-600 font-light">
            お知らせ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center text-gray-500 text-sm lg:text-base min-w-[100px]">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.date}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.category === 'プレスリリース' 
                            ? 'bg-gray-100 text-gray-800' 
                            : item.category === '事業'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {item.category}
                        </span>
                        {item.isNew && (
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                            NEW
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg lg:text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200 cursor-pointer">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-gray-900 border-2 border-gray-900 px-10 py-4 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg">
              もっと見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;