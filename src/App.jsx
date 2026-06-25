import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BMI from "./pages/BMI";
import Calories from "./pages/Calories";
import Water from "./pages/Water";
import Workout from "./pages/Workout";
import Progress from "./pages/Progress";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/bmi" element={<BMI />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/water" element={<Water />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </>
  );
}

export default App;