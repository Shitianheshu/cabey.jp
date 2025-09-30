import React from 'react';
import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import Modal from './Modal';

const WhatWeDo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // ここに実際のダウンロード処理を実装
    console.log('ホワイトペーパーをダウンロード中...');
    setIsModalOpen(false);
  };

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            WHAT WE DO
          </h2>
          <p className="text-xl text-gray-600 font-light">
          </p>
          <p className="text-xl text-gray-900 font-semibold">
            Carbeyの事業
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              最新テクノロジーで中古車売買を<br />
              もっと簡単に。
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Carbeyは自社開発のデータ分析×自動売買システムを掛け合わせたフランチャイズシステムによって、誰でも中古車販売事業に参画できる仕組みを提供しています。
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-800 text-white px-8 py-3 rounded font-medium hover:bg-slate-900 transition-all duration-200"
            >
              ホワイトペーパーをダウンロード
            </button>
          </div>

          {/* Right Icon Area */}
          <div className="flex justify-center items-center">
            <div className="w-80 h-48 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-white">
              <div className="text-center w-[70%]">
                {/* <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" /> */}
                <img src='./image-1.png'></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="ホワイトペーパーをダウンロードしますか？"
      >
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleDownload}
            className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
          >
            ダウンロード
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            キャンセル
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default WhatWeDo;