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
  project_01,
  function_01,
  function_02,
  tech_1,
  tech_2,
  tech_3,
  tech_4,
  github_Repository,
  project_Link,
}) => {
  return (
    <section
      className="project_container"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
       <video autoplay="true" loop="true" muted className="project_image">
   <source
     src={project_01}
     type="video/mp4"
   />
 </video >
      <div>
        <h3>{projectName}</h3>
        <ul className="skill_List">
          <li>
            <img src={tech_1} alt="" />
          </li>
          <li>
            <img src={tech_2} alt="" />
          </li>
          <li>
            <img src={tech_3} alt="" />
          </li>
        </ul>
        <p>{description}</p>
        <ul className="function_list">
          <li>
            {function_01}
          </li>
          <li>{function_02}</li>
        </ul>
        <ul className="list_Link">
          <li className="github_Link">
            <a href={github_Repository} target="blank"> Repositório</a>
          </li>
          <li className="project_Link">
            <a href={project_Link} target="blank">Projeto</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;
