//hooks
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

//style
import "../../assets/sass/components/Home.sass";

//images
import foto from "../../assets/img/foto.png";
import github from "../../assets/img/contact/github.png";
import linkedin from "../../assets/img/contact/linkedin.png";
import whatsapp from "../../assets/img/contact/whatsapp.png";
import email from "../../assets/img/contact/email.png";



// eslint-disable-next-line react/prop-types
const Home = () => {

  useEffect(() => {
    Aos.init({
      duration:1500,
      easing: 'ease',
      once: false,
    })
  })

  return (
    <>
    <div className="home" data-aos="fade-up">
      <img src={foto} alt="foto" className="foto"  />
      <p>Olá, eu sou sou Johann</p>
      <h1>Desenvolvedor Front-end</h1>
      <ul >
        <li>
        <img src={github} alt="github" />
        </li>
        <li>
        <img src={linkedin} alt="linkedin" />
        </li>
        <li>
        <img src={whatsapp} alt="whatsapp" />
        </li>
        <li>
        <img src={email} alt="email" />
        </li>
      </ul>
    </div>
    </>
  );
};

export default Home;
