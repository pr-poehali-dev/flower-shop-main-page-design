
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-green-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f9a8d4" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Свежие букеты каждый день
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 font-montserrat leading-tight">
                Живые
                <span className="block text-transparent bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text">
                  эмоции
                </span>
                <span className="block text-4xl lg:text-5xl text-gray-600">
                  в каждом цветке
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Создаем моменты счастья с самыми свежими цветами. 
                Доставляем красоту и радость прямо к вашей двери за 2 часа.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Heart" size={20} className="mr-2" />
                Выбрать букет
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Truck" size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">2 часа</div>
                  <div className="text-sm text-gray-500">Быстрая доставка</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Icon name="Shield" size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">100%</div>
                  <div className="text-sm text-gray-500">Гарантия свежести</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-green-200 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1586440958733-e0d04ad25398?auto=format&fit=crop&w=800&h=900"
                  alt="Красивый букет роз"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-pink-100 animate-scale-in">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-full">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">4.9</div>
                  <div className="text-sm text-gray-500">1200+ отзывов</div>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-green-100 animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Свежие поставки</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
