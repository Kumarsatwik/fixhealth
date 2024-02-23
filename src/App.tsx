import { Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./components/bookingSection/Booking";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App  mx-auto ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
