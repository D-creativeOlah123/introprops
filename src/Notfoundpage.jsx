import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfoundpage = () => {
    const navigate = useNavigate()
    const GoHome = () =>{
        navigate("/")
    }
  return (
    <div>
        <h1>Notfoundpage</h1>
        <p>This is not the page you are looking for </p>
        <button onClick={GoHome}>Go home</button>
    </div>
  )
}

export default Notfoundpage