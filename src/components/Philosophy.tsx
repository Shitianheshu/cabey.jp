import React, { useEffect } from 'react';
import { Lightbulb, Users, Eye, Target, Heart, Compass, Globe2, TrendingUp } from 'lucide-react';
import Roadmap from './Roadmap';

const Philosophy: React.FC = () => {
  useEffect(() => {
    document.title = '企業理念 | Carbey';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Carbeyの企業理念。革新的な考え方で中古車市場を変革し、誰でも車屋になれる未来を実現します。');
    }
  }, []);

  const principles = [
    {
      icon: Lightbulb,
      title: '業界の"当たり前"を変える',
      subtitle: '誰でも参加できるビジネスへ',
      description: '従来の中古車販売は経験と資金が必要でした。私たちは技術とシステムで、この参入障壁を取り払います。'
    },
    {
      icon: Users,
      title: '仕組みに乗るだけで、収益が積み上がる',
      subtitle: '売る/仕入れるは本部が代行',
      description: '加盟者は在庫リスクを負うことなく、運営本部が一括で代行する自動売買システムで安定収益を実現します。'
    },
    {
      icon: Eye,
      title: '情報はすべてオープンに',
      subtitle: 'フェアで透明な運用',
      description: 'データ分析結果から収益配分まで、すべての情報を透明化し、信頼できるパートナーシップを築きます。'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="mb-4">
            <span className="block text-4xl lg:text-5xl font-bold mb-2" style={{ fontSize: '2.2rem' }}>
              PHILOSOPHY
            </span>
            <span className="block text-lg font-medium" style={{ fontSize: '1rem' }}>
              企業理念
            </span>
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            革新的な考え方で中古車市場を変革する
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Philosophy
          </h2>
          <p className="text-lg text-gray-600 mb-8">理念</p>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              私たちCarbeyは、「誰もが車屋になれる社会」を目指し、<br />
              自動車流通の新しいグローバルスタンダードを創造します。
            </p>
            <p>
              統計学に基づいた最新AIテクノロジーとビッグデータ解析を活用し、中古車販売の属人的で難易度の高い仕入れの負担を限界まで削減し軽快な意思決定を可能にします。
             </p>
             <p>
              仕入れの為に要した膨大な時間を極力削減でき、自己の自由時間が増えゆとりある業務体制が取りやすく負担が少ないので加盟者が安心して事業に挑戦できる仕組みを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#eef3f9' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
              Values
            </h2>
            <p className="text-lg text-gray-600 mb-8">価値観</p>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: '挑戦',
                description: '既存の常識を打ち破り、新しい流通の形をつくる'
              },
              {
                icon: Heart,
                title: '信頼',
                description: '加盟者・顧客・パートナーとの信頼を最優先にする'
              },
              {
                icon: TrendingUp,
                title: '成長',
                description: '加盟者の成長と共に、私たち自身も進化を続ける'
              },
              {
                icon: Users,
                title: '共創',
                description: '個人の力をつなぎ、社会全体で価値を広げていく'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <value.icon className="w-6 h-6" style={{ color: '#0f172a' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#0f172a' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credo Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Credo
          </h2>
          <p className="text-lg text-gray-600 mb-8">行動指針</p>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              私たちのすべての意思決定は「安心して利益を得られるか」を基本とします。
            </p>
            <p>
              数字やデータに基づく判断や売買状況は常にオープンであり情報共有を大切にします。
            </p>
          </div>
        </div>
      </section>

      {/* Why we exist Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#eef3f9' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Why we exist
          </h2>
          <p className="text-lg text-gray-600 mb-8">存在意義</p>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              日本の中古車市場は巨大でありながら、仕組みはまだ不透明性が多く参入障壁が高いのが現状です。
            </p>
            <p>
              Carbeyは、この巨大市場を「誰もが参加できる壮大なフィールド」へと変革し、新しい働き方の改変と豊かな地域社会の実現に貢献します。
            </p>
          </div>
        </div>
      </section>

      {/* 代表メッセージ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
              代表メッセージ
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                約5年ほど前のこと、私たち経営陣はそれぞれ別々の事業をしていました。
              </p>
              <p>
                ある日、中古車販売店を営む私は、今の経営陣のメンバーたちと出会うことになります。
              </p>
              <p>
                そして意気投合して手を組むことに。
              </p>
              <p>
                様々な苦境がありましたが互いの強みを持ち寄ることで大きな成果を上げ、苦楽を共にしました。
              </p>
              <p>
                ある時は、コロナウイルスによる経済危機があり、また、ある時は大手中古車販売店の不祥事で世間の風当たりが強く、かつてない程の景気低迷やイメージダウンにより業界全体に悲観ムードが漂っていることを強く認識します。
              </p>
              <p>
                このままでは業界全体が危ない。という状況になったとき、ちょうど私が自社で開発していたシステムを応用し多くの方に利用してもらえればどのようになれるか考えました。
              </p>
              <p>
                この時、「仕組み化されたビジネスモデルなら、誰でも参加できるし収益基盤が安定すれば中古車販売を始めたい方はだれでも成功できるのではないか」という観点で経営陣は意見を一致させます。いろいろと検証し、スキーム的にも問題ないことに確信を得て、このCarbeyを立ち上げました。
              </p>
              <p>
                今後も「加盟者の成功こそがCarbeyの成功」という姿勢で、事業を邁進してまいります。
              </p>
              
              <div className="text-right mt-8 pt-6 border-t border-gray-200">
                <p className="text-xl font-bold text-gray-900">
                  代表取締役　山岡 淳宏
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ロードマップ */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#eef3f9' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
              ロードマップ
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6">
              Carbeyの成長戦略と各フェーズでの展開計画
            </p>
          </div>
          <Roadmap />
        </div>
      </section>

    </div>
  );
};

export default Philosophy;