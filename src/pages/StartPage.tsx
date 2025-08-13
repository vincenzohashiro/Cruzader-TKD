import React from "react";
import Information from "../components/Information";
import TitleHeader from "../components/TitleHeader";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Contents from "../components/Contents"; // ⬅ Import your new component

const StartPage: React.FC = () => {
  return (
    <>
      <NavBar />

      <TitleHeader />

      <div className="page-container">
        <main>
          {/* Existing card grid/info section */}
          <Information />
        </main>
      </div>
      {/* Alternating full-screen sections */}
      <Contents />
      <Footer />
    </>
  );
};

export default StartPage;
