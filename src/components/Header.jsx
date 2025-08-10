import { Youtube, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = ({ onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-yellow-400 border-opacity-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* الشعار */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={onHomeClick}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-lg">
              <Youtube className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">قناة التطبيقات</h1>
              <p className="text-sm text-gray-300">والخدمات المجانية</p>
            </div>
          </div>

          {/* قائمة التنقل للكمبيوتر */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors">
              الرئيسية
            </a>
            <a href="#videos" className="text-white hover:text-yellow-400 transition-colors">
              الفيديوهات
            </a>
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors">
              عن القناة
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
              تواصل معنا
            </a>
          </nav>

          {/* زر القائمة للهواتف */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* قائمة التنقل للهواتف */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-400 border-opacity-20 pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </a>
              <a 
                href="#videos" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الفيديوهات
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                عن القناة
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

