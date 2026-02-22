import React from 'react'
import Sidenav from './sidenav'
import Navbarcomponent from './Navbarcomponent'
import { Outlet } from 'react-router-dom'


const Parentroute = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
       
<Sidenav/>
   <div style={{height:"100vh", width:"100%"}}>
    <Navbarcomponent/>
  <div>
    
    <h1>This is the body</h1>
    <Outlet/>
 </div>
        </div>
    </div>
  )
}

export default Parentroute