import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import '../styles/Progress.css';

const data = [
  { week: "W1", weight: 62 },
  { week: "W2", weight: 63 },
  { week: "W3", weight: 64 },
  { week: "W4", weight: 65 },
];

function ProgressTracker() {
  return (
    <div className="card">
      <h2>📈 Weight Progress</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="weight"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressTracker;