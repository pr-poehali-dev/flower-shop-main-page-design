import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Categories = () => {
  const categories = [
    {
      title: "Романтические букеты",
      description: "Для особенных моментов",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&h=300",
      badge: "Популярно",
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Весенние композиции",
      description: "Свежесть и яркость",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=400&h=300",
      badge: "Новинка",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Деловые букеты",
      description: "Элегантно и стильно",
      image:
        "https://images.unsplash.com/photo-1606048864395-6d2138e1b5ee?auto=format&fit=crop&w=400&h=300",
      badge: "Тренд",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Экзотические цветы",
      description: "Редкие и необычные",
      image:
        "https://images.unsplash.com/photo-1597662616445-2c019b1e3894?auto=format&fit=crop&w=400&h=300",
      badge: "Эксклюзив",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-montserrat mb-4">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите идеальные цветы для любого случая из наших тщательно
            подобранных коллекций
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 right-3 ${category.color}`}>
                  {category.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
