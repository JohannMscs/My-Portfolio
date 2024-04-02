//components
import Project from '../sections/Project'
//style 
import "../../assets/sass/components/Projects.sass"
import '../../assets/img/skills/html.png'


// eslint-disable-next-line react/prop-types
const Projects = ({html, css, javascript, typescript, sass, tailwind, react, figma}) => {

    return(
        <article>
            <h2>Projetos</h2>
            <Project 
            projectName={"ola"}
            text={"seja bem vindo"}
            tech_1={html}
            tech_2={css}
            tech_3={javascript}
            />
            <Project 
            projectName={"ola"}
            text={"seja bem vindo"}
            tech_1={html}
            tech_2={css}
            tech_3={javascript}
            />
        </article>
    )
}

export default Projects