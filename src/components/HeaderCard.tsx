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
            <p className="lowercase text-center text-8xl tracking-[40px] italic">Website</p>
        </div>
    )
}

function Logo({hidden}:{hidden:boolean}){
    return(
        <div className={`flex justify-center items-center gap-3 transition-all duration-300 ease-in-out ${hidden ? 'opacity-0 -translate-y-10' : ''}`}>
            <LogoIcon logo={ITS.src}/>
            <div className="h-[50px] border-l-2 border-white"></div>
            <img src={Laravel.src} alt="Laravel" className="h-[50px]"/>
            <LogoIcon logo={React.src}/>
            <img src={NodeJS.src} className="w-[35px]"/>  
            <LogoFlask />
            <LogoIcon logo={Nginx.src}/>
            <LogoIcon logo={MySQL.src}/>
            <LogoIcon logo={PostgreSQL.src}/>
            <LogoIcon logo={Docker.src}/>
            <LogoIcon logo={Github.src}/>
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
                <p className="capitalize text-center text-4xl tracking-[18px] font-bold mb-5">
                    Ega Prabu Pamungkas
                </p>
                <Logo hidden={swap == false}/>
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