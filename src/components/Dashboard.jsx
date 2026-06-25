import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "BMI",
      description: "Track your BMI",
      path: "/bmi",
      icon: "📏",
    },
    {
      title: "Calories",
      description: "Daily calorie needs",
      path: "/calories",
      icon: "🔥",
    },
    {
      title: "Water",
      description: "Stay hydrated",
      path: "/water",
      icon: "💧",
    },
    {
      title: "Workout",
      description: "Track exercises",
      path: "/workout",
      icon: "🏋️",
    },
    {
      title: "Progress",
      description: "View your progress",
      path: "/progress",
      icon: "📈",
    },
  ];

return (
  <div className="dashboard-container">

    <div className="hero-section">
      <div className="hero-content">

        <h1>🏆 Transform Your Fitness Journey</h1>

        <p>
          Track your BMI, calories, water intake,
          workouts, and progress all in one place.
          Stay consistent and become the strongest
          version of yourself.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/workout")}
        >
          Start Workout 🚀
        </button>

      </div>
    </div>

    {/* Dashboard Cards */}

    <div className="stats-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="stat-card"
          onClick={() => navigate(card.path)}
        >
          <h2>{card.icon}</h2>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>

  </div>
);

  
}

export default Dashboard;


