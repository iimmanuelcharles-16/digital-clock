import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="main">
      <div className="clock-card">
        <h1>Digital Clock</h1>
        <h2 className="time">{time.toLocaleTimeString()}</h2>
        <p className="date">{formatDate(time)}</p>
        <h5 style={{ marginTop: "20px", fontSize: "14px" }}>
          Created by Immanuel
        </h5>
      </div>
    </div>
  );
}

export default App;
