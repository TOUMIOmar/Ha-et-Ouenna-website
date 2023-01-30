import React,{useEffect} from 'react'
import './video.css'

const Video = (props) => {
  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  return (
    <div>
      <h1 style={{marginTop:"0",paddingTop:"0"}}>{(props.lang===0)? 'Vidéo':(props.lang===1)? 'فيديو':"Video"}</h1>
      <h2>{(props.lang===0)? 'Bientôt':(props.lang===1)? "عما قريب":"Soon"}</h2>
     
    </div>
  )
}

export default Video