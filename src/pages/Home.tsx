import * as React from "react";
import Doctor from "../components/doctorsSection/Doctor";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import Hero from "../components/heroSection/Hero";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Doctor />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
