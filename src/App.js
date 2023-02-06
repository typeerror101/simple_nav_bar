import NavBar from './NavBar';
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
    <NavBar/>
    <div className='component'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    
    </div>
    </>
  )
} 

