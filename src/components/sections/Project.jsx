// style
import "../../assets/sass/components/project.sass";

//image
import whiteImage from "../../assets/img/Projects/imagem em branco.png";

//animation
import Aos from "aos";
import "aos/dist/aos";

const Project = ({
  description,
  projectName,
  project01,
  function01,
  function02,
  tech1,
  tech2,
  tech3,
  tech4,
  githubRepository,
  projectLink,
}) => {
  return (
    <section
      className="project_container"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
       <video autoplay="true" loop="true" muted className="project_image">
   <source
     src={project01}
     type="video/mp4"
   />
 </video >
      <div>
        <h3>{projectName}</h3>
        <ul className="skill_List">
          <li>
            <img src={tech1} alt="" />
          </li>
          <li>
            <img src={tech2} alt="" />
          </li>
          <li>
            <img src={tech3} alt="" />
          </li>
        </ul>
        <p>{description}</p>
        <ul className="function_list">
          <li>
            {function01}
          </li>
          <li>{function02}</li>
        </ul>
        <ul className="list_Link">
          <li className="github_Link">
            <a href={githubRepository} target="blank"> Repositório</a>
          </li>
          <li className="project_Link">
            <a href={projectLink} target="blank">Projeto</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;
