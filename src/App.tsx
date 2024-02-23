import { Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./components/bookingSection/Booking";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App mx-auto ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
