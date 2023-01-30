import React, { useEffect,useState } from "react";
import "./homepage.css";
import Navigation from "../../components/Navigation";
import lang from '../../App'
import useSound from 'use-sound';
import ringer from "../../calm.mp3"


const Home = (props) => {
  {/*const audio = new Audio(ringer);
  const[aaa,setaaa]=useState(true)
  useEffect(()=>{
    (aaa)? audio.play() : setaaa(false)
    
  },)*/}

  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  return (
    
    <div className="homepage-background">
      <audio autoplay="" loop="" src="./calm.mp3"></audio>
    <div className="homepage">
      <div className="navigation-pos">
        <Navigation lang={props.lang} setlang={props.setlang}/>
      </div>
      <div className="homepage-about">
        {(props.lang===0)?
       <div>
    <p >Haïet Ouenna</p> 
    <p>Chef d'entreprise, Architect-être,Maître avancé Yoga Iyengar.<br></br></p>
      <a style={{fontFamily: "st_marie_thinthin",fontSize: "15px",color: "black",paddingTop:"0",marginTop:"0"}}>
        Cliquez sur mon visage !
      </a>
    <p>ouenna.h@gnet.tn</p> </div>:
      (props.lang===1)?
    <div>
    <p >حياة عوينا</p> 
    <p>مديرة أعمال,مهندسة معمارية,خبيرة يوجا ينجار<br></br></p>
      <a style={{fontFamily: "st_marie_thinthin",fontSize: "15px",color: "black",paddingTop:"0",marginTop:"0"}}>
      !انقر على وجهي
      </a>
    <p>ouenna.h@gnet.tn</p> </div>:
    <div>
    <p >Haïet Ouenna</p> 
    <p>Business Leader, Architecte, Advanced Master in Iyengar Yoga.<br></br></p>
      <a style={{fontFamily: "st_marie_thinthin",fontSize: "15px",color: "black",paddingTop:"0",marginTop:"0"}}>
      Click on my face!
      </a>
    <p>ouenna.h@gnet.tn</p> </div>
        }
    </div>
        </div>
   
    </div>
  );
};

export default Home;
