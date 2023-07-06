import { useState } from 'react'
import Sunny from "../../images/Sunny.png"
import './Home.css'

function App() {


  return (
    <div >
    <div id='TituloDiv'>
    <h1  id='textTitulo'>Mugiwaras Explorers</h1>
    </div>
    <div id='texto'>
    <p id='paragrafo'>
    Bem-vindo ao site "Mugiwaras Explorers"! Aqui você encontrará uma descrição completa de cada um dos membros dos Piratas do Chapéu de Palha, também conhecidos como Mugiwaras. Nossa missão é fornecer aos fãs de One Piece informações detalhadas e divertidas sobre esses personagens incríveis. Conheça melhor cada membro da 
    tripulação navegando pelas seções.
    Em "Mugiwaras Explorers", oferecemos perfis detalhados, curiosidades, momentos memoráveis e atualizações sobre o desenvolvimento de cada membro da tripulação. Junte-se a nós nesta emocionante aventura e conheça os Mugiwaras como nunca antes!
    </p>    
    </div>
    <div id="Sunny">
      <img src={Sunny} alt="" />
  
    </div>
 
    </div>
  )
}

export default App
