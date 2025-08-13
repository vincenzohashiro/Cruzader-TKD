import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <button type="button" className="btn">
        Home
      </button>
      <button type="button" className="btn">
        Projects
      </button>
      <button type="button" className="btn">
        Contact
      </button>
      <p className="footer-text">
        © {new Date().getFullYear()} Cruzader TKD. All rights reserved.
      </p>
    </footer>
  );
}
