//components
import Home from "./components/sections/Home"
import Navbar from "./components/Navbar"

//style
import "./App.sass"

const App = () => {

  return(
    <div className="App">
     <Navbar/>
    <Home/>
    </div>
  )
}

export default App