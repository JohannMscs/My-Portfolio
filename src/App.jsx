//components
import Home from "./components/sections/Home"
import Navbar from "./components/sections/Navbar"
import About from "./components/sections/About"
import Footer from "./components/sections/Footer"

//style
import "./App.sass"


const App = () => {

  return(
    <div className="App">
     <Navbar />
    <Home title="oi" date="21"/>
    <About/>
    
    <Footer/>
    </div>
  )
}

export default App