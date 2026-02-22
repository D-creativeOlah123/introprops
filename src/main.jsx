import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Input from './Input.jsx'
import Array from './Array.jsx'
import Propsinput from './assets/propsinput.jsx'
import Home from './Home.jsx'
import Musicprops from './Music/musicprops.jsx'
import Navbar from './Music/navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbarcomponent from './Navbarcomponent.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar></Navbar> */}
   
   
    
    <BrowserRouter>
       <App />
   </BrowserRouter>
  
  </StrictMode>,
)
