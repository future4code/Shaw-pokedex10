import React, { useEffect } from "react";
import Header from "../Components/header/Header"

export function Home(){

    useEffect(()=>{
        localStorage.setItem('screen','index')
    })

    return(
        <div>
            <Header/>
            <p>Home</p>
        </div>
    )
}