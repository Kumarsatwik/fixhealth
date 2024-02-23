import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  heading: string;
  testimonial: string;
  photo_url: string;
  rating: number;
}

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const [data, setData] = useState<Testimonial[]>([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/2a92f0ac-4a23-47d6-8850-2ec73c13b191")
      .then((res) => {
        setData(res.data.testimonials);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-10 w-full mx-auto" id="testimonials">
      <h1 className="text-3xl font-bold text-center my-5">Testimonials</h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-3">
        {data.map((item) => (
          <div className="border p-5 rounded" key={item.id}>
            <span className="flex justify-start gap-x-4 mb-2">
              <img
                src={item.photo_url}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <p className="text-lg font-semibold mt-2"> {item.name}</p>
            </span>
            <p className="text-sm font-mono italic mb-2 ml-12">
              ⭐️⭐️⭐️⭐️⭐️
            </p>
            <p className="text-sm font-mono italic">{item.testimonial}</p>
          </div>
        ))}
      </div> */}

      <Slider {...settings}>
        {data.map((item) => (
          <div className="border p-5 rounded my-2 h-[250px]" key={item.id}>
            <span className="flex justify-start gap-x-4 mb-2">
              <img
                src={item.photo_url}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <p className="text-lg font-semibold mt-2"> {item.name}</p>
            </span>
            <p className="text-sm font-mono italic mb-2 ml-12">
              {Array.from({ length: item.rating }).map((_, index) => (
                <span key={index}>⭐️</span>
              ))}
            </p>
            <p className="text-lg font-mono italic mb-2 font-bold">
              {item.heading}
            </p>
            <p className="text-sm font-mono italic">{item.testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
