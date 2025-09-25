import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-food-spread.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious Sahaani food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Rated 5.0 by our customers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Taste the 
            <span className="text-gradient-gold block">
              Authentic
            </span>
            Flavors
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
            Experience the finest African cuisine with fresh ingredients, 
            traditional recipes, and modern presentation. From home deliveries 
            to special events - Sahaani brings flavor to every occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button className="btn-hero text-lg px-8 py-4">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4">
              View Menu
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Star className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold">Fresh Daily</div>
              <div className="text-sm text-muted-foreground">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;