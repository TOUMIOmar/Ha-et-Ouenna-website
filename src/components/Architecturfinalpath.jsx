import React from 'react'
import {useEffect,useState} from 'react'
import { data } from '../db';
import { Link, useParams } from 'react-router-dom';
import "./insidearchitectur.css"


import ReactDOM from 'react-dom';
import Modal from 'react-modal';




const Architecturfinalpath = () => {


 

















    const [findtarget,setfindtarget]=useState(0);
    const [findarray,setfindarray]=useState([]);
    const [tryy,settryy]=useState([]);

    const [overlay,setoverlay]=useState("");



    const parm=useParams();
    useEffect(()=>{
        settryy(findarray.filter((el)=>
        findarray.indexOf(el)>3)
  );
      Object.keys(data).map((el,index)=>
      (parm.id==el)? 

         Object.values(data)[index].map((ell,indexx)=>
      (parm.path==ell[1])? setfindarray(Object.values(data)[index][indexx])
      
        :console.log("yizii")   )                         
      
      :console.log(findarray)
      )


     
        
     
    }

 
   ,)
   useEffect(()=>{document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },[findarray])
  return (

<div>
    <spam style={{textTransform: "uppercase" }}>{findarray[1]}</spam>
    <div id='container-card-archi'>
   {tryy.map((el,index)=>

<div className='box'>
  <div className="box-img"  style={{backgroundImage: `url(${el})`}}>
  </div>
  </div>
   )
   }
   
    </div>

    


</div> 
  )
}

export default Architecturfinalpath