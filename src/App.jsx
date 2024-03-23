//components
import Home from "./components/sections/Home"
import Navbar from "./components/sections/Navbar"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Footer from "./components/sections/Footer"


//style
import "./App.sass"


const App = () => {

  return(
    <div className="App">
     <Navbar />
    <Home title="oi" date="21"/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default App