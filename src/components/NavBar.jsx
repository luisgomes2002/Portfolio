import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import "./NavBarStyle.css";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav>
      <a href="#about">{t("navInfo1")} </a>
      <a href="#projects">{t("navInfo2")} </a>
      <a href="#knowledge">{t("navInfo3")} </a>
      <section>
        <button
          onClick={() => {
            i18n.changeLanguage("pt");
          }}
        >
          PT |
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          US |
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("jp");
          }}
        >
          JP
        </button>
      </section>
    </nav>
  );
}

export default NavBar;
