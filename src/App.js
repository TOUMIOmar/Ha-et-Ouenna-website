
import "./App.css";
import ReactJkMusicPlayer from "react-jinke-music-player";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';
import PagesSelector from "./pages/PagesSelector/PagesSelector";
import Chooselanguage from "./components/Chooselanguage/Chooselanguage";
import Architecturfinalpath from "./components/Architecturfinalpath";
import { useEffect, useState } from "react";
import ringer from "../src/calm.mp3"
import Playmusic from "./components/Playmusic";
import Coffe from "./components/Coffe";
function App() {
  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },[])
  const [lang,setlang]=useState(1)
  const [season,setseason]=useState("summer")


  return <div className="App">
    
    <Chooselanguage lang={lang} setlang={setlang}/>
    <Playmusic/>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  lang={lang} setlang={setlang} season={season}/>} />
          <Route path="/:id" element={<PagesSelector lang={lang} setlang={setlang} season={season}/>} />
          <Route path="/:id/:path" element={<PagesSelector lang={lang} setlang={setlang} season={season}/>} />

        </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
