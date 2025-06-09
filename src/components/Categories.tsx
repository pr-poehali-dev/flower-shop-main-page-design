import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      title: "Романтические букеты",
      description: "Для особенных моментов",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&h=300",
      badge: "Популярно",
      color: "bg-pink-100 text-pink-600",
      price: "от 2 500 ₽",
      icon: "Heart",
    },
    {
      title: "Весенние композиции",
      description: "Свежесть и яркость",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=400&h=300",
      badge: "Новинка",
      color: "bg-green-100 text-green-600",
      price: "от 1 800 ₽",
      icon: "Leaf",
    },
    {
      title: "Деловые букеты",
      description: "Элегантно и стильно",
      image:
        "https://images.unsplash.com/photo-1606048864395-6d2138e1b5ee?auto=format&fit=crop&w=400&h=300",
      badge: "Тренд",
      color: "bg-purple-100 text-purple-600",
      price: "от 3 200 ₽",
      icon: "Briefcase",
    },
    {
      title: "Экзотические цветы",
      description: "Редкие и необычные",
      image:
        "https://images.unsplash.com/photo-1597662616445-2c019b1e3894?auto=format&fit=crop&w=400&h=300",
      badge: "Эксклюзив",
      color: "bg-orange-100 text-orange-600",
      price: "от 4 500 ₽",
      icon: "Sparkles",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Flower2" size={16} className="mr-2" />
            Наши коллекции
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat mb-6">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите идеальные цветы для любого случая из наших тщательно
            подобранных коллекций премиум качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg hover:scale-105 bg-gradient-to-b from-white to-gray-50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge
                  className={`absolute top-4 right-4 ${category.color} shadow-lg`}
                >
                  {category.badge}
                </Badge>
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon
                    name={category.icon}
                    size={20}
                    className="text-pink-500"
                  />
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-pink-600">
                    {category.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white border border-pink-200 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-pink-200 text-pink-600 hover:bg-pink-500 hover:text-white hover:border-pink-500 px-8 py-3"
          >
            Посмотреть все категории
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
