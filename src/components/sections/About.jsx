//hooks
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

//style
import "../../assets/sass/components/About.sass";

const About = () => {
  //animação de About subindo para o topo da página junto de Home
  useEffect(() =>{
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false
    })
  })

  return (
    <section className="About" data-aos="fade-up">
      <h2>Sobre mim</h2>
      <article>
        <p>
          Olá, meu nome é Johann. Tenho 22 anos, sou uma pessoa que adora
          leitura, música, jogos e filmes. Sou uma pessoa muito criativa e por
          esse motivo escolhi seguir o caminho da programação, pois me dá
          possibilidade de criar os mais diversos sistemas que se pode imaginar.
          Sempre que tenho ideias, elaboro-as no Figma e alinho a minhas
          competências como desenvolvedor Front-end e as desenvolvo.
        </p>
        <p>
          Acredito no poder da comunicação para o compartilhamento de ideias
          claras e de forma eficaz, para que todos tenham um alinhamento de
          ideias de modo que seja possível determinar um objetivo.
        </p>
      </article>
    </section>
  );
};

export default About;
