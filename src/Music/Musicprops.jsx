// import React,{useEffect, useState} from "react"
// import Cards from "./cards"
// import axios from "axios"
// import "./music.css"
// import { FaPlay, FaPause } from "react-icons/fa";       


// function Musicprops () {
//     const [isloading, setIsloading] = useState(false)
//     const[ allmusic, setAllmusic] = useState([])


//     const Fetchmusicapi = async() => {
//         try {
//           setIsloading(true)  
//           const allmusic = await axios.get("https://robo-music-api.onrender.com/music/my-api")
//           console.log(allmusic);
//           setIsloading(false)
//           setAllmusic(allmusic.data)
          
//         } catch (error) {
//             setIsloading(false)
//             console.log(error);
            
            
//         }

//     }

//     useEffect(()=>{
//         Fetchmusicapi()
//     },[])






//     return(
//         <div>
        
//       <div>
//         {allmusic && allmusic.map((music)=>(
//               <Cards link={`/one/${music.id}`} onclick={()=> playmusic(Musicprops.id)} loading={isloading} allmusic={allmusic}/>
//         ))}
//       </div>

//         </div>
//     )
// }

// export default Musicprops


import React, {useRef, useState} from 'react'
import Cards from './cards'
import { FaCirclePlay } from 'react-icons/fa6'

const Musicprops = ({allmusic}) => {
      const audioref = useRef(new Audio())
      const [currentSongId, setCurrentSongId] = useState(null)
     
      
    const playmusic = (id) =>{
      const currentmusic =  allmusic.find((music)=> music.id == id )
         const audio = audioref.current
        // console.log(currentmusic);
        // console.log(audio);
        //    console.log(id);
   
      
      // Check if it's the same song or a different one
      if (currentSongId === id) {
        if (audio.paused) {
          audio.play()
        } else {
          audio.pause()
        }
      } else {
        audio.src = currentmusic.songUrl
        audio.play()
        setCurrentSongId(id)
      }
      
    
      
    }
  return (
    <div>
        {/* <h1 ref={h1ref}></h1> */}
       <div style={{width:"100%", height:"100%", display:'flex', justifyContent:"space-between", alignItems:"center", flexWrap:"wrap",gap:"10px", padding:"10px"}}>
         {allmusic && allmusic.map((music)=>(
            <>
            <Cards link={`/one/${music.id}`} onclick={()=>playmusic(music.id)} musicsource={music.songUrl} Songimg={music.songImage} SongTitle={music.SongTitle} Artistname={music.artistName} playbutton={<FaCirclePlay color='white'/>}/>
            </>
        ))

        }
       </div>

    </div>
  )
}

export default Musicprops