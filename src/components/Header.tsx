import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 p-2 rounded-full">
              <Icon name="Flower" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800 font-montserrat">
              Флора
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-all duration-300 font-medium relative group"
            >
              Каталог
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-all duration-300 font-medium relative group"
            >
              Букеты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-all duration-300 font-medium relative group"
            >
              Доставка
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-all duration-300 font-medium relative group"
            >
              О нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hover:bg-pink-50">
              <Icon name="Search" size={20} className="text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-pink-50 relative"
            >
              <Icon name="ShoppingCart" size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Заказать
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon
                name={isMenuOpen ? "X" : "Menu"}
                size={24}
                className="text-gray-600"
              />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium py-2"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium py-2"
              >
                Букеты
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium py-2"
              >
                Доставка
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium py-2"
              >
                О нас
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
