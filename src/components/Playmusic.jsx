import React, { useState } from 'react'
import '../components/play.css'
import useSound from 'use-sound';
import calm from '../calm.mp3'


const Playmusic = () => {
    const [play,{stop}]=useSound(calm)
    const [iconDisplay,seticonDisplay]=useState(true)

  return (
    <div className='playbtn-container' >
        {(iconDisplay)?
         <button onClick={()=>{play();seticonDisplay(!iconDisplay)}}>
         <img src='play-button.png'></img>
         <h3>Play music</h3>
         </button> 
         :
         <button onClick={()=>{stop();seticonDisplay(!iconDisplay)}}>
         <img src='pause.png'></img>
         <h3>Stop</h3>
         </button>
        }
       

      
    </div>

  )
}

export default Playmusic