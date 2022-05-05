import React from "react";
// import { useNavigate } from "react-router-dom";


export const CardPokemons =({ pokemon, loading, infoPokemon })=>{
    // const navigate = useNavigate()
    return(
        <>{loading ? (
            <h1> Loading...</h1>
          ) : (
            pokemon.map((item) => {
              return (
                <>
                  <div className="card" key={item.id} onClick={()=>infoPokemon(item)} >
                    <h2>{item.id}</h2>
                    <img src={item.sprites.front_default} alt="" />
                    <h2>{item.name}</h2>
                  </div>
                </>
              );
            })
          )}
    
          {/* <button onClick={()=>goToHome(navigate) }>Voltar</button> */}
        </>
    )
}