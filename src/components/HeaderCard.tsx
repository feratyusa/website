"use client"

import { Dispatch, useState } from "react"
import { MovingCircleB } from "./BGAnimation"
import { Docker, Github, ITS, Laravel, LogoFlask, LogoIcon, MySQL, Nginx, NodeJS, PostgreSQL, React } from "./LogoList"

function Website({swap, setSwap}:{swap:boolean, setSwap:Dispatch<boolean>}){
    return(
        <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer
                transition duration-200 ease-in-out
                ${swap == true ? 'opacity-15 -translate-y-1/2' : ''}`}                           
            onClick={() => setSwap(!swap)}
        >
            <p className="lowercase text-center text-5xl tracking-[20px] italic">Website</p>
            <p className="mt-5 lowercase text-center text-xs tracking-widest italic">[Click me]</p>
        </div>
    )
}

function RecapSection({swap, setSwap}:{swap:boolean, setSwap: Dispatch<boolean>}){
    
    return(        
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 cursor-pointer w-full
                            transition duration-200 ease-in-out                         
                            ${swap == false ? 'opacity-15 -translate-y-1/4' : ''}`}                             
                onClick={() => setSwap(!swap)}
            >
                <p className="capitalize text-center text-4xl tracking-[10px] font-bold mb-5">
                    Ega Prabu Pamungkas
                </p>
                <p className="text-center text-lg italic tracking-widest ">
                    Full Stack Developer
                </p>
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
            <RecapSection swap={swap} setSwap={setSwap}/>
        </div>
    )
}