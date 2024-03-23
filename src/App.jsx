//components
import Home from "./components/sections/Home"

//style
import "./App.sass"
import Navbar from "./components/sections/Navbar"

const App = () => {

  return(
    <div className="App">
     <Navbar/>
    <Home/>
    </div>
  )
}

export default App