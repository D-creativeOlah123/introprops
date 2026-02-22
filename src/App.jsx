import React, { useState ,useEffect} from 'react'
import axios from 'axios' 
import Http from "./Http"
import {Route, Routes} from "react-router-dom"  
import Cards from './Music/cards'
import Home from './Home'
import Display from './Display'
import Notfoundpage from './Notfoundpage'
import Parentroute from './parentroute'
import Profile from './profile'
import Navbarcomponent from './Navbarcomponent'
import Resources from './Resources'
import Musicprops from './Music/musicprops'
import Onemusic from './Music/onemusic'
import Formik from './Formik'
import Login from './Login'
import Dashboard from './Dashboard'

const App = () => {
  const [isloading, setisloading] = useState(false)
   const [allpost , setallpost] = useState([])
   const [allmusic , setallmusic] = useState([])

    const Fetchallpost = async() =>{
    try {
      setisloading(true)
      const allpost = await axios.get("https://dummyjson.com/posts")
      console.log(allpost);
      setisloading(false)
      setallpost(allpost.data.posts)
    } catch (error) {
      setisloading(false)
      console.log(error);
      
    }

  }
  
  const Fetchallmusic =  () =>{
     axios.get("https://robo-music-api.onrender.com/music/my-api")
     .then((res)=>{
      console.log(res);
      setallmusic(res.data)
      
     }).catch((err)=>{
      console.log(err);
      
     })
  }
  useEffect(() => {
    Fetchallpost()
    Fetchallmusic()
  }, [])
  



  
  
  return (
    <>
      <div>
        {/* <Navbarcomponent/> */}
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Notfoundpage/>}/>
          <Route path='/display' element={<Display/>}/>
          <Route path='/music' element={<Musicprops allmusic={allmusic}/>}/>
          <Route path='/formik' element={<Formik/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/one/:id' element={<Onemusic allmusic={allmusic} />}/>

          <Route path='/parent' element={<Parentroute/>}> 
          <Route path='/parent/profile' element={<Profile/>}/>
          <Route path='/parent/resources' element={<Resources/>}/>
          <Route path='/parent/resources' element={<Resources/>}/>
          </Route>
          <Route path='/Http' element={<Http loading={isloading} allpost={allpost}/>}/>

        </Routes>
          
  {/* <Footer/> */}
      </div>
    </>
  )
}

export default App