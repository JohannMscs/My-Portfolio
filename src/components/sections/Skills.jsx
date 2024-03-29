//imagem das tecnologias
import html from '../../assets/img/skills/html.png'

//style
import "../../assets/sass/components/Skills.sass"

const Skills = () =>{
     
    return(

        <section className='skills'>
            <h2>skills</h2>
            <ul>
                <li id="technologies">
                    <img src={html} alt="" />
                </li>
                <li id="technologies">
                    <img src="" alt="Css" />
                </li>
                <li id="technologies">
                    <img src="" alt="javascript" />
                </li>
                <li id="technologies">
                    <img src="" alt="typescript" />
                </li>
                <li id="technologies">
                    <img src="" alt="Sass" />
                </li>
                <li id="technologies">
                    <img src="" alt="Tailwind" />
                </li>
                <li id="technologies">
                    <img src="" alt="React" />
                </li>
                <li id="technologies">
                    <img src="" alt="Figma" />
                </li>
            </ul>
        </section>
    )
}

export default Skills