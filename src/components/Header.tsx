import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Flower" size={32} className="text-pink-400" />
            <span className="text-2xl font-bold text-gray-800 font-montserrat">
              Флора
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-pink-400 transition-colors font-medium"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-400 transition-colors font-medium"
            >
              Букеты
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-400 transition-colors font-medium"
            >
              Доставка
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-400 transition-colors font-medium"
            >
              О нас
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white">
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
