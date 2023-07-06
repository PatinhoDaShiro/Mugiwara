import { useState } from 'react'
import './Capitao.css'
import trintak from "../../../images/30k.png"
import cemk from "../../../images/100k.png"
import trezentosk from "../../../images/300k.png"
import quatrocentosk from "../../../images/400k.png"
import quinhentosk from "../../../images/500k.png"
import umbilhao from "../../../images/1500k.png"
import nika from "../../../images/3kk.png"
function App() {

  return (
  <div >
    <div id='TituloDiv'>
    <h1  id='textTitulo'>Luffy</h1>
    </div>
    <div id='texto'>
    <p id='paragrafo'>
  Monkey D. Luffy é o protagonista do anime e mangá "One Piece". Ele é um jovem pirata com o objetivo de encontrar o maior tesouro do mundo, conhecido como "One Piece", e se tornar o Rei dos Piratas. A história de Luffy começa quando ele é inspirado pelo pirata Shanks, que salva sua vida e lhe dá seu chapéu de palha.

  Luffy parte em sua jornada para formar sua tripulação, os Piratas do Chapéu de Palha. Ele recruta membros como o espadachim Roronoa Zoro, a navegadora Nami, o atirador Usopp, o cozinheiro Sanji, a arqueóloga Nico Robin, o esqueleto vivo Brook e a guerreira Fishman Jinbe.

  Ao longo da série, Luffy enfrenta inúmeros desafios e inimigos poderosos, incluindo a Marinha, o Governo Mundial e outros piratas. Ele participa de batalhas épicas e explora ilhas e mares perigosos.

  Luffy possui a habilidade de esticar seu corpo como uma borracha, graças a uma fruta do diabo chamada Gomu Gomu no Mi. Essa habilidade o torna um lutador formidável, capaz de enfrentar adversários com força bruta e engenhosidade.

  Ele também busca reunir um grupo de aliados poderosos, conhecidos como os "Onze Supernovas", que incluem outros piratas ambiciosos que desafiam o status quo.

  Luffy tem encontros emocionantes com outros piratas notáveis, como o Barba Branca, o Pirata Gol D. Roger e a Pirata Big Mom. Ele também é perseguido por seu arqui-inimigo, o Almirante da Marinha, Akainu.

  Ao longo de sua jornada, Luffy desvenda mistérios sobre o mundo, como a história do século perdido, o significado dos Poneglyphs e a verdade sobre o misterioso One Piece.

  Sua busca o leva a Grand Line, uma rota perigosa e repleta de ilhas misteriosas, e ao Novo Mundo, uma região ainda mais perigosa e cheia de desafios. Luffy e sua tripulação enfrentam batalhas intensas, como a guerra em Marineford, onde ele luta para salvar seu irmão, Portgas D. Ace.

  Luffy também faz alianças estratégicas com outros piratas, como Trafalgar Law e Eustass Kid, para enfrentar o Yonkou, os quatro imperadores do mar.

  No arco final, conhecido como Wano, Luffy se une a uma rebelião para derrubar o tirano Shogun de Wano e libertar o país do domínio de Kaido e Big Mom.

  Luffy continua a progredir em sua busca, aprimorando suas habilidades, fortalecendo sua tripulação e se aproximando cada vez mais de seu objetivo final de se tornar o Rei dos Piratas e encontrar o One Piece, em uma história repleta de aventuras, amizades duradouras e batalhas épicas.
    </p>
    </div>
    <div id='TituloDiv'>
    <h1  id='textTitulo'>Recompensas</h1>
   <div id='recompensas'> 
    <ul className='recompensasNum'>
      <li>30 milhões de Berries</li>
      <li>100 milhões de Berries</li>
      <li>300 milhões de Berries</li>
      </ul>
      <div className='cartazdiv'>
      <img className='cartaz' src={trintak} alt="" />
      <img className='cartaz' src={cemk} alt="" />
      <img className='cartaz' src={trezentosk} alt="" />
    </div>
      <ul className='recompensasNum'>
      <li>400 milhões de Berries</li>
      <li>500 milhões de Berries</li>
      <li>1.5 Bilhão de Berries</li>
      </ul>
      <div className='cartazdiv'>
      <img className='cartaz' src={quatrocentosk} alt="" />
      <img className='cartaz' src={quinhentosk} alt="" />
      <img className='cartaz' src={umbilhao} alt="" />
    </div>
   
      <ul className='recompensasNum'>
      <li>3 Bilhões de Berries</li>
      </ul>
      <div className='cartazdiv'>
      <img className='cartaz' src={nika} alt="" />
      </div>
    
   
    </div>
  </div>
  </div>

    )
  }
export default App
