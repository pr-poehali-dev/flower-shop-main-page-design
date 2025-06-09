import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Clock",
      title: "Доставка за 2 часа",
      description: "Быстрая доставка свежих цветов по всему городу",
    },
    {
      icon: "Leaf",
      title: "Только свежие цветы",
      description: "Ежедневные поставки прямо с плантаций",
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Создаем уникальные композиции под ваши пожелания",
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "Возврат или замена в течение 24 часов",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-montserrat mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Более 5 лет дарим радость и красоту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Icon name={feature.icon} size={32} className="text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
