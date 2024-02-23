import * as React from "react";
import Doctor from "../components/doctorsSection/Doctor";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import Hero from "../components/heroSection/Hero";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCity } from "../store/cityParams/cityslice";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const citySize = new URLSearchParams(location.search);
    const cityName = citySize.get("city") || "None";
    console.log(cityName);

    if (citySize.size > 0) {
      dispatch(setCity({ city: cityName }));
    }
  }, [location.search, dispatch]);
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
