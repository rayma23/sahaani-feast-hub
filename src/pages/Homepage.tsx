import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sahaani | From Garden to Plate</title>
        <meta name="description" content="Welcome to Sahaani. Authentic African cuisine, fresh ingredients, catering and delivery in Kigali." />
        <meta property="og:title" content="Sahaani | From Garden to Plate" />
        <meta property="og:description" content="Authentic African cuisine, catering and delivery in Kigali." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/saahani-logo.png" />
        <meta property="og:url" content="/" />
      </Helmet>
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