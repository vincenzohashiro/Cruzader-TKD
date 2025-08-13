import React from "react";
import TitleHeader from "../components/TitleHeader";
import Information from "../components/Information";
import Contents from "../components/Contents";
import Contacts from "../components/Contacts";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const StartPage: React.FC = () => {
  return (
    <>
      <NavBar />

      {/* Fullscreen only for the header */}
      <section id="title-header" style={{ height: "100vh" }}>
        <TitleHeader />
      </section>

      {/* Natural height sections */}
      <section id="information">
        <Information />
      </section>

      <section id="contents">
        <Contents />
      </section>

      <section id="contacts">
        <Contacts logoUrl="/assets/logo.png" />
      </section>

      <Footer />
    </>
  );
};

export default StartPage;
