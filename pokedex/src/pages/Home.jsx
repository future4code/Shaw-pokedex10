import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from '../route/cordinator';

export const Home =()=>{
    const navigate = useNavigate()
    return(
        <>
            <button onClick={()=>goToPokedex(navigate) }>Pokedex</button>
            
        </>
    )
}