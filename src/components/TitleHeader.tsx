import React, { useEffect, useState } from "react";
import "../assets/css/TitleHeader.css";

const TitleHeader: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);
  return (
    <div className="title-header-outer">
      <header className={`title-header-container${show ? " fade-in" : ""}`}>
        <div className="title-header-content">
          <h2>Welcome to Cruzader TKD</h2>
          <p>
            Discover more about our Taekwondo club, our philosophy, and what we
            offer to students of all ages and skill levels.
          </p>
        </div>
        <img
          className="title-header-logo"
          src="/logo192.png"
          alt="Cruzader TKD Logo"
        />
      </header>
    </div>
  );
};

export default TitleHeader;
