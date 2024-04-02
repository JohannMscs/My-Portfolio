//animação
import 'aos/dist/aos.css'

//style
import "../../assets/sass/components/Skills.sass"


const Skills = ({html, css, javascript, typescript, sass, tailwind, react, figma}) =>{

    return(

        <section className='skills' >
            <h2>skills</h2>
            <ul data-aos="fade-right" data-aos-duration="1500">
                <li id="technologies">
                    <img src={html} alt="html" />
                    <p>HTML</p>
                </li>
                <li id="technologies">
                    <img src={css} alt="Css" />
                    <p>CSS</p>
                </li>
                <li id="technologies">
                    <img src={javascript} alt="javascript" />
                    <p>JAVASCRIPT</p>
                </li>
                <li id="technologies">
                    <img src={typescript} alt="typescript" />
                    <p>TYPESCRIPT</p>
                </li>
                <li id="technologies">
                    <img src={sass} alt="Sass" />
                    <p>SASS</p>
                </li>
                <li id="technologies">
                    <img src={tailwind} alt="Tailwind" />
                    <p>TAILWIND</p>
                </li>
                <li id="technologies">
                    <img src={react} alt="React" />
                    <p>REACT</p>
                </li>
                <li id="technologies">
                    <img src={figma} alt="Figma" />
                    <p>FIGMA</p>
                </li>
            </ul>
        </section>
    )
}

export default Skills