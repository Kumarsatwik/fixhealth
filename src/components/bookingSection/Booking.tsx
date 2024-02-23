import Footer from "../footer/Footer";
import Header from "../header/Header";
import Form from "./Form";

const Booking = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center py-5 relative">
        <div className="w-5/6 mx-auto">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
