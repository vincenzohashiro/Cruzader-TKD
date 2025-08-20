import React, { useEffect, useState } from "react";
import "../assets/css/TitleHeader.css";
import logoImg from "../assets/images/Logo2.jpg";
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
      <section className="animated-bg">
        <header className={`title-header-container${show ? " fade-in" : ""}`}>
          <div className="title-header-content">
            <h2>
              {" "}
              <ShinyText
                text="Cruzaders Taekwondo"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h2>
            <p>
              Welcome to Cruzaders TKD, a passionate taekwondo team founded by
              the Cruz-Herrera siblings and led by head coach Francisco
              Cruz-Herrera. Start your taekwondo journey with us!
            </p>
            <p className="hashtags">
              #Cruzaders #TatakCruzaders #YourTaekwondoJourney
            </p>
          </div>

          <img
            className="title-header-logo"
            src={logoImg}
            alt="Cruzader TKD Logo"
          />
        </header>
      </section>
      <div className="scroll-indicator" onClick={handleScrollClick}>
        ▼
      </div>
    </div>
  );
};

export default TitleHeader;
