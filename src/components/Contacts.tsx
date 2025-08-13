import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../assets/css/Contacts.css";

interface ContactsProps {
  logoUrl: string;
}

const Contacts: React.FC<ContactsProps> = ({ logoUrl }) => {
  return (
    <section className="contacts-page">
      {/* Logo */}
      <div className="contacts-logo">
        <img src={logoUrl} alt="Company Logo" />
      </div>

      {/* Contact Info */}
      <div className="contacts-info">
        <h2>Contact Us</h2>
        <p>
          <FaMapMarkerAlt className="icon" /> 123 Main Street, Cityville,
          Country
        </p>
        <p>
          <FaPhone className="icon" /> +1 (555) 123-4567
        </p>
        <p>
          <FaEnvelope className="icon" /> info@example.com
        </p>
      </div>

      {/* Social Media Links */}
      <div className="contacts-social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
