import * as React from "react";
import axios from "axios";

interface IDoctorProps {}

interface Doctor {
  id: number;
  name: string;
  image: string;
  expertise: string;
  city: string;
  experience_years: number;
  certifications: [];
}

const Doctor: React.FunctionComponent<IDoctorProps> = () => {
  const [data, setData] = React.useState<Doctor[]>([]);

  React.useEffect(() => {
    axios
      .get("https://mocki.io/v1/58c37514-b671-4413-af6f-70a20d58ce88")
      .then((res) => {
        setData(res.data.doctors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx-auto mt-24 text-white" id="doctors">
      <h2 className="text-4xl font-bold text-center my-16">
        Our Top Rated <span className="text-[#00acc1]">Doctors</span>
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <article className="overflow-hidden border rounded-lg  shadow-md hover:shadow-gray-500 ">
            <img alt="" src={item.image} className="h-56 w-full object-cover" />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-white">{item.name}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {item.expertise}
              </p>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Experience : <b>{item.experience_years} years</b>
              </p>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Certifications :
                {item.certifications.map((cert) => (
                  <span key={cert}> {cert} ,</span>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Doctor;
