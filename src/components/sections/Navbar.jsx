
//style
import "../../assets/sass/components/Navbar.sass"

const Navbar = () => {

    return(
        <nav className="Navbar">
            <p>Johann Moscoso</p>
            <ul>
                <li><a href="#About">Sobre mim</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projetos</a></li>
                <li><a href="#Contact">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar