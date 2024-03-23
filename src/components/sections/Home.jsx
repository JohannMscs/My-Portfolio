//components
import foto from "../../assets/img/foto2.png"

//style
import "../../assets/sass/components/Home.sass";

// eslint-disable-next-line react/prop-types
const Home = ({title, date}) => {

  

  return (
    <div className="home">
      <img src={foto} alt=""/>
      <p>Olá, eu sou sou Johann</p>
      <h1>Desenvolvedor Front-end</h1>
      
      <p>{title} {date}</p>
      </div>
  );
};

export default Home;
