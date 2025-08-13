import React, { useEffect, useState } from "react";
import "../assets/css/TitleHeader.css";
import logoImg from "../assets/images/Logo.jpg";
import ShinyText from "../components/ShinyText";

const TitleHeader: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = () => {
    const nextSection = document.querySelector(".main-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="title-header-outer">
      <header className={`title-header-container${show ? " fade-in" : ""}`}>
        <div className="title-header-content">
          <h2>
            {" "}
            <ShinyText
              text="Cruzader Taekwondo"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h2>

          <p>
            Discover more about our Taekwondo club, our philosophy, and what we
            offer to students of all ages and skill levels.
          </p>
        </div>
        <img
          className="title-header-logo"
          src={logoImg}
          alt="Cruzader TKD Logo"
        />
      </header>

      <div className="scroll-indicator" onClick={handleScrollClick}>
        ▼
      </div>
    </div>
  );
};

export default TitleHeader;
