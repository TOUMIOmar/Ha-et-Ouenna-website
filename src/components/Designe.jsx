import React,{useEffect} from 'react'
import './design.css'
const Designe = (props) => {
  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  return (
    <div>
      <h1 style={{marginTop:"0",paddingTop:"0"}}>{(props.lang===0)? 'Design':(props.lang===1)? 'تصميم':"Design"}</h1>
      <h2>{(props.lang===0)? 'Bientôt':(props.lang===1)? "عما قريب":"Soon"}</h2>
    {/* <div className="cont">
  <div className="card card--10">
<svg className="card--10__svg">
  <rect className="card--10__rect" width="100%" height="100%" fill="none" stroke="#ddba76" strokeWidth={5} />
</svg>
<h2 className="card__title">Having fun with cards</h2>
<img className="card__img" src="https://images2.imgbox.com/7a/9d/5YBMa1IA_o.jpg" alt="" />
<p className="card__text">OK me too, I don't like this one but just to play around</p>
<a className="card__btn" href>buy me</a>
</div>
<div className="card card--10">
<svg className="card--10__svg">
  <rect className="card--10__rect" width="100%" height="100%" fill="none" stroke="#ddba76" strokeWidth={5} />
</svg>
<h2 className="card__title">Having fun with cards</h2>
<img className="card__img" src="https://images2.imgbox.com/7a/9d/5YBMa1IA_o.jpg" alt="" />
<p className="card__text">OK me too, I don't like this one but just to play around</p>
<a className="card__btn" href>buy me</a>
    </div>
    
<div className="card card--10">
<svg className="card--10__svg">
  <rect className="card--10__rect" width="100%" height="100%" fill="none" stroke="#ddba76" strokeWidth={5} />
</svg>
<h2 className="card__title">Having fun with cards</h2>
<img className="card__img" src="https://images2.imgbox.com/7a/9d/5YBMa1IA_o.jpg" alt="" />
<p className="card__text">OK me too, I don't like this one but just to play around</p>
<a className="card__btn" href>buy me</a>
    </div>
</div> */}
  </div>
  )
}

export default Designe