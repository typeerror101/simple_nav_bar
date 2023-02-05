import NavBar from './NavBar';
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  let component


  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/pricing":
      component = <Pricing/>
      break
    case "/about":
      component = <About/>
      break
    default :
  }
  
  return (
    <>
    <NavBar/>
    <div className='component'>
    {component}
    </div>
    </>
  )
} 

