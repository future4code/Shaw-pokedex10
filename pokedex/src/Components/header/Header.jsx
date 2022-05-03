import React from "react";
import {DivLeft, DivMid, DivRight, MainContainer, DivOne} from '../header/HeaderStyle'
import Logo from '../../img/lgo.png'

function Header(){
    return(
        <MainContainer>
            <DivOne>
                <DivLeft>
                    <button>Ver Pokedex</button>
                </DivLeft>
                <DivMid>
                    <img src={Logo}/>
                </DivMid>
                <DivRight/>
            </DivOne>
            <hr/>
        </MainContainer>
    )
}

export default Header;