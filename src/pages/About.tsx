import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "Every dish is prepared with love and dedication to authentic African flavors"
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in bringing people together through the joy of sharing great food"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Only the freshest ingredients and traditional recipes meet our high standards"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Consistent quality and timely delivery, every single time you order"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Menu Items" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Service Hours" }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Sahaani
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Story</span> of Flavor
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From humble beginnings to becoming Rwanda's beloved food destination, 
              Sahaani represents the perfect blend of traditional African cuisine 
              and modern culinary excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Founded with <span className="text-gradient-gold">Love</span> and Tradition
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Sahaani began as a dream to share the rich, authentic flavors of African 
                  cuisine with our community. Our founders, passionate about food and culture, 
                  wanted to create a place where traditional recipes could shine in a modern setting.
                </p>
                <p>
                  What started as a small kitchen operation has grown into a beloved brand 
                  known for quality, authenticity, and exceptional service. Every dish we 
                  serve carries the essence of African culinary heritage, prepared with 
                  techniques passed down through generations.
                </p>
                <p>
                  Today, Sahaani serves hundreds of satisfied customers daily, offering 
                  everything from intimate family meals to large-scale catering services. 
                  Our commitment remains unchanged: to deliver extraordinary food experiences 
                  with every order.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="card-food text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes Us <span className="text-gradient-gold">Special</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values drive everything we do, from ingredient selection 
              to customer service. These principles define the Sahaani experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="card-food text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-gradient-gold">Mission</span>
            </h2>
            <div className="bg-card/50 rounded-2xl p-8 md:p-12 border border-border">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                "To preserve and celebrate African culinary traditions while making 
                exceptional food accessible to everyone. We strive to create memorable 
                dining experiences that bring families and communities together, 
                one delicious meal at a time."
              </p>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-semibold text-primary">- The Sahaani Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;