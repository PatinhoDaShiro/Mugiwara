import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Nav/App.jsx'
import Capitao from './components/Paginas/Luffy/Capitao.jsx'
import Imediato from './components/Paginas/Zoro/Imediato.jsx'
import Cozinheiro from './components/Paginas/Sanji/Cozinheiro.jsx'
import Medico from './components/Paginas/Chopper/Medico.jsx'
import Musico from './components/Paginas/Brook/Musico.jsx'
import Artilheiro from './components/Paginas/Ussop/Artilheiro.jsx'
import Carpinteiro from './components/Paginas/Franky/Carpinteiro.jsx'
import Timoneiro from './components/Paginas/Jimbe/Timoneiro.jsx'
import Arqueologa from './components/Paginas/Robin/Arqueologa.jsx'
import Navegadora from './components/Paginas/Nami/Navegadora.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
import { Route, BrowserRouter, Routes} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     
  <BrowserRouter>
  <App/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/luffy" element={<Capitao/>}/>
     <Route path="/zoro" element={<Imediato/>}/>
     <Route path="/sanji" element={<Cozinheiro/>}/>
     <Route path="/chopper" element={<Medico/>}/>
     <Route path="/brook" element={<Musico/>}/>
     <Route path="/franky" element={<Carpinteiro/>}/>
     <Route path="/nami" element={<Navegadora/>}/>
     <Route path="/robin" element={<Arqueologa/>}/>
     <Route path="/ussop" element={<Artilheiro/>}/>
     <Route path="/jimbe" element={<Timoneiro/>}/>
 
     
   </Routes>
  </BrowserRouter>
 </React.StrictMode>,
)
