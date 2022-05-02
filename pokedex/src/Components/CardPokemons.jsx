import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetail } from '../route/cordinator';

export const CardPokemons =()=>{
    const navigate = useNavigate()
    return(
        <>
            <button onClick={()=>goToDetail(navigate) }>Ver detalhes</button>
            
        </>
    )
}