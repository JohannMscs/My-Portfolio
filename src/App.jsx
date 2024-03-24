//components
import Home from "./components/sections/Home"
import Navbar from "./components/sections/Navbar"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Footer from "./components/sections/Footer"

import React, {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"



//style
import "./App.sass"



const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 100,
      easing: 'ease',
      once: false,
    })
  })


  return(
    <div className="App">
     <Navbar />
    <Home title="oi" date="21"/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    <div  className="box" id="box1" data-aos="fade-up">box 1</div>
    <div  className="box" id="box2" data-aos="fade-left">box 2</div>
    <div  className="box" id="box3" data-aos="fade-left">box 3</div>
    <div  className="box" id="box5">box 5</div>
    <div  className="box" id="box6">box 6</div>
    </div>
  )
}

export default App