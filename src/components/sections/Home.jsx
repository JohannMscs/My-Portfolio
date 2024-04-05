//hooks
import { useEffect } from "react";

//animação
import Aos from "aos";
import "aos/dist/aos.css";

//style
import "../../assets/sass/components/Home.sass";

//images
import foto from "../../assets/img/foto.png";

//react-icons
import {FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope} 
from 'react-icons/fa6'

//archive
import CV from "../../assets/archive_for_download/Johann-Moscoso_CV.pdf";

// eslint-disable-next-line react/prop-types
//animação de Home subindo para o topo da página
const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
    });
  });

  return (
    <>
      <section className="home" data-aos="fade-up">
        <img src={foto} alt="foto" className="foto" />
        <div>
          <header>
            <p>Olá, eu sou Johann</p>
            <h2>Desenvolvedor Front-end</h2>
          </header>
          
            <a href={CV} download={CV} className="download">
            <li>
              Download CV
              </li>
            </a>
          <ul>
            <li>
              <a href="https://github.com/JohannMscs" target="blank">
                <FaGithub size={30}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/johann-moscoso" target="blank">
                <FaLinkedin size={30}/>
              </a>
            </li>
            <li>
              <a href=" https://wa.me/5521967667589" target="blank">
                <FaWhatsapp size={30}/>
              </a>
            </li>
            <li>
              <a href="mailto:johann.moscoso@gmail.com">
                <FaEnvelope size={30}/>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
