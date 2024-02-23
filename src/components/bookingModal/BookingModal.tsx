import React from "react";

interface BookingModalProps {}

const BookingModal: React.FC<BookingModalProps> = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 rounded-md right-43  flex flex-col items-center justify-center p-5 ">
      <h1 className="text-3xl text-center font-bold italic my-3 bg-transparent">
        Thank you for booking
      </h1>
      <img
        src="/Success.gif"
        className="w-1/3 h-2/6 mx-auto bg-transparent"
        alt=""
      />
      <div>
        <p className="text-center bg-gray-500">
          We have received your booking request. We will get back to you within
          24 hours
        </p>
      </div>
    </div>
  );
};

export default BookingModal;
