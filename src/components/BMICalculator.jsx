import React, { useState } from "react";
import '../styles/BMI.css';

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (
      weight /
      (heightInMeters * heightInMeters)
    ).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue < 25) {
      setStatus("Normal Weight");
    } else if (bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className="page-container">
      <div className="feature-card">

        <h2>📏 BMI Calculator</h2>

        <div className="bmi-form">

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <button onClick={calculateBMI}>
            Calculate BMI
          </button>

        </div>

        {bmi && (
          <div className="bmi-result">
            <h3>Your BMI: {bmi}</h3>
            <p>Status: {status}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default BMICalculator;