import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";
import chickenWings from "@/assets/chicken-wings.jpg";
import beefSteak from "@/assets/beef-steak.jpg";
import freshSalad from "@/assets/fresh-salad.jpg";

const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Grilled Chicken Wings",
      description: "Tender chicken wings marinated in our special blend of African spices, grilled to perfection",
      price: "6.5k rwf",
      image: chickenWings,
      rating: 4.9,
      prepTime: "15 mins",
      serves: "2-3 people",
      isPopular: true
    },
    {
      id: 2,
      name: "Premium Beef Steak",
      description: "Juicy beef steak served with seasonal vegetables and traditional sides",
      price: "8.5k rwf",
      image: beefSteak,
      rating: 4.8,
      prepTime: "20 mins",
      serves: "1-2 people",
      isPopular: false
    },
    {
      id: 3,
      name: "Fresh Garden Salad",
      description: "Mixed greens with fresh tomatoes, avocado, and our signature dressing",
      price: "4k rwf",
      image: freshSalad,
      rating: 4.7,
      prepTime: "5 mins",
      serves: "1 person",
      isPopular: false
    }
  ];

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Featured Dishes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Most <span className="text-gradient-gold">Popular</span> Dishes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the flavors that have made Sahaani a favorite among food lovers. 
            Each dish is prepared with fresh ingredients and authentic recipes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <Card 
              key={dish.id} 
              className="card-food group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {dish.isPopular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{dish.price}</div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{dish.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{dish.serves}</span>
                  </div>
                </div>

                <Button className="w-full btn-hero">
                  Add to Order
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-secondary text-lg px-8 py-4">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;