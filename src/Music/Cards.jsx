// import React, {useState} from "react"
// import { FaPlay, FaPause } from "react-icons/fa";
// import { Link } from "react-router-dom";



// const Cards = ({ allmusic=[], loading, link}) =>{
//     const [currentaudio,setCurrentaudio] = useState(null);
//     const [playingId, setPlayingId] = useState(null);
//     console.log("All music:", allmusic);

//     const playMusic = (songUrl, songId) =>{
//          if (currentaudio && playingId === songId) {
//             currentaudio.pause();
//             setCurrentaudio(null);
//             setPlayingId(null);
//             return;
//         }


//         if(currentaudio){
//             currentaudio.pause();
//             return
//         }   

//         const audio = new Audio (songUrl);
//         audio.play();
//         setCurrentaudio(audio);
//         setPlayingId(songId);
//         console.log('clicked');

//          audio.onended = () => {
//             setCurrentaudio(null);
//             setPlayingId(null);
//         };
        
//     }


//     return (
//         <>
//         { 
//         loading ? <p>Loading............</p> :
//         <div className="music-app">
//             {
//              allmusic.map((music) =>{
//                 return(
//                     <Link to={link}>
//                     <div key={music.id} className="music">
//                      <img src={music.songImage} alt={music.songTitle}  className="cover"/>
//                      <div className="play">
//               <span className="fa fa-play">
//                   <button className="playbutton" onClick={() => playMusic(music.songUrl, music.id)}>
//                                 {playingId === music.id ? <FaPause />  : <FaPlay />}
//                                 </button>
//               </span>
//                       </div>
//                         <div className="music-info">
//                             <p>{music.songTitle}</p>
//                             <p>{music.artistName}</p>
//                            {/* <button onClick={() => playMusic(music.songUrl, music.id)}>
//                                 {playingId === music.id ? "Pause" : "Play"}
//                                 </button> */}
//                         </div>

//                     </div>
//                     </Link>





//                 )
//              }) }
//         </div>
       
   
             
//         }
            

            
          
            
//         </>

    
//     )
// }
// export default Cards



import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cards = ({SongTitle, Songimg, Artistname,playbutton, musicsource,onclick, link}) => {
  return (
    <div style={{width:"200px", height:"300px", paddingInline:"10px" , paddingBlock:"20px", backgroundColor:"black", borderRadius:"10px"}}>
      <Link to={link}>
            <audio src={musicsource}></audio>
       <div style={{width:"100%", height:"150px", backgroundColor:"red"}}>
         <img style={{width:"100%", height:"100%" }} src={Songimg} alt="" />
       </div>
      <div style={{width:"100%", marginTop:"10px", height:"100px"}}>
        <h2 style={{marginTop:"10px",color:"white"}}>{SongTitle}</h2>
       <p style={{marginTop:"5px",color:"white"}}>{Artistname}</p>
       <button onClick={onclick} style={{border:"none", }}>{playbutton}</button>
      </div>
      </Link>
    </div>
  )
}

export default Cards