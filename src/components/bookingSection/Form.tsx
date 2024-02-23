import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
interface FormData {
  name: string;
  phone: string;
  age: number;
  city: string;
  chiefComplaints: string;
  previousExpreience: string;
  company: string;
}

interface Doctor {
  id: number;
  name: string;
  image: string;
  expertise: string;
  city: string;
  experience_years: number;
}

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    age: 0,
    city: "",
    company: "",
    chiefComplaints: "",
    previousExpreience: "",
  });
  const [filteredData, setFilteredData] = useState<Doctor[]>([]);
  const [data, setData] = useState<Doctor[]>([]);

  const [city, setCity] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (filteredData.length === 0) {
      toast.error("No doctor available in this city");
      return;
    }
    if (
      formData.name == "" ||
      formData.phone == "" ||
      formData.city == "" ||
      formData.chiefComplaints == "" ||
      formData.company == "" ||
      formData.age == 0
    ) {
      return alert("please fill all details");
    }

    if (formData.phone.length < 10 || formData.phone.length > 10) {
      toast.error("Phone Number should not be smaller and greater than 10");
      return;
    }

    toast.success("Booking successfull ! Please wait for doctor confirmation");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  console.log(filteredData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "city") {
      const filteredData =
        value == "" ? data : data.filter((doctor) => doctor.city === value);
      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/58c37514-b671-4413-af6f-70a20d58ce88")
      .then((res) => {
        setData(res.data.doctors);
        setFilteredData(res.data.doctors);
        setCity(
          Array.from(
            new Set(res.data.doctors.map((doctor: Doctor) => doctor.city))
          )
        );

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const cityName = new URLSearchParams(location.search).get("city");

    if (cityName) {
      setFormData((prevData) => ({
        ...prevData,
        city: cityName,
      }));
      const cityData = data.filter((doctor) => doctor.city === cityName);
      setFilteredData(cityData);
      if (!city.includes(cityName)) {
        setCity([...city, cityName]);
      }
    }
  }, [location.search, data, city]);

  return (
    <div className="flex gap-10 justify-between bg-white">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="/physio.jpg"
              className="absolute inset-0 h-2/3 w-full object-cover"
            />
          </aside>

          <main className="flex items-start justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Meet our best physiotherapist
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Discover Effective Physiotherapy Solutions
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10 p-2 border"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10 p-2 border"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Age{" "}
                  </label>

                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10 p-2 border"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Company Name{" "}
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10 p-2 border"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="chiefComplaints"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>

                  <select
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-10 p-2 border"
                    name="city"
                    required
                    onChange={handleChange}
                    value={formData.city}
                  >
                    <option value="">Choose City</option>
                    {city.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="chiefComplaints"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Chief Complaint
                  </label>

                  <input
                    type="text"
                    id="chiefComplaints"
                    name="chiefComplaints"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-14 p-2 border"
                    value={formData.chiefComplaints}
                    onChange={handleChange}
                    required
                  />
                </div>

                {formData.age >= 40 && (
                  <div className="col-span-6">
                    <label
                      htmlFor="previousExpreience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Any previous experience with physiotherapy{" "}
                    </label>

                    <input
                      type="text"
                      id="previousExpreience"
                      name="previousExpreience"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-14 p-2 border"
                    />
                  </div>
                )}

                {formData.city.trim() != "" && filteredData.length > 0 && (
                  <div className="col-span-6">
                    <h1 className="text-base mb-2 font-semibold">
                      Avaliable Doctor
                    </h1>
                    <div
                      className={` mb-5 flex gap-5 justify-around items-center p-2 cursor-pointer bg-[#00acc1] text-white rounded-lg`}
                      key={filteredData[0].id}
                    >
                      <img
                        src={filteredData[0].image}
                        className="w-16 h-16 rounded-full"
                        alt=""
                      />
                      <div className="">
                        <p>Name: {filteredData[0].name}</p>
                        <p>Specialist : {filteredData[0].expertise}</p>
                        <p>
                          Experience : {filteredData[0].experience_years} years
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Book an appointment
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      {/* {showModal && <BookingModal />} */}
    </div>
  );
};

export default Form;
