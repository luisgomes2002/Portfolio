import { useState, useEffect, useRef } from "react";
import "./ProjectCardStyle.css";

export function ProjectCard({ project, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null); // para guardar a referência do intervalo

  const startCarousel = () => {
    if (project.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project.images.length,
        );
      }, 3000);
    }
  };

  useEffect(() => {
    startCarousel();

    return () => clearInterval(intervalRef.current);
  }, [project.images.length]);

  const handleDotClick = (index) => {
    clearInterval(intervalRef.current); // parar o intervalo atual
    setCurrentImageIndex(index); // ir para a imagem clicada
    startCarousel(); // reiniciar o intervalo
  };

  return (
    <div className={`projectsInfo ${index % 2 === 0 ? "left" : "right"}`}>
      <div className="carousel">
        <img src={project.images[currentImageIndex]} alt="ProjImg" />
        {project.images.length > 1 && (
          <div className="dots">
            {project.images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentImageIndex ? "active" : ""}`}
                onClick={() => handleDotClick(idx)}
              ></span>
            ))}
          </div>
        )}
      </div>
      <section>
        <p>Status: {project.status}</p>
        <h1>{project.name}</h1>
        <h2>{project.description}</h2>
        <h3>{project.stack}</h3>
        <a href={project.links}>Deploy: {project.deploy}</a>
      </section>
    </div>
  );
}
