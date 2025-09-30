import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
    if (!formspreeId) {
      toast({ title: "Form not configured", description: "Add VITE_FORMSPREE_ID to your environment to enable submissions.", });
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      const ok = res.ok;
      if (ok) {
        toast({ title: "Message Sent Successfully!", description: "Thank you for contacting Sahaani. We'll get back to you within 24 hours.", });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast({ title: "Submission failed", description: "Please try again later or email hello@sahaani.rw" });
      }
    } catch (err) {
      toast({ title: "Network error", description: "Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+250 795300418",
      subtitle: "Available 24/7 for orders and inquiries",
      action: "tel:+250795300418"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@sahaani.rw",
      subtitle: "We respond within 24 hours",
      action: "mailto:hello@sahaani.rw"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kigali, Rwanda",
      subtitle: "We deliver throughout the city",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sun: 7:00 AM - 11:00 PM",
      subtitle: "Order anytime, we're always here",
      action: "#"
    }
  ];

  const quickActions = [
    {
      title: "Order Food",
      description: "Browse our menu and place an order for delivery",
      action: "Order Now",
      href: "/menu"
    },
    {
      title: "Catering Services",
      description: "Plan your event with our catering packages",
      action: "Get Quote",
      href: "/catering"
    },
    {
      title: "Customer Support",
      description: "Need help with an existing order or have questions?",
      action: "Contact Support",
      href: "#contact-form"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact | Sahaani</title>
        <meta name="description" content="Contact Sahaani for orders, catering and inquiries. We'd love to hear from you." />
        <meta property="og:title" content="Contact | Sahaani" />
        <meta property="og:description" content="Contact Sahaani for orders, catering and inquiries." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/saahani-logo.png" />
        <meta property="og:url" content="/contact" />
      </Helmet>
      <Header />

      {/* Contact Form Only */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Send Message
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Drop Us a <span className="text-gradient-gold">Message</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <Card className="card-food">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
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
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+250 xxx xxx xxx"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this about?"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg" disabled={submitting}>
                    <Send className="h-5 w-5 mr-2" />
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>We typically respond within 24 hours</span>
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

export default Contact;