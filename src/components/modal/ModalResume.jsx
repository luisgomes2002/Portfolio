import "./ModalStyle.css";
import { useTranslation } from "react-i18next";
import ResumePT from "../../resumes/ResumePT.docx";
import ResumeEN from "../../resumes/ResumeEN.docx";
import ResumeJP from "../../resumes/ResumeJP.docx";

const ModalResume = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="overlay">
      <div className="resumesArea">
        <h1>{t("Resumes")}</h1>
        <section>
          <div>
            <h2>{t("PT")}</h2>
            <a href={ResumePT} download="ResumePT.docx">
              <i className="fa-solid fa-file" />
            </a>
          </div>
          <div>
            <h2>{t("US")}</h2>
            <a href={ResumeEN} download="ResumeEN.docx">
              <i className="fa-solid fa-file" />
            </a>
          </div>
          <div>
            <h2>{t("JP")}</h2>
            <a href={ResumeJP} download="ResumeJP.docx">
              <i className="fa-solid fa-file" />
            </a>
          </div>
        </section>
      </div>
      <div className="closeButton">
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default ModalResume;
