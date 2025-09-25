import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Uwimana",
      role: "Regular Customer",
      rating: 5,
      text: "The food at Sahaani is absolutely incredible! The flavors are authentic and every dish is prepared with such care. My family's go-to for special occasions.",
      avatar: "S"
    },
    {
      id: 2,
      name: "Jean Baptiste",
      role: "Event Planner",
      rating: 5,
      text: "We've used Sahaani for multiple events and they never disappoint. The catering service is professional and the food always gets rave reviews from our guests.",
      avatar: "J"
    },
    {
      id: 3,
      name: "Grace Mukamana",
      role: "Food Enthusiast",
      rating: 5,
      text: "From the beef steak to the fresh salads, everything at Sahaani is made with love. The delivery is always on time and the presentation is beautiful.",
      avatar: "G"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers 
            have to say about their Sahaani experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="card-food relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-muted-foreground/20">
                  <Quote className="h-8 w-8" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join hundreds of satisfied customers</p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-semibold">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;