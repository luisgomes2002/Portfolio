import { useTranslation } from "react-i18next";
import "./FooterStyle.css";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footerArea">
      <p>{t("footerInfo")}</p>
    </div>
  );
}

export default Footer;
