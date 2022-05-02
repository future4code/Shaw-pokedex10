import React from "react";
import { goToHome } from "../route/cordinator";
import { useNavigate } from 'react-router-dom';

export const Pokedex =()=>{
    const navigate = useNavigate()

    return(
        <>
            <button onClick={()=>goToHome(navigate) }>Voltar</button>
        </>
    )
}