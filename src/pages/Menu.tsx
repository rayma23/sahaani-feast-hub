import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Star, Clock } from "lucide-react";
import { menuItems as allItems, categoryOrder } from "@/lib/menu-data";
import chickenWings from "@/assets/chicken-wings.jpg";
import beefSteak from "@/assets/beef-steak.jpg";
import freshSalad from "@/assets/fresh-salad.jpg";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of allItems) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return [
      { id: "all", name: "All Items", count: allItems.length },
      ...categoryOrder.map(c => ({ id: c.id, name: c.name, count: counts[c.id] || 0 }))
    ];
  }, []);

  const imageForCategory = (category: string) => {
    switch (category) {
      case "chicken":
        return chickenWings;
      case "beef":
        return beefSteak;
      case "fruits_salads":
      case "packages":
      case "drinks":
      case "snacks":
      case "omelet":
      case "agatogo":
      default:
        return freshSalad;
    }
  };

  const menuItems = useMemo(() => {
    return allItems.map(i => ({
      ...i,
      image: i.image || imageForCategory(i.category),
      rating: 4.8,
      prepTime: "10-20 mins",
    }));
  }, []);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Menu | Sahaani</title>
        <meta name="description" content="Explore our delicious menu: chicken, beef, salads and more." />
        <meta property="og:title" content="Menu | Sahaani" />
        <meta property="og:description" content="Explore our delicious menu: chicken, beef, salads and more." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/saahani-logo.png" />
        <meta property="og:url" content="/menu" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Menu
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Our <span className="text-gradient-gold">Delicious</span> Menu
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover authentic African flavors prepared with fresh ingredients and traditional recipes. 
              Each dish tells a story of culture and culinary excellence.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-card border-border"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "btn-hero"
                    : "btn-secondary"
                }
              >
                {category.name}
                <Badge className="ml-2 bg-primary/20 text-primary">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="card-food group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  {item.isPopular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>

                  <Button className="w-full btn-hero group">
                    <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform" />
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;