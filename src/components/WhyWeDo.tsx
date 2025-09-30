import React from 'react';

const WhyWeDo: React.FC = () => {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: '#eef3f9' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            WHY WE DO
          </h2>
          <p className="text-xl text-gray-900 font-semibold">
            私たちが実現したいこと
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/img4.jpg"
                alt="未来のテクノロジーとビジネス"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                誰でも車屋になれる未来へ
              </h3>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Carbeyは「誰でも車屋になれる未来」を創造します。
                  <div className="space-y-4">
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      自動車販売業界の参入には様々な参入障壁が存在します。
                    </p>
                    <div className="space-y-3">
                      <div className="text-gray-700">
                        <span className="font-semibold">１.</span> 商品仕入れの為の複雑な相場リサーチやノウハウが必要。
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">２.</span> 商品化のための板金塗装技術と安価で収めるための工夫。
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">３.</span> 店舗や人を抱えないと運用できない
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">４.</span> 販管費が高騰していく現代社会構造
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">５.</span> 資金に余裕がないと直ぐに資金繰り難に陥りリスクが高い
                      </div>
                    </div>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      このような参入障壁があるからやりたくてもできない方が多くいるのではないでしょうか。
                    </p>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      Carbeyは、技術、経験や資金の有無を問わず、誰もが安心して挑戦できる仕組みを提供し、新しい自動車売買ビジネスの可能性を広げます。
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDo;