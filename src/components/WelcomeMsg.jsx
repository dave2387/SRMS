import React from "react";
import "./WelcomeMsg.css";

const WelcomeMsg = () => {
  return (
    <div className="welcome-fullscreen">
      <h1 className="welcome-text">
        Welcome to <span>Our Website</span>
      </h1>

      <p className="welcome-tagline">
        Your journey starts here
      </p>
    </div>
  );
};

export default WelcomeMsg;
