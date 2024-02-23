import Footer from "../footer/Footer";
import Header from "../header/Header";
import Form from "./Form";

const Booking = () => {
  // const location = useLocation();

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center py-5 relative">
        <h1 className="text-4xl font-bold mb-5 text-center">Book a visit</h1>
        <div className="w-5/6 mx-auto">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
