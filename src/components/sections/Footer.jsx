//icons
import { FaBeer, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaVoicemail, FaWhatsapp } from "react-icons/fa";
//style
import "../../assets/sass/components/Footer.sass";

const Footer = () => {

  return (
    <footer className="Contact">
      <ul>
        <li>
          <a href="https://github.com/JohannMscs">
          <FaGithub id="github"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/johann-moscoso">
          <FaLinkedin id="linkedin"/>
          </a>
        </li>
        <li>
          <a href="">
            <FaWhatsapp id="whatsapp"/>
          </a>
        </li>
        <li>
          <a href="mailto:johann.moscoso@gmail.com">
            <FaEnvelope id="envelope"/>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
