
import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';
import PagesSelector from "./pages/PagesSelector/PagesSelector";
import Chooselanguage from "./components/Chooselanguage/Chooselanguage";
import Architecturfinalpath from "./components/Architecturfinalpath";
import { useEffect, useState } from "react";
import ringer from "../src/calm.mp3"
function App() {
  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },[])
  const [lang,setlang]=useState(1)

  return <div className="App">
     <audio autoplay="" loop="" src="./calm.mp3"></audio>
    <Chooselanguage lang={lang} setlang={setlang}/>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  lang={lang} setlang={setlang}/>} />
          <Route path="/:id" element={<PagesSelector lang={lang} setlang={setlang}/>} />
          <Route path="/:id/:path" element={<PagesSelector lang={lang} setlang={setlang}/>} />
        </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
