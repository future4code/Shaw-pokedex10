import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { PokemonDetail } from '../pages/PokemonDetail';


export default function Router() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
              <Route index element ={<Home/>} />
              <Route path="/pokedex" element ={ <Pokedex/>} />
              <Route path="/pokemon" element ={<PokemonDetail/>} />
           
            </Routes>
        </BrowserRouter>
      
      </div>
    );
  }