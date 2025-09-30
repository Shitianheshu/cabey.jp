import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'カーベイとは', path: '/about' },
    { name: '事業内容', path: '/services' },
    { name: '会社情報', path: '/company' },
    { name: '企業理念', path: '/philosophy' },
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      // ホームページ内のセクションへの遷移
      const sectionId = path.substring(2);
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  const handleContactNavigation = (type: 'contact' | 'document') => {
    navigate(`/contact?type=${type}&t=${Date.now()}`);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''
      }`} style={{ backgroundColor: '#1F2F4D' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-200 flex items-center space-x-2"
            >
              <Car className="h-8 w-8" />
              {/* <img src='/logo.png' alt='Carbey Logo' className='h-10 w-auto' /> */}
              <span>Carbey</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium ${location.pathname === item.path ? 'border-b-2 border-white pb-1' : ''
                  }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleContactNavigation('contact')}
              className="bg-white text-[#1F2F4D] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
            >
              お問い合わせ
            </button>
            <button
              onClick={() => handleContactNavigation('document')}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
            >
              資料請求
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-600 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium px-2 py-1 text-left ${location.pathname === item.path ? 'border-l-2 border-white pl-4' : ''
                    }`}
                >
                  {item.name}
                </button>
              ))}
              {/* <button className="bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 w-full mt-4 text-lg">
                お問い合わせ
              </button> */}
              <button
                onClick={() => handleContactNavigation('contact')}
                className="bg-white text-[#1F2F4D] border border-[#1F2F4D] px-6 py-4 rounded-lg font-semibold hover:bg-[#1F2F4D] hover:text-white transition-colors duration-200 w-full mt-4 text-lg"
              >
                お問い合わせ
              </button>
              <button
                onClick={() => handleContactNavigation('document')}
                className="bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 w-full mt-2 text-lg"
              >
                資料請求
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;