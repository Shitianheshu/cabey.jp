import React, { useEffect } from 'react';
import { MapPin, Calendar, Users, Building, Globe, Clock, DollarSign } from 'lucide-react';

const Company: React.FC = () => {
  useEffect(() => {
    document.title = '会社情報 | Carbey';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Carbey株式会社の会社概要・代表挨拶・事業内容をご紹介します。');
    }
  }, []);

  const companyData = [
    {
      label: '会社名',
      value: 'カーベイ株式会社'
    },
    {
      label: '所在地',
      value: '〒243-0014\n神奈川県厚木市旭町1-21-12 三紫ビル3A'
    },
    {
      label: '設立',
      value: '2025年6月'
    },
    {
      label: '代表者',
      value: '代表取締役 山岡 淳宏'
    },
    {
      label: 'TEL',
      value: '046-210-4561'
    },
    {
      label: '資本金',
      value: '300万円'
    },
    {
      label: '顧問',
      value: '弁護士：ITJ 法律事務所\n税理士：一戸税理士事務所'
    },
    {
      label: '主要取引先',
      value: 'オリックス自動車株式会社\nUSS株式会社\nオークネット株式会社\nzero株式会社\n株式会社リクルート\nプロトコーポレーション ほか'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 text-white"
        style={{
          backgroundImage: 'url(./img7.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            COMPANY
          </h1>
          <p className="text-xl">
            会社情報
          </p>
          <div className="w-16 h-0.5 bg-white mx-auto mt-6"></div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              代表挨拶
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* メッセージ */}
            <div className="lg:col-span-2 max-w-4xl mx-auto space-y-8">
              <div className="space-y-6 text-gray-900 leading-relaxed text-lg">
                <p>
                  冠省。
                </p>
                <p>
                  従来の中古車販売は、豊富な経験と多額の資金を必要とする、限られた人々の為にあるようなビジネスでした。
                </p>
                <p>
                  私たちは、中古車業界の抱える社会課題や、現在の抑制された既存の枠組みを超えて、<br />
                  誰でも、儲かれる車屋になれる未来を実現したいと考えています。
                </p>
                <p>
                  Carbeyは、独自開発したリサーチシステムと自動売買システムを組み合わせたフランチャイズシステムを、より多くの方に利用して頂くことにより、様々な社会課題と参入障壁を取り払うことが出来ると確信しております。
                </p>
                <p>
                  継続的に収益を積み上げられるフランチャイズシステムの仕組みを提供することによって、より多くの方に新しいとって新しいビジネスの可能性をお届けします。<br />
                  公正で透明性の高い中古車市場を築き、挑戦する全ての人が成功できる環境を創造してまいります。
                </p>
              </div>

              <div className="text-right mt-8 pt-6 border-t border-gray-200">
                <p className="text-xl font-bold text-gray-900">
                  代表取締役　山岡 淳宏
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要・アクセス */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#eef3f9' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* 左側：会社概要 */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  会社概要
                </h2>
                <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {companyData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-b-0">
                        <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700 w-32">
                          {item.label}
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                          {/* {item.isLink ? (
                            <a
                              href={item.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline"
                            >
                              {item.value}
                            </a>
                          ) : ( */
                            <div className="whitespace-pre-line">{item.value}</div>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 右側：アクセス */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  アクセス
                </h2>
                <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
              </div>

              <div className="space-y-8">
                {/* 本社オフィス */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">本社オフィス</h3>
                  <div className="bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.8234567890123!2d139.3654321!3d35.4432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI2JzM1LjYiTiAxMznCsDIxJzU1LjYiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="本社オフィスの所在地"
                      className="w-full"
                    ></iframe>
                  </div>
                  <div className="text-center">
                    <a
                      href="https://maps.google.com/?q=神奈川県厚木市旭町1-21-12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm underline"
                    >
                      拡大地図を表示
                    </a>
                  </div>
                </div>

                {/* 交通アクセス */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">交通アクセス</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">●</span>
                      <p>小田急線「本厚木駅」東口より徒歩3分</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">●</span>
                      <p>JR相模線「厚木駅」より徒歩15分</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">●</span>
                      <p>東名高速道路「厚木IC」より車で10分</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              沿革
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-300"></div>

              <div className="space-y-12">
                {[
                  { year: '2023', event: '構想開始・市場調査' },
                  { year: '2024', event: 'システム開発・法人設立準備' },
                  { year: '2025', event: '会社設立・サービス開始' },
                  { year: '2026', event: 'サービス拡張・全国展開' }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center shadow-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <span className="text-2xl font-bold text-gray-700 block mb-2">
                            {item.year}
                          </span>
                          <span className="text-lg font-semibold text-gray-900">
                            {item.event}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;