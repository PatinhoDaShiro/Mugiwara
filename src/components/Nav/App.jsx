import { useState } from 'react'
import luffy from "../../images/luffy.png"
import robin from "../../images/robin.png"
import sanji from "../../images/sanji.png"
import zoro from "../../images/zoro.png"
import franky from "../../images/franky.png"
import chopper from "../../images/chopper.png"
import jimbe from "../../images/jimbe.png"
import brook from "../../images/brook.png"
import nami from "../../images/nami.png"
import ussop from "../../images/ussop.png"
import bandeira from "../../images/iconmugiwaras.png"
import { Link } from "react-router-dom";
import './App.css'

function App() {

  function mostrarL(){
    const m=document.getElementById("luffy")
    m.classList.toggle("mostre")
  }
  function mostrarZ(){
    const m=document.getElementById("zoro")
    m.classList.toggle("mostre")
  }
  function mostrarS(){
    const m=document.getElementById("sanji")
    m.classList.toggle("mostre")
  }
  function mostrarN(){
    const m=document.getElementById("nami")
    m.classList.toggle("mostre")
  }
  function mostrarC(){
    const m=document.getElementById("chopper")
    m.classList.toggle("mostre")
  }
  function mostrarU(){
    const m=document.getElementById("ussop")
    m.classList.toggle("mostre")
  }
  function mostrarR(){
    const m=document.getElementById("robin")
    m.classList.toggle("mostre")
  }
  function mostrarJ(){
    const m=document.getElementById("jimbe")
    m.classList.toggle("mostre")
  }
  function mostrarB(){
    const m=document.getElementById("brook")
    m.classList.toggle("mostre")
  }
  function mostrarF(){
    const m=document.getElementById("franky")
    m.classList.toggle("mostre")
  }
  

let contador = 0
let reverso = 0

function animacao(){
  const m=document.getElementById("barco")
  function reverseanime(){
      if(reverso==1){
      m.classList.toggle("manime")
      m.classList.toggle("retorne")
      setTimeout(alocarwidth,4000)
    }else{
      setTimeout(alocarwidth,4000)
      m.classList.toggle("manime")
      reverso = 1
    }
     
    }

  function alocarwidth(){
    m.classList.toggle("left")
  }

  function desembarcar(){
  setTimeout(mostrarL,4000)
  setTimeout(mostrarZ,4500)
  setTimeout(mostrarS,5000)
  setTimeout(mostrarN,5500)
  setTimeout(mostrarC,6000)
  setTimeout(mostrarU,6500)
  setTimeout(mostrarR,7000)
  setTimeout(mostrarJ,7500)
  setTimeout(mostrarB,8000)
  setTimeout(mostrarF,8500)
}

function embarcar(){
  setTimeout(mostrarL,500)
  setTimeout(mostrarZ,1000)
  setTimeout(mostrarS,1500)
  setTimeout(mostrarN,2000)
  setTimeout(mostrarC,2500)
  setTimeout(mostrarU,3000)
  setTimeout(mostrarR,3500)
  setTimeout(mostrarJ,4000)
  setTimeout(mostrarB,4500)
  setTimeout(mostrarF,5000)
}
    if(contador==1){
     
      embarcar()
      setTimeout(reverseanime,5000)

      contador= 0
    }else{
 
      reverseanime()
      desembarcar()
      contador= 1
    }
    
    
    
    
  }

  return (
  <div  href="/luffy" className="left" id='barco'>  
  <navigator  id='tripulacao'>
   <img onClick={animacao} id="menu" src={bandeira} alt="" />
   <Link to="/luffy"><img id='luffy' className="mugiwara" src={luffy} alt=""/></Link>
   <Link to="/zoro"><img id="zoro" className="mugiwara" src={zoro} alt=""/></Link>
   <Link to="/sanji"><img id="sanji" className="mugiwara" src={sanji} alt=""/></Link>
   <Link to="/nami"><img id="nami" className="mugiwara" src={nami} alt=""/></Link>
   <Link to="/chopper"><img id="chopper" className="mugiwara" src={chopper} alt=""/></Link>
   <Link to="/ussop"><img id="ussop" className="mugiwara" src={ussop} alt=""/></Link>
   <Link to="/robin"><img id="robin" className="mugiwara" src={robin} alt=""/></Link>
   <Link to="/jimbe"><img id="jimbe" className="mugiwara" src={jimbe} alt=""/></Link>
   <Link to="/brook"><img id="brook" className="mugiwara" src={brook} alt=""/></Link>
   <Link to="/franky"><img id="franky" className="mugiwara" src={franky} alt=""/></Link>
  </navigator>
   </div>
      
  )
}

export default App
