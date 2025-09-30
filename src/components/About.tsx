import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 text-white"
        style={{
          backgroundImage: 'url("/img5.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            ABOUT Carbey
          </h1>
          <p className="text-xl">
            カーベイとは
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            MISSION
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            私たちが実現したいこと
          </p>

          <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-700 leading-loose">
            <p className="text-2xl font-semibold text-gray-900">
              最新テクノロジーで中古車売買をもっと簡単に。
            </p>
            <p>
              「車を売る」ことは、これまで多くの経験や多額の資産<br />
              を持つ一部の人に限られていました。
            </p>
            <p>
              Carbeyは自社開発データ分析と自動売買システムによって、<br />
              この参入障壁を取り払い、未経験でも始められる次世代の<br />
              誰でも儲かれる車屋ができるフランチャイズシステムを<br />
              提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#eef3f9' }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            VISION
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            私たちが目指す未来
          </p>

          <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-700 leading-loose">
            <p className="text-2xl font-semibold text-gray-900">
              儲かる車屋をみんなの手に。
            </p>
            <p>
              未経験でも低予算でも始められる。<br />
              誰もが儲かる車屋として事業を始められる社会を実現します。
            </p>
            <p>
              中古車市場の規模は約５兆円規模で成功できる可能性は高い<br />
              と言えます。また、社会的役割は広く、個人や中小事業者が<br />
              主役となる未来をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* Carbey Features Section */}
      <section className="py-20 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Carbeyの強み
          </h2>
        </div>

        <div className="space-y-0">
          {/* Feature 1 */}
          <div
            className="relative min-h-[400px] flex items-center justify-center text-white"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(31,47,77,.80) 0%, rgba(31,47,77,.35) 100%)'
              }}
            ></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <div className="mb-4">
                    <h3 className="text-4xl font-bold mb-2">STRENGTHS 1</h3>
                    <div className="w-24 h-0.5 bg-white mb-6"></div>
                  </div>
                  <h4 className="text-2xl font-bold mb-6">業界初の 中古車自動売買システム</h4>
                  <p className="text-lg leading-relaxed">
                    当システムを活用すれば、フランチャイズ運営本部が、<br />
                    リサーチから仕入れ、販売までを一元管理・代行します。<br />
                    加盟者は在庫リスクを抱えることなく、誰でも簡単に始められます。
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="relative min-h-[400px] flex items-center justify-center text-white"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(32,55,84,.70) 0%, rgba(58,78,107,.35) 100%)'
              }}
            ></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div></div>
                <div className="text-left">
                  <div className="mb-4">
                    <h3 className="text-4xl font-bold mb-2">STRENGTHS 2</h3>
                    <div className="w-24 h-0.5 bg-white mb-6"></div>
                  </div>
                  <h4 className="text-2xl font-bold mb-6">自社開発のリサーチシステム</h4>
                  <p className="text-lg leading-relaxed">
                    中古車相場をリサーチする方法が分からなければそもそも高値掴みを<br />
                    してしまい損することも少なくありません。<br />
                    初めての方がリサーチそのものを敬遠し参入を見送る動機にもなります。<br />
                    Carbeyはビックデータ解析による膨大なデータによる需要予測や、<br />
                    ランダムフォレスト解析など統計学を用いたシステムを導入した<br />
                    AIデータ分析を独自開発し、無理なく事業が始められるように<br />
                    加盟者が事業に取り組めるシステム環境を提供しています。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="relative min-h-[400px] flex items-center justify-center text-white"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(45,55,72,.75) 0%, rgba(26,32,44,.40) 100%)'
              }}
            ></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <div className="mb-4">
                    <h3 className="text-4xl font-bold mb-2">STRENGTHS 3</h3>
                    <div className="w-24 h-0.5 bg-white mb-6"></div>
                  </div>
                  <h4 className="text-2xl font-bold mb-6">継続して得られる安定した収益基盤の構築</h4>
                  <p className="text-lg leading-relaxed">
                    加盟者は毎月単位で売却利益を収受します。<br />
                    日々の運営負担を抱えることなく、継続的に収益<br />
                    を積み上げることができます。
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              会社概要
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black w-32">
                    会社名
                  </td>
                  <td className="px-6 py-4 text-black">
                    カーベイ株式会社
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black">
                    所在地
                  </td>
                  <td className="px-6 py-4 text-black">
                    <div className="whitespace-pre-line">〒243-0014
                      神奈川県厚木市旭町1-21-12 三紫ビル3A</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black">
                    設立
                  </td>
                  <td className="px-6 py-4 text-black">
                    2025年6月
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black">
                    代表者
                  </td>
                  <td className="px-6 py-4 text-black">
                    代表取締役 山岡 淳宏
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black">
                    TEL
                  </td>
                  <td className="px-6 py-4 text-black">
                    046-210-4561
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black">
                    資本金
                  </td>
                  <td className="px-6 py-4 text-black">
                    300万円
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black">
                    顧問
                  </td>
                  <td className="px-6 py-4 text-black">
                    <div className="space-y-1">
                      <div>弁護士：長津法律事務所</div>
                      <div>税理士：一戸税理士事務所</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 bg-gray-50 font-medium text-black">
                    主要取引先
                  </td>
                  <td className="px-6 py-4 text-black">
                    <div className="space-y-1">
                      <div>オリックス自動車株式会社</div>
                      <div>USS株式会社</div>
                      <div>オークネット株式会社</div>
                      <div>zero株式会社</div>
                      <div>株式会社リクルート</div>
                      <div>プロトコーポレーション ほか</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;