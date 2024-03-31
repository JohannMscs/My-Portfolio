// style
import '../../assets/sass/components/project.sass'

//image
import whiteImage from '../../assets/img/Projects/imagem em branco.png'




const Project = ({text, projectName, tech}) => {


    return(
        <section>
            <img src={whiteImage} alt=""/>
            <ul>
                <li><img src={tech} alt="" /></li>
            </ul>
            <h3>{projectName}</h3>
            <p>{text}</p>
        </section>
    )
}

export default Project