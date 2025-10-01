import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, Car, Handshake, BarChart3, Settings } from 'lucide-react';
import Modal from './Modal';
import { toast } from "react-toastify";

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDownload = () => {
    // ここに実際のダウンロード処理を実装
    toast.success("ホワイトペーパーをダウンロード中...");
    setIsModalOpen(false);
  };

  const handleContactClick = () => {
    navigate(`/contact?type=document&t=${Date.now()}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 lg:py-32 text-white relative"
        style={{
          backgroundImage: 'url("/img2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            BUSINESS
          </h1>
          <p className="text-xl text-white">
            事業内容
          </p>
        </div>
      </section>

      {/* Service 1: 中古車販売フランチャイズシステムの運用 */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                中古車売買フランチャイズシステムの開発・運用
              </h2>
              <p className="text-xl font-semibold text-red-600">
                誰でも車屋になれる仕組みを提供
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                AIデータ分析と自動売買システムを活用し、車両保管や管理まですべて一元管理。
                在庫リスクを持たずに中古車販売へ参入できるフランチャイズシステムを運用しています。
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-slate-700 border-2 border-slate-600 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                  <Car className="w-16 h-16 text-white mb-2" />
                  <div className="w-8 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: 資金調達サポート・コンサルティング運営 */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-1">
              <div className="w-48 h-48 bg-gray-700 border-2 border-gray-600 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                  <Handshake className="w-16 h-16 text-white mb-2" />
                  <div className="w-8 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                資金調達支援・経営コンサルティング運営
              </h2>
              <p className="text-xl font-semibold text-red-600">
                バリエーション豊富な事業資金調達方法にて各種支援いたしております。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                日本政策金融公庫・市制度融資・県制度融資・信用金庫・保証協会付融資制度・小口零細企業保証制度・スタートアップ融資
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: AIデータ分析・ダイレクトプライシング・データ提供 */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                自社独自開発AIデータ分析提供
              </h2>
              <p className="text-xl font-semibold text-red-600">
                統計学に基づくビッグデータが導く最適な買い付け判断の提供
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ビッグデータを基に解析し、車種別の需要数、回転数、成約数を算出します。
                仕入れミスや売れ残りリスクを極力抑えた最適な売買を可能にしています。
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-800 border-2 border-gray-700 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-white mb-2" />
                  <div className="w-8 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: 自動売買システム開発・運用 */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-1">
              <div className="w-48 h-48 bg-gray-600 border-2 border-gray-500 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                  <Settings className="w-16 h-16 text-white mb-2" />
                  <div className="w-8 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                中古車売買の自動売買システムの開発・運用
              </h2>
              <p className="text-xl font-semibold text-red-600">
                仕入れから販売まで、すべてワンストップで自動化。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                販売までの流れを全て一元管理できるよう設計。
                加盟者は手間なく収益を得られる完全自動型の売買システムを提供しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: ファクタリングシステム開発・運用 */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                ファクタリングシステム開発・運用
              </h2>
              <p className="text-xl font-semibold text-red-600">
                資金繰りを支える仕組み
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                オンラインファクタリングシステムを開発・運営。加盟者や取引先の資金繰りをスピーディーに支援します。
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-slate-600 border-2 border-slate-500 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                  <FileText className="w-16 h-16 text-white mb-2" />
                  <div className="w-8 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 mb-12">
            Carbeyは、2つの事業であなたの挑戦をサポートします。
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <button
              onClick={handleContactClick}
              className="bg-slate-700 text-white px-8 py-6 rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>資料請求</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-100 text-gray-800 border border-gray-300 px-8 py-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>ホワイトペーパー</span>
            </button>
          </div>
        </div>
      </section>

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
            <a href="/carbey-whitepaper.pdf" download="carbey-whitepaper.pdf">
              ダウンロード
            </a>
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            キャンセル
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Services;