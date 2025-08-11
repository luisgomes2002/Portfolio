import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./HomeStyle.css";
import MurasakiImg1 from "../assets/muraski-prototype/MurasakiImg1.png";
import MurasakiImg2 from "../assets/muraski-prototype/MurasakiImg2.png";
import MurasakiImg3 from "../assets/muraski-prototype/MurasakiImg3.png";
import TrifaseImg1 from "../assets/TrifaseImg1.png";
import Card from "../assets/muraski/cards.png";
import HomeImg from "../assets/muraski/home.png";
import Login from "../assets/muraski/login.png";
import User from "../assets/muraski/user.png";
import Subscriptions from "../assets/muraski/subscriptions.png";
import Modal from "./modal/Modal";
import BlackImg from "../assets/BlackImg.jpg";
import ModalResume from "./modal/ModalResume";
import { ProjectCard } from "./Card/ProjectCard";
import Dashboard from "../assets/muraski/dashboard.png";

function Home() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [openModalResume, setOpenModalResume] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const compProjects = [];

  const projectsLng = [
    {
      id: 1,
      name: "Murasaki",
      images: [HomeImg, Card, Login, Subscriptions, Dashboard, User],
      description: t("description1"),
      stack:
        "Typescript / React / SCSS / Zod / Java / MongoDb / Redis / Docker / AI",
      links: "https://murasakilanguages.com/",
      status: "Em Produção",
      deploy: "Site",
    },
    {
      id: 2,
      name: "Trifase",
      images: [TrifaseImg1],
      description: t("description2"),
      stack: "Html / Css / JavaScript",
      links: "https://github.com/luisgomes2002/Trifase",
      status: t("status2"),
      deploy: t("deployStatus2"),
    },
    {
      id: 3,
      name: "Murasaki-Prototype",
       images: [MurasakiImg1, MurasakiImg2, MurasakiImg3],
      description: t("description1"),
      stack: "JavaScript / ReactJs / Styled Component / Zod / NodeJs / MongoDb",
       links: "https://github.com/luisgomes2002/JapaneseSite",
     status: t("status1"),
      deploy: t("deployStatus1"),
     },
  ];

  // const HandleOpenProject = (project) => {
  //   setSelectedProject(project);
  //   setOpenModal(true);
  // };

  const HandleOpenResume = () => {
    setOpenModalResume(true);
  };

  return (
    <div className="home">
      <div id="about" className="about">
        <h2>{t("introduction")}</h2>
        <h1>
          FULLSTACK DEVELOPER
          <a href="https://github.com/luisgomes2002">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/luis-gomes-8462b321a/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <button onClick={() => HandleOpenResume()}>
            <i className="fa-solid fa-file"></i>
          </button>
        </h1>
        <p>{t("about")}</p>
      </div>

      {/* <div id="companies" className="companies">
        <h1>{t("companies")}</h1>
        <div className="compCard">
          {compProjects.map((compProjects) => (
            <div className="projetInfo">
              <img src={compProjects.images[0]} alt="CompProjectsImg" />
              <section>
                <p>Status: {compProjects.status}</p>
                <h1>{compProjects.name}</h1>
                <h2>{compProjects.description}</h2>
                <h3>{compProjects.stack}</h3>
              </section>
            </div>
          ))}
        </div>
      </div> */}

      <div id="projects" className="projects">
        <h1>{t("project")}</h1>
        <div className="card">
          {projectsLng.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {openModal && (
        <Modal project={selectedProject} onClose={() => setOpenModal(false)} />
      )}

      {openModalResume && (
        <ModalResume onClose={() => setOpenModalResume(false)} />
      )}

      <div id="knowledge" className="knowledge">
        <h1>{t("knowledge")}</h1>
        <section>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-typescript-plain"></i>
          <i className="devicon-java-plain-wordmark"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-spring-original"></i>
          <i className="devicon-mysql-original"></i>
          <i className="devicon-postgresql-plain"></i>
          <i className="devicon-mongodb-plain"></i>
          <i className="devicon-git-plain"></i>
        </section>
      </div>
    </div>
  );
}

export default Home;
