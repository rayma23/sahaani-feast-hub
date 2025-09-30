import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  CheckCircle, 
  Star,
  Clock,
  Award,
  Phone
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: ""
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formspreeIdRaw = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
    const formspreeId = formspreeIdRaw?.includes("formspree.io/f/")
      ? formspreeIdRaw.split("/").pop()
      : formspreeIdRaw;
    if (!formspreeId) {
      toast({
        title: "Submission not configured",
        description: "Missing VITE_FORMSPREE_ID. Please set it and reload.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("_replyto", formData.email);
      payload.append("phone", formData.phone);
      payload.append("eventType", formData.eventType);
      payload.append("eventDate", formData.eventDate);
      payload.append("guestCount", formData.guestCount.toString());
      payload.append("message", formData.message);
      payload.append("formName", "Catering Request");
      payload.append("_subject", `New Catering Request from ${formData.name}`);
      payload.append("_gotcha", "");

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast({
        title: "Catering Request Sent!",
        description:
          "Thank you for your interest in our catering services. We'll contact you within 24 hours with a custom quote.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const packages = [
    {
      name: "Sahaani Combo for 2",
      description: "Rice, beef or chicken, fries or plantain, salad & homemade chapatti",
      price: "14k rwf",
      serves: "2 people",
      isPopular: false
    },
    {
      name: "Sahaani Solo Delight",
      description: "Rice, beef or chicken, fries or plantain, salad & homemade chapatti",
      price: "6k rwf",
      serves: "1 person",
      isPopular: true
    },
    {
      name: "Sahaani Quick Bite",
      description: "Rice, fries beef or peas/beans, vegetables",
      price: "4k rwf",
      serves: "1 person",
      isPopular: false
    }
  ];

  const eventTypes = [
    {
      title: "Corporate Events",
      description: "Professional catering for meetings, conferences, and corporate gatherings",
      icon: Award,
      features: ["Professional presentation", "Flexible timing", "Custom menus", "Full service"]
    },
    {
      title: "Weddings & Parties",
      description: "Make your special day memorable with our elegant catering services",
      icon: Users,
      features: ["Beautiful presentation", "Variety of options", "Dedicated staff", "Setup included"]
    },
    {
      title: "Private Events",
      description: "Intimate gatherings, birthday parties, and family celebrations",
      icon: Calendar,
      features: ["Personalized service", "Flexible packages", "Home delivery", "Custom requests"]
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Fresh Ingredients",
      description: "We use only the freshest, locally-sourced ingredients for all our catering"
    },
    {
      icon: Users,
      title: "Any Group Size",
      description: "From intimate gatherings of 10 to large events of 500+ guests"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time delivery and setup, every time, guaranteed"
    },
    {
      icon: Star,
      title: "Professional Staff",
      description: "Experienced team to handle all aspects of your catering needs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Catering Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exceptional <span className="text-gradient-gold">Catering</span> for Every Occasion
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From intimate family gatherings to large corporate events, Sahaani delivers 
              authentic African cuisine that will make your event unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-hero text-lg px-8 py-4">
                Get Custom Quote
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call +250 795300418
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Popular <span className="text-gradient-gold">Catering</span> Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our specially designed packages or let us create a custom menu for your event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card key={index} className="card-food text-center relative">
                {pkg.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="text-sm text-primary font-semibold mb-6">Serves {pkg.serves}</div>
                  <Button className="btn-hero w-full">
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Need something different? We can create custom packages for any event size.
            </p>
            <Button className="btn-secondary">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Event Types
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for <span className="text-gradient-gold">Any</span> Occasion
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="card-food">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <eventType.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{eventType.title}</h3>
                  <p className="text-muted-foreground mb-6">{eventType.description}</p>
                  <ul className="space-y-2">
                    {eventType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient-gold">Sahaani</span> Catering?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-food text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Book Catering
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request Your <span className="text-gradient-gold">Custom</span> Quote
              </h2>
              <p className="text-muted-foreground">
                Tell us about your event and we'll create the perfect catering solution
              </p>
            </div>

            <Card className="card-food">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+250 xxx xxx xxx"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Type *</label>
                      <Input
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        placeholder="Wedding, Corporate, Birthday..."
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Date *</label>
                      <Input
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Guests *</label>
                      <Input
                        name="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        placeholder="e.g. 50"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Details</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your event, dietary requirements, preferences..."
                      rows={4}
                      className="bg-background border-border"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg" disabled={isSubmitting}>
                    <Calendar className="h-5 w-5 mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit Catering Request"}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>We'll respond with a custom quote within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;