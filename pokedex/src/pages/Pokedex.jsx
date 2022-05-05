import React from "react";
import { goToHome } from "../route/cordinator";
import { useNavigate } from 'react-router-dom';
import Header from "../Components/header/Header"

export function Pokedex (){
    const navigate = useNavigate()

    return(
        <div>
            <Header/>
            <p>pokedex</p>
        </div>
    )
}