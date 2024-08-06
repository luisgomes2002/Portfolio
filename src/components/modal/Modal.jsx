import { useState } from "react";
import "./ModalStyle.css";
import { useTranslation } from "react-i18next";

function Modal({ project, onClose }) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showAllImages = () => {
    return project.images[currentImageIndex];
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length,
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length,
    );
  };

  return (
    <div className="overlay">
      <div className="modalContent">
        <div className="porjectImgs">
          <button onClick={goToPreviousImage}>
            <i className="fa-solid fa-arrow-left" />
          </button>
          <img src={showAllImages()} alt="ProjImg" />
          <button onClick={goToNextImage}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
        <section>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <h3>{project.stack}</h3>
          <div>
            {project.links.map((link, index) => (
              <a
                href={link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("RepositorioBtn")}
              </a>
            ))}
          </div>
        </section>
        <div className="closeButton">
          <button onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
