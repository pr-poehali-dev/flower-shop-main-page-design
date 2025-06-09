import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-2 rounded-full">
                  <Icon name="Flower" size={28} className="text-white" />
                </div>
                <span className="text-3xl font-bold font-montserrat">
                  Флора
                </span>
              </div>
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Мы создаем незабываемые моменты с помощью свежих цветов. Каждый
                букет — это история любви, заботы и красоты.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold">
                  Подписаться на новости
                </h4>
                <div className="flex space-x-2 max-w-md">
                  <Input
                    placeholder="Ваш email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Button className="bg-pink-500 hover:bg-pink-600">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-pink-400 hover:bg-gray-800 p-3 rounded-full"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-pink-400 hover:bg-gray-800 p-3 rounded-full"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-pink-400 hover:bg-gray-800 p-3 rounded-full"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-pink-400 hover:bg-gray-800 p-3 rounded-full"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-pink-400">Каталог</h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-400 transition-colors flex items-center space-x-2"
                  >
                    <Icon name="Heart" size={14} />
                    <span>Романтические букеты</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-400 transition-colors flex items-center space-x-2"
                  >
                    <Icon name="Leaf" size={14} />
                    <span>Весенние композиции</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-400 transition-colors flex items-center space-x-2"
                  >
                    <Icon name="Briefcase" size={14} />
                    <span>Деловые букеты</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-400 transition-colors flex items-center space-x-2"
                  >
                    <Icon name="Gift" size={14} />
                    <span>Подарочные наборы</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-400 transition-colors flex items-center space-x-2"
                  >
                    <Icon name="Sparkles" size={14} />
                    <span>Экзотические цветы</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-pink-400">Контакты</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-full mt-1">
                    <Icon name="Phone" size={16} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="font-semibold">+7 (999) 123-45-67</div>
                    <div className="text-sm text-gray-400">Круглосуточно</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-full mt-1">
                    <Icon name="Mail" size={16} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="font-semibold">info@flora.ru</div>
                    <div className="text-sm text-gray-400">
                      Ответим в течение часа
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-full mt-1">
                    <Icon name="MapPin" size={16} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      Москва, ул. Цветочная, 15
                    </div>
                    <div className="text-sm text-gray-400">
                      Ежедневно с 8:00 до 22:00
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-full mt-1">
                    <Icon name="Clock" size={16} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-sm text-gray-400">
                      Пн-Вс: 08:00 - 22:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">
                © 2024 Флора. Все права защищены.
              </p>
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Условия использования
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Возврат и обмен
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
