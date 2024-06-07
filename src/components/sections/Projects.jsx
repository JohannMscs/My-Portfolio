//components
import Project from '../sections/Project'
//style 
import "../../assets/sass/components/Projects.sass"

import project_01 from "../../assets/video_projects/Projeto_JH_Burguer.mp4"

// eslint-disable-next-line react/prop-types
const Projects = ({html, css, javascript, typescript, sass, tailwind, react, figma}) => {

    return(
        <article className='Projects'>
            <h2>Projetos</h2>
            <Project 
            projectName={"JH_Burguer"}
            project_01={project_01}
            description={`Hamburgueria que utiliza dados de uma fake api, que disponibiliza os ingredientes para o hamburguer, acompanhamento, bebida e o status do pedido. `}
            function_01="Pode ser feitos novos pedidos na página de home."
            function_02="Na página de pedidos é possível ver os pedidos que foram feitos, é possível mudar o seu status e também deletar eles."
            tech_1={react}
            tech_2={javascript}
            tech_3={tailwind}
            github_Repository={'https://github.com/JohannMscs/JH_Burguer'}
            project_Link={'https://jh-burguer.vercel.app/'}
            />
        </article>
    )
}

export default Projects