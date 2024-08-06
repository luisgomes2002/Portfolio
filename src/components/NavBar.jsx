import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import "./NavBarStyle.css";
import { useState, useEffect } from "react";

function NavBar() {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      if (window.innerWidth > 600) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavBarChange = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <nav>
      {isMobile && (
        <button className="toggleButton" onClick={handleNavBarChange}>
          <i className="fa-solid fa-bars" />
        </button>
      )}
      <div className={`links ${toggle ? "show" : ""}`}>
        <a href="#about" onClick={handleLinkClick}>
          {t("navInfo1")}
        </a>
        <a href="#projects" onClick={handleLinkClick}>
          {t("navInfo2")}
        </a>
        <a href="#knowledge" onClick={handleLinkClick}>
          {t("navInfo3")}
        </a>
        <section>
          <button onClick={() => i18n.changeLanguage("pt")}>PT |</button>
          <button onClick={() => i18n.changeLanguage("en")}>US |</button>
          <button onClick={() => i18n.changeLanguage("jp")}>JP</button>
        </section>
      </div>
    </nav>
  );
}

export default NavBar;
