//components
import Home from "./components/sections/Home"
import Navbar from "./components/sections/Navbar"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Footer from "./components/sections/Footer"

import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"

//style
import "./App.sass"

import html from './assets/img/skills/html.png'


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
      <Projects
        html={html}
      />
    <Footer/>
    </div>
  )
}

export default App