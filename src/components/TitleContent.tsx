"use client"

export default function TitleContent({title}:{title:string}){
    return(
        <p 
            className="uppercase text-slate-300 font-bold text-4xl tracking-widest"
            style={{
                fontFamily: "Raleway",                    
            }}
        >
            {title}
        </p>
    )
}