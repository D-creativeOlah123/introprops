import React,{useEffect, useState} from "react"
import Cards from "./cards"
import axios from "axios"
import "./music.css"

function Musicprops () {
    const [isloading, setIsloading] = useState(false)
    const[ allmusic, setAllmusic] = useState([])


    const Fetchmusicapi = async() => {
        try {
          setIsloading(true)  
          const allmusic = await axios.get("https://robo-music-api.onrender.com/music/my-api")
          console.log(allmusic);
          setIsloading(false)
          setAllmusic(allmusic.data)
          
        } catch (error) {
            setIsloading(false)
            console.log(error);
            
            
        }

    }

    useEffect(()=>{
        Fetchmusicapi()
    },[])






    return(
        <div>
        <Cards loading={isloading} allmusic={allmusic}/>

        </div>
    )
}

export default Musicprops