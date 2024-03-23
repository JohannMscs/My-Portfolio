//images
import foto from "../../assets/img/foto.png"

//style
import "../../assets/sass/components/Home.sass";

// eslint-disable-next-line react/prop-types
const Home = () => {

  

  return (
    <div className="home">
      <img src={foto} alt=""/>
      <p>Olá, eu sou sou Johann</p>
      <h1>Desenvolvedor Front-end</h1>
      </div>
  );
};

export default Home;
