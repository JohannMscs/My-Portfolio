import { Link, animateScroll as scroll } from "react-scroll"
//style
import "../../assets/sass/components/Navbar.sass"

const Navbar = () => {

    return(
        <nav className="Navbar">
            <p>Johann Moscoso</p>
            <ul>
                <li><Link to="About" smooth={true}>Sobre mim</Link></li>
                <li><Link to="Skills" smooth={true}>Skills</Link></li>
                <li><Link to="Projects" smooth={true}>Projetos</Link></li>
                <li><Link to="Contact" smooth={true}>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar