import React from "react";
import Information from "../components/Information";
import TitleHeader from "../components/TitleHeader";

const StartPage: React.FC = () => {
  return (
    <>
      <main>
        <TitleHeader /> {/* Loads immediately with fade-in */}
        <Information /> {/* Scroll-reveals each row below */}
      </main>
    </>
  );
};

export default StartPage;
