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
            projectName={"BookStore"}
            text={"loja de livros para compra, é possível ver a lista de livros, com mencanismo de filtragem de pesquisa (valores mais caros e mais baratos e gênero), você pode escolher os livros que deseja e adiciona-los ao carrinho para compra"}
            tech_1={html}
            tech_2={css}
            tech_3={javascript}
            github_Repository={'https://www.google.com'}
            project_Link={'https://www.google.com'}
            />
            <Project 
            projectName={"MovieScore"}
            text={"site de notas de filmes, temos filmes lançamentos e mais antigos, você podecriar uma conta e dar as notas que acha  adequada para determinado filme, assim colaborando com a comunidade"}
            tech_1={html}
            tech_2={css}
            tech_3={javascript}
            github_Repository={'https://www.youtube.com'}
            project_Link={'https://www.youtube.com'}
            />
        </article>
    )
}

export default Projects