import { useState, useEffect } from "react";
import "./ProjectCardStyle.css";

export function ProjectCard({ project, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project.images.length,
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
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
