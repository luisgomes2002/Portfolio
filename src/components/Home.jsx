import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./HomeStyle.css";
import MurasakiImg1 from "../assets/MurasakiImg1.png";
import TrifaseImg1 from "../assets/TrifaseImg1.png";
import Modal from "./modal/Modal";
import BlackImg from "../assets/BlackImg.jpg";

function Home() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsLng = [
    {
      id: 1,
      name: "Murasaki",
      images: [MurasakiImg1],
      description: t("description1"),
      stack: "JavaScript / ReacJs / Styled Component / NodeJs / MongoDb",
      links: ["https://github.com/luisgomes2002/JapaneseSite"],
      status: t("status1"),
    },
    {
      id: 3,
      name: "Trifase",
      images: [TrifaseImg1],
      description: t("description3"),
      stack: "Html / Css / JavaScript",
      links: ["https://github.com/luisgomes2002/Trifase"],
      status: t("status3"),
    },
    {
      id: 2,
      name: "Ecommerce",
      images: [BlackImg],
      description: t("description2"),
      stack: "TypeScript / Angular / C# / .Net / MySql",
      links: [
        "https://github.com/luisgomes2002/Ecommerce-Client",
        "https://github.com/luisgomes2002/Ecommerce-Server",
      ],
      status: t("status2"),
    },
    {
      id: 4,
      name: "Hiro",
      images: [BlackImg],
      description: t("description4"),
      stack: "C++ / OpenGl",
      links: ["https://github.com/luisgomes2002/Hiro"],
      status: t("status4"),
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  return (
    <div className="home">
      <div id="about" className="about">
        <h2>{t("introduction")}</h2>
        <h1>
          BACKEND DEVELOPER
          <a href="https://github.com/luisgomes2002">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/luis-gomes-8462b321a/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-file"></i>
          </a>
        </h1>
        <p>{t("about")}</p>
      </div>

      <div id="projects" className="projects">
        <h1>{t("project")}</h1>
        <div className="card">
          {projectsLng.map((project) => (
            <button
              onClick={() => handleOpenModal(project)}
              className="projectsInfo"
              key={project.id}
            >
              <img src={project.images[0]} alt="ProjImg" />
              <section>
                <p>{project.status}</p>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
                <h3>{project.stack}</h3>
              </section>
            </button>
          ))}
        </div>
      </div>

      {openModal && (
        <Modal project={selectedProject} onClose={() => setOpenModal(false)} />
      )}

      <div id="knowledge" className="knowledge">
        <h1>{t("knowledge")}</h1>
        <section>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-typescript-plain"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-angularjs-plain"></i>
          <i className="devicon-csharp-plain"></i>
          <i className="devicon-dotnetcore-plain"></i>
          <i className="devicon-mysql-original"></i>
          <i className="devicon-mongodb-plain"></i>
          <i className="devicon-cplusplus-plain"></i>
        </section>
      </div>
    </div>
  );
}

export default Home;
