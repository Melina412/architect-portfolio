import logoDark from "../assets/icon/logo-icon.svg";
import logoWhite from "../assets/icon/logo-icon-white.svg";
import { NavLink } from "react-router-dom";
import moon from "../assets/icon/moon.svg";
import sun from "../assets/icon/sun.svg";
// import "../styles/Header.scss";

import { useContext } from "react";
import { ThemeContext } from "../context/Context";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((active) => !active);
  };

  return (
    <header>
      <div>
        <img
          id="darkLogo"
          src={logoDark}
          alt="logo"
          className={theme ? "darkmode" : ""}
        />
        <img
          id="whiteLogo"
          src={logoWhite}
          alt="logo"
          className={theme ? "darkmode" : ""}
        />
      </div>
      <div className="navigation">
        <nav>
          <NavLink to="/">MAIN</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/certifications">CERTIFICATIONS</NavLink>
          <NavLink to="/contacts">CONTACTS</NavLink>
        </nav>
        <div className="theme-icons" onClick={toggleTheme}>
          <img
            id="moonIcon"
            src={moon}
            alt="darkmode icon"
            className={theme ? "darkmode" : ""}
          />
          <img
            id="sunIcon"
            src={sun}
            alt="lightmode icon"
            className={theme ? "darkmode" : ""}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
