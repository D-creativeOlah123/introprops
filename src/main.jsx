import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Input from './Input.jsx'
import Array from './Array.jsx'
import Propsinput from './assets/propsinput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Input /> */}
    <Propsinput></Propsinput>
    

    {/* <Array /> */}
  </StrictMode>,
)
