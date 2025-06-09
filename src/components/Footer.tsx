import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Flower" size={32} className="text-pink-400" />
              <span className="text-2xl font-bold font-montserrat">Флора</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Мы создаем незабываемые моменты с помощью свежих цветов. Каждый
              букет — это история любви и заботы.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-pink-400"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-pink-400"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-pink-400"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Букеты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Композиции
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Растения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Подарки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@flora.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Цветочная, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p className="text-gray-400">© 2024 Флора. Все права защищены.</p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-pink-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
