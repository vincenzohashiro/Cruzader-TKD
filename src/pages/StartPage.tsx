import React from "react";
import Information from "../components/Information";
import TitleHeader from "../components/TitleHeader";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Contents from "../components/Contents";

const StartPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <TitleHeader />
      <div className="page-container">
        <main>
          <Information />
        </main>
      </div>
      <Contents />
      <Footer />
    </>
  );
};

export default StartPage;
