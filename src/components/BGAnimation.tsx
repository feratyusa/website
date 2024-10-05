"use client"

function MovingCircleA(){
    return(
        <div 
            className="absolute -mb-32 -ml-32
                    bottom-0 h-96 w-96 border-t-[10px] border-l-[10px] border-slate-400/20 
                    rounded-full animate-spin-slow"            
        />
    )
}

function MovingCircleB(){
    return(
        <div 
            className="absolute -mt-40 -mr-32
                    top-0 right-0 h-96 w-96 border-t-[15px] border-b-[15px] border-slate-400/20 
                    rounded-full animate-spin-slow"            
        />
    )
}

export {MovingCircleA, MovingCircleB}