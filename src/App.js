import NavBar from './NavBar';
import Pricing from './pages/pricing';
import Home from './pages/home';
import About from './pages/about';

export default function App() {
  let component;

  switch(window.location.pathname){
    case "/":
      component = <App/>
      break
    case "/pricing":
      component = <Pricing/>
      break
    case "/about":
      component = <About/>
      break
  }
  return (
    <>
    <NavBar/>
    {component}
    </>
  )
}

