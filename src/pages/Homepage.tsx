import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedDishes />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;