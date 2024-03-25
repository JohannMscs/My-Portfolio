//hooks
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//style
import "../../assets/sass/components/Home.sass";

//images
import foto from "../../assets/img/foto.png";
import github from "../../assets/img/contact/github.png";
import linkedin from "../../assets/img/contact/linkedin.png";
import whatsapp from "../../assets/img/contact/whatsapp.png";
import email from "../../assets/img/contact/email.png";

//archive
import CV from "../../assets/archive_for_download/Johann-Moscoso_CV.pdf";

// eslint-disable-next-line react/prop-types
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
      <div className="home" data-aos="fade-up">
        <img src={foto} alt="foto" className="foto" />
        <p>Olá, eu sou Johann</p>
        <h1>Desenvolvedor Front-end</h1>
        <li className="download">
          <a href={CV} download={CV}>
            Download CV
          </a>
        </li>
        <ul>
          <li>
            <a href="https://github.com/JohannMscs">
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/johann-moscoso">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </li>
          <li>
            <a href="malito:johann.moscoso@gmail.com">
              <img src={email} alt="email" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
