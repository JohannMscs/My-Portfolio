// style
import '../../assets/sass/components/project.sass'

//image
import whiteImage from '../../assets/img/Projects/imagem em branco.png'




const Project = ({text, projectName, tech_1, tech_2, tech_3, tech_4}) => {


    return(
        <section className='project_container'>
            <img src={whiteImage} alt="" className='project_image'/>
            <div>
            <ul>
                <li><img src={tech_1} alt="" /></li>
                <li><img src={tech_2} alt="" /></li>
                <li><img src={tech_3} alt="" /></li>
                
            </ul>
            <h3>{projectName}</h3>
            <p>{text}</p>
            </div>
        </section>
    )
}

export default Project