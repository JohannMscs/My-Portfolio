//components
import Project from '../sections/Project'
//style 
import "../../assets/sass/components/Projects.sass"

import project01 from "../../assets/video_projects/Projeto_JH_Burguer.mp4"

// eslint-disable-next-line react/prop-types
const Projects = ({html, css, javascript, typescript, sass, tailwind, react, figma}) => {

    return(
        <article className='Projects'>
            <h2>Projetos</h2>
            <Project 
            projectName={"JH_Burguer"}
            project01={project01}
            description={`Hamburgueria que utiliza dados de uma fake api, que disponibiliza os ingredientes para o hamburguer, acompanhamento, bebida e o status do pedido. `}
            function01="Pode ser feitos novos pedidos na página de home."
            function02="Na página de pedidos é possível ver os pedidos que foram feitos, é possível mudar o seu status e também deletar eles."
            tech1={react}
            tech2={javascript}
            tech3={tailwind}
            githubRepository={'https://github.com/JohannMscs/JH_Burguer'}
            projectLink={'https://jh-burguer.vercel.app/'}
            />
        </article>
    )
}

export default Projects