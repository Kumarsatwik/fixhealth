import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface IHeaderProps {}

type RouterPathname = string;

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const location: RouterPathname = useLocation().pathname;

  // Remove leading and trailing slashes consistently
  const pathname = location.trim().replace("/", "");
  return (
    <>
      {" "}
      <div className="flex justify-between px-5 pt-10 text-white">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
            alt="fixhealth"
            className="h-10 sm:h-fit"
          />
        </Link>
        {pathname !== "booking" && (
          <div>
            <Link
              className="p-2 text-lg cursor-pointer hover:text-blue-500"
              to="/"
            >
              Home
            </Link>
            <a
              className="p-2 text-lg cursor-pointer hover:text-blue-500"
              href="#doctors"
            >
              Our Doctors
            </a>

            <a
              className="p-2 text-lg cursor-pointer hover:text-blue-500"
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className="p-2 text-lg cursor-pointer hover:text-blue-500"
              href="#contact"
            >
              Contact Us
            </a>
            <Link
              className="px-5 py-2 text-white rounded-lg bg-[#00acc1] text-medium font-semibold cursor-pointer hover:bg-sky-500"
              to="/booking"
            >
              Book now
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
