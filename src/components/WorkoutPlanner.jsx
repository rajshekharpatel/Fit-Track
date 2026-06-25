import React, { useState } from "react";
import '../styles/Workout.css';

const workoutData = [
  "Push Ups",
  "Bench Press",
  "Pull Ups",
  "Squats",
  "Deadlift",
  "Shoulder Press"
];

function WorkoutPlanner() {
  const [completed, setCompleted] = useState([]);

  const toggleWorkout = (exercise) => {
    if (completed.includes(exercise)) {
      setCompleted(
        completed.filter((item) => item !== exercise)
      );
    } else {
      setCompleted([...completed, exercise]);
    }
  };

  return (
  <div className="page-container">
    <div className="workout-card">

      <h2 className="workout-title">
        🏋️ Workout Planner
      </h2>

      {workoutData.map((exercise) => (
        <div
          key={exercise}
          className="workout-item"
        >
          <input
            type="checkbox"
            checked={completed.includes(exercise)}
            onChange={() =>
              toggleWorkout(exercise)
            }
          />

          <label>{exercise}</label>
        </div>
      ))}

      <div className="completed">
        <h3>
          Completed: {completed.length}/
          {workoutData.length}
        </h3>
      </div>

    </div>
  </div>
);
}

export default WorkoutPlanner;