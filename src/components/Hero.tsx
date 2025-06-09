import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 font-montserrat leading-tight">
                Свежие цветы
                <span className="block text-pink-400">каждый день</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Создаем незабываемые моменты с помощью самых красивых букетов.
                Доставляем свежесть и радость прямо к вашей двери.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 text-lg"
              >
                <Icon name="Heart" size={20} className="mr-2" />
                Выбрать букет
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-pink-200 text-pink-400 hover:bg-pink-50"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={16} className="text-green-400" />
                <span>Быстрая доставка</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-400" />
                <span>Гарантия свежести</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586440958733-e0d04ad25398?auto=format&fit=crop&w=800&h=600"
                alt="Красивый букет цветов"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Star" size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">4.9/5</div>
                  <div className="text-sm text-gray-500">1200+ отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
