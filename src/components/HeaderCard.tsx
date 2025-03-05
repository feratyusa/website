"use client"

import { Dispatch, useState } from "react"
import { MovingCircleB } from "./BGAnimation"

function Website({swap, setSwap}:{swap:boolean, setSwap:Dispatch<boolean>}){
    return(
        <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer
                transition duration-200 ease-in-out
                ${swap == true ? 'opacity-15 -translate-y-1/2' : ''}`}                           
            onClick={() => setSwap(!swap)}
        >
            <p className="uppercase text-center text-5xl tracking-[20px] italic">Website</p>
        </div>
    )
}

export default function HeaderCard() {    
    const [swap, setSwap] = useState(false)

    return(
        <div 
            className="h-[100vh] relative text-white overflow-hidden"
            style={{
                fontFamily: "Raleway",                    
            }}
        > 
            <MovingCircleB />
            <Website swap={swap} setSwap={setSwap}/>            
        </div>
    )
}