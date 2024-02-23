import axios from "axios";
import React, { useEffect, useState } from "react";
import BookingModal from "../bookingModal/BookingModal";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    age: 0,
    city: "",
    company: "",
    chiefComplaints: "",
    previousExpreience: "",
  });
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [filteredData, setFilteredData] = useState<Doctor[]>([]);
  const [data, setData] = useState<Doctor[]>([]);

  const [city, setCity] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDoctor == "") {
      return alert("please select doctor");
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
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/");
    }, 2000);
  };

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
      setSelectedDoctor("");
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
    <div className="grid grid-cols-2  gap-10 justify-between">
      <form
        className="border py-5 w-full rounded-lg mx-5 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl font-bold">Fill Form</p>
        <div className="w-full sm:w-2/3 flex flex-col gap-2 my-2">
          <label className="font-bold">Enter Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>

        <div className="w-full sm:w-2/3 flex flex-col gap-2 my-2">
          <label className="font-bold">Phone Number</label>
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>

        <div className="w-full sm:w-2/3 flex flex-col gap-2 my-2">
          <label className="font-bold">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="p-2 border rounded-md"
            required
          />
        </div>

        <div className="w-full sm:w-2/3 flex flex-col gap-2 my-2">
          <label className="font-bold">City</label>
          <select
            className="p-2 border rounded-md"
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

        <div className="w-full sm:w-2/3 flex flex-col gap-2 my-2">
          <label className="font-bold">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="p-2 border rounded-md"
            required
          />
        </div>

        <div className="w-full sm:w-2/3 flex flex-col gap-2 my-2">
          <label className="font-bold">Chief Complaint</label>
          <input
            placeholder="Chief Complaint"
            onChange={handleChange}
            type="text"
            value={formData.chiefComplaints}
            name="chiefComplaints"
            className="p-2 border rounded-md w-full  text-white"
            required
          />
        </div>

        {formData.age >= 40 && (
          <div className="w-full sm:w-2/3 flex flex-col gap-2 my-2">
            <label>Any previous experience with physiotherapy</label>
            <input
              name="previousExpreience"
              type="text"
              onChange={handleChange}
              value={formData.previousExpreience}
              className="p-2 border rounded-md w-full my-2 text-white"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 mt-5 rounded"
        >
          Book
        </button>

        {showModal && <BookingModal />}
      </form>

      <div className="w-full border p-2">
        <p className="mb-2 text-xl text-center font-bold">
          {formData.city.trim() !== ""
            ? `${formData.city} City`
            : "Our Top Doctors"}
        </p>
        <label className="italic">Choose Doctor</label>

        <div className=" overflow-auto">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                className={` border mb-5 flex justify-around items-center p-2 cursor-pointer ${
                  selectedDoctor === item.name ? "border-red-500" : ""
                } `}
                key={item.id}
                onClick={() => setSelectedDoctor(item.name)}
              >
                <img
                  src={item.image}
                  className="w-20 h-20 rounded-full"
                  alt=""
                />

                <div className="flex gap-5">
                  <span>
                    <p>Name: {item.name}</p>
                    <p>Specialist : {item.expertise}</p>
                  </span>
                  <span>
                    <p>City : {item.city}</p>
                    <p>Experience : {item.experience_years} years</p>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl font-bold">No data found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
