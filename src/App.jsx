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

// imagens das tecnologias
import html from './assets/img/skills/html.png'
import css from './assets/img/skills/css.png'
import javascript from './assets/img/skills/javascript.png'
import typescript from './assets/img/skills/typescript.png'
import sass from './assets/img/skills/sass.png'
import tailwind from './assets/img/skills/tailwind.png'
import react from './assets/img/skills/react.png'
import figma from './assets/img/skills/figma.png'


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
    <Skills
      html={html}
      css={css}
      javascript={javascript}
      typescript={typescript}
      sass={sass}
      tailwind={tailwind}
      react={react}
      figma={figma}
    />
      <Projects
        html={html}
        css={css}
        javascript={javascript}
        typescript={typescript}
        sass={sass}
        tailwind={tailwind}
        react={react}
        figma={figma}
      />
    <Footer/>
    </div>
  )
}

export default App