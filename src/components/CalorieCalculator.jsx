import React, { useState } from "react";
import '../styles/Calories.css';

function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    const bmr =
      10 * Number(weight) +
      6.25 * Number(height) -
      5 * Number(age) +
      5;

    setCalories(Math.round(bmr * 1.55));
  };

return (
  <div className="page-container">
    <div className="calorie-card">

      <h2 className="calorie-title">
        🔥 Calorie Calculator
      </h2>

      <div className="calorie-form">

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button
          className="calorie-btn"
          onClick={calculateCalories}
        >
          Calculate Calories
        </button>

      </div>

      {calories && (
        <div className="calorie-result">
          <h3>Daily Calories</h3>
          <p>{calories} kcal/day</p>
        </div>
      )}

    </div>
  </div>
);
}

export default CalorieCalculator;