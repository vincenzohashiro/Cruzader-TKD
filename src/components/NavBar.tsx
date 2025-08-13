import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "../assets/css/NavBar.css";

const NavBarInner: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setHeightVar = () => {
      const h = el.offsetHeight || 70;
      document.documentElement.style.setProperty("--nav-height", `${h}px`);
    };

    setHeightVar();
    window.addEventListener("resize", setHeightVar);

    return () => {
      window.removeEventListener("resize", setHeightVar);
      document.documentElement.style.removeProperty("--nav-height");
    };
  }, []);

  return (
    <nav
      ref={ref as any}
      className="navbar my-portal-navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-fluid nav-flex">
        <a className="navbar-brand mx-auto" href="#title-header">
          Cruzader TKD
        </a>

        <button
          className="navbar-toggler sleek-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" href="#title-header">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#information">
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contents">
                  Contents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavBar: React.FC = () => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(<NavBarInner />, document.body);
};

export default NavBar;
