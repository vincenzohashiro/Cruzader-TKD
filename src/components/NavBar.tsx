import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "../assets/css/NavBar.css";
import ShinyText from "../components/ShinyText";

const NavBarInner: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setHeightVar = () => {
      const h = el.offsetHeight || 70;
      document.documentElement.style.setProperty("--nav-height", `${h}px`);
      document.body.style.paddingTop = `var(--nav-height)`;
    };

    setHeightVar();
    window.addEventListener("resize", setHeightVar);

    return () => {
      window.removeEventListener("resize", setHeightVar);
      document.documentElement.style.removeProperty("--nav-height");
      document.body.style.paddingTop = "";
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
        <a className="navbar-brand mx-auto" href="#">
          <ShinyText
            text="Cruzader Taekwondo"
            disabled={false}
            speed={3}
            className="custom-class"
          />
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
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
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
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
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
