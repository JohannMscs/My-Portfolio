//components
import Project from '../sections/Project'
//style 
import "../../assets/sass/components/Projects.sass"
import '../../assets/img/skills/html.png'

//imagem das tecnologias

import css from '../../assets/img/skills/css.png'
import javascript from '../../assets/img/skills/javascript.png'
import typescript from '../../assets/img/skills/typescript.png'
import sass from '../../assets/img/skills/sass.png'
import tailwind from '../../assets/img/skills/tailwind.png'
import react from '../../assets/img/skills/react.png'
import figma from '../../assets/img/skills/figma.png'

// eslint-disable-next-line react/prop-types
const Projects = ({html}) => {

    return(
        <article>
            <h2>Projetos</h2>
            <Project 
            text="ola"
            />
            <Project 
            projectName={"ola"}
            text={"seja bem vindo"}
            tech={html}
            

            />
        </article>
    )
}

export default Projects