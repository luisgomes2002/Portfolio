import { useState } from "react";
import "./HomeStyle.css";
import MurasakiImg1 from "../assets/MurasakiImg1.png";
import TrifaseImg1 from "../assets/TrifaseImg1.png";
import Modal from "./modal/Modal";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsPt = [
    {
      id: 1,
      name: "Murasaki",
      images: [MurasakiImg1],
      description:
        "Site dedicado a pessoas que querem aprender japonês, explorar a cultura japonesa e compartilhar suas experiências de estudo",
      stack: "JavaScript / ReacJs / Styled Component / NodeJs / MongoDb",
      links: ["https://github.com/luisgomes2002/JapaneseSite"],
      status: "Em desenvolvimento",
    },
    {
      id: 2,
      name: "Ecommerce",
      images: [],
      description: "Site para Ecommerce",
      stack: "TypeScript / Angular / C# / .Net / MySql",
      links: [
        "https://github.com/luisgomes2002/Ecommerce-Client",
        "https://github.com/luisgomes2002/Ecommerce-Server",
      ],
      status: "Em desenvolvimento",
    },
    {
      id: 3,
      name: "Trifase",
      images: [TrifaseImg1],
      description: "Freelancer Landing Page para uma empresa de Energia Solar.",
      stack: "Html / Css / JavaScript",
      links: ["https://github.com/luisgomes2002/Trifase"],
      status: "Em desenvolvimento",
    },
    {
      id: 4,
      name: "Hiro",
      images: [],
      description: "Game Engine",
      stack: "C++ / OpenGl",
      links: ["https://github.com/luisgomes2002/Hiro"],
      status: "Em desenvolvimento",
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  return (
    <div className="home">
      <div className="about">
        <h2>OLÁ, EU SOU LUIS!</h2>
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
        <p>
          TENHO 22 ANOS SOU ESTUDANTE DE ENGENHARIA DA COMPUTAÇÃO COM 1 ANO DE
          EXPERIÊNCIA TRABALHANDO COM FREELANCER E PROJETOS PRÓPRIOS.
        </p>
      </div>

      <div className="projects">
        <h1>Meus Projetos</h1>
        <div className="card">
          {projectsPt.map((project) => (
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

      <div className="knowledge">
        <h1>Meus Conhecimentos</h1>
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
      <div className="contact"></div>
    </div>
  );
}

export default Home;
