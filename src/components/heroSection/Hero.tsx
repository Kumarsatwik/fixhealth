import { Link } from "react-router-dom";
import Header from "../header/Header";
const Hero = () => {
  return (
    <section className="mt-5" id="home">
      <Header />

      <div className="grid grid-cols-1 place-content-between  sm:grid-cols-2 ">
        <div className="flex flex-col items-start justify-center p-5 order-2 sm:order-1">
          <h1 className="text-5xl font-bold my-2">
            <label htmlFor="" className="text-[#00acc1]">
              Your Path to Wellness Starts Here
            </label>{" "}
          </h1>
          <p className="text-xl font-semibold text-gray-500 my-4">
            Comprehensive Physiotherapy Services Tailored to Your Needs
          </p>
          <Link
            to="/booking"
            className="bg-[#00acc1] text-white px-5 py-2 rounded"
          >
            Book now
          </Link>
        </div>
        <div className="order-1 flex justify-end sm:order-2 ">
          <img
            src="/doctor1.jpg"
            className="max-sm:w-2/3 max-sm:mx-auto "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
