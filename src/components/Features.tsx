
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Clock",
      title: "Доставка за 2 часа",
      description: "Быстрая доставка свежих цветов по всему городу в любое время",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: "Leaf",
      title: "Только свежие цветы",
      description: "Ежедневные поставки прямо с лучших цветочных плантаций",
      color: "from-green-400 to-green-500"
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Создаем уникальные композиции под ваши пожелания и события",
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "Возврат или бесплатная замена в течение 24 часов",
      color: "from-yellow-400 to-yellow-500"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2322c55e" fill-opacity="0.03"%3E%3Cpath d="M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="CheckCircle" size={16} className="mr-2" />
            Наши преимущества
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 5 лет дарим радость и красоту, создавая незабываемые моменты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className={`inline-block p-6 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-6`}>
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Готовы сделать кого-то счастливым?
            </h3>
            <p className="text-xl mb-8 text-pink-100">
              Закажите букет прямо сейчас и получите скидку 15% на первый заказ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
                Выбрать букет
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors">
                Позвонить нам
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
