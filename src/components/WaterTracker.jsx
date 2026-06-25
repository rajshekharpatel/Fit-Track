import React, { useState, useEffect } from "react";
import '../styles/Water.css';

const WaterTracker = () => {
  const DAILY_GOAL = 8;

  const [waterCount, setWaterCount] = useState(() => {
    const saved = localStorage.getItem("waterCount");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("waterCount", waterCount);
  }, [waterCount]);

  const addWater = () => {
    setWaterCount((prev) => prev + 1);
  };

  const removeWater = () => {
    if (waterCount > 0) {
      setWaterCount((prev) => prev - 1);
    }
  };

  const resetWater = () => {
    setWaterCount(0);
  };

  const progress = Math.min(
    (waterCount / DAILY_GOAL) * 100,
    100
  );

return (
  <div className="page-container">
    <div className="water-card">

      <h2 className="water-title">
        💧 Water Tracker
      </h2>

      <h3>
        {waterCount} / {DAILY_GOAL} Glasses
      </h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{progress.toFixed(0)}% Completed</p>

      <div className="water-buttons">
        <button onClick={addWater}>
          Add Water
        </button>

        <button onClick={removeWater}>
          Remove
        </button>

        <button onClick={resetWater}>
          Reset
        </button>
      </div>

    </div>
  </div>
);
};

export default WaterTracker;