import React, { useRef, useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import bgImage from "../assets/images/BG.jpg";
import "../assets/css/Contacts.css";

// ✅ simple fade observer hook
function useFadeOnScroll(delay = 0, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setInView(true), delay);
        } else {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay, threshold]);

  return { ref, inView };
}

interface ContactsProps {
  logoUrl: string;
}

const Contacts: React.FC<ContactsProps> = () => {
  const { ref, inView } = useFadeOnScroll(0, 0.2); // trigger once visible

  return (
    <section
      ref={ref}
      className={`contacts-page fade-up ${inView ? "visible" : ""}`}
    >
      {/* Centered image container */}
      <div className="contacts-center">
        <img src={bgImage} alt="Contact Visual" className="contacts-image" />
      </div>

      {/* Socials pinned to bottom */}
      <div className="contacts-social">
        <a
          href="https://www.facebook.com/CRUZADERSTKD"
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
