import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "1rem", textAlign: "center" }}>
      <p>&copy; 2025 Cruzader TKD</p>
      <nav>
        <a href="#title-header">Home</a> |{" "}
        <a href="#information">Information</a> |{" "}
        <a href="#contents">Contents</a> | <a href="#contacts">Contacts</a>
      </nav>
    </footer>
  );
};

export default Footer;
