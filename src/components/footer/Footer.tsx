import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <>
      <footer className=" text-white my-2 py-2 bg-gray-800 w-full" id="contact">
        <h1 className="text-3xl font-bold text-center bg-transparent my-2">
          FixHealth
        </h1>
        <p className="text-center bg-transparent my-2">
          Providing personalized healthcare solutions for a better life.
        </p>
        <p className="text-center bg-transparent my-2">
          Contact: support@fixhealth.com | +1 (123) 456-7890
        </p>
        <p className=" bg-transparent text-center my-2">
          Copyright © 2024. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
