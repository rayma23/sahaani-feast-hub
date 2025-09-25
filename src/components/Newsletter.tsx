import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Sahaani!",
        description: "You've successfully subscribed to our newsletter. Get ready for delicious updates!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 section-dark border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Stay Updated
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Never Miss a <span className="text-gradient-gold">Delicious</span> Update
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new menu items, 
            special offers, and exclusive events. Plus, get 10% off your first order!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-card border-border"
                required
              />
              <Button type="submit" className="btn-hero h-12 px-6">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </form>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-sm text-muted-foreground">
                Get special discounts and promotional codes delivered to your inbox
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">New Menu Items</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to try our latest culinary creations and seasonal specials
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Event Invitations</h3>
              <p className="text-sm text-muted-foreground">
                Get invited to food tastings, cooking classes, and special events
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;