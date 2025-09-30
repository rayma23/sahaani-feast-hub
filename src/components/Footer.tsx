import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Heart 
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    menu: [
      { name: "Chicken Specials", href: "/menu#chicken" },
      { name: "Beef Dishes", href: "/menu#beef" },
      { name: "Fresh Salads", href: "/menu#salads" },
      { name: "Beverages", href: "/menu#drinks" }
    ],
    services: [
      { name: "Food Delivery", href: "/delivery" },
      { name: "Catering Services", href: "/catering" },
      { name: "Event Planning", href: "/catering#events" },
      { name: "Corporate Orders", href: "/catering#corporate" }
    ],
    company: [
      { name: "About Sahaani", href: "/about" },
      { name: "Our Story", href: "/about#story" },
      { name: "Contact Us", href: "/contact" },
      { name: "Careers", href: "/contact#careers" }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-background to-sahaani-wood border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6" aria-label="Sahaani Home">
              <img
                src="/saahani-logo.png"
                alt="Saahani logo"
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bringing you the finest African cuisine with fresh ingredients, 
              traditional recipes, and modern presentation. Every meal is 
              prepared with love and authenticity.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Popular Menu</h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">+250 795300418</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">hello@sahaani.rw</p>
                  <p className="text-sm text-muted-foreground">For inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Kigali, Rwanda</p>
                  <p className="text-sm text-muted-foreground">We deliver citywide</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Mon - Sun</p>
                  <p className="text-sm text-muted-foreground">7:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-card rounded-lg border border-border">
              <p className="text-sm font-medium mb-2">Payment Code</p>
              <p className="text-2xl font-bold text-primary">41800</p>
              <p className="text-xs text-muted-foreground">For mobile money payments</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Sahaani. All rights reserved. Made with <Heart className="h-4 w-4 inline text-accent" /> in Rwanda
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;