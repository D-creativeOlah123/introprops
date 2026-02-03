import React, {useState} from "react"

const Cards = ({ allmusic=[], loading}) =>{
    const [currentaudio,setCurrentaudio] = useState(null);
    console.log("All music:", allmusic);

    const playMusic = (songUrl) =>{
        if(currentaudio){
            currentaudio.pause();
            return
        }   

        const audio = new Audio (songUrl);
        audio.play();
        setCurrentaudio(audio);
        console.log('clicked');
        
    }


    return (
        <>
        { 
        loading ? <p>Loading............</p> :
        <div className="music-app">
            {
             allmusic.map((music) =>{
                return(
                    <div key={music.id} className="music">
                     <img src={music.songImage} alt={music.songTitle}  className="cover"/>
                        <div className="music-info">
                            <p>{music.songTitle}</p>
                            {/* <p>{music.albumName}</p> */}
                            {/* <p>{music.duration}</p> */}
                            <p>{music.artistName}</p>
                            {/* <button onClick={()=>playMusic(music.songUrl)}>play</button> */}
                             <button onClick={() => playMusic(music.songUrl)}>
                                {currentaudio ? "Pause" : "Play"}
                            </button>
                        </div>

                    </div>
                )
             }) }
        </div>
       
   
             
        }
            

            
          
            
        </>

    
    )
}
export default Cards