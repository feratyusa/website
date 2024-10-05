"use client"

function Menu({value}:{value:string}){    
    return(                
        <a href={`#${value}`} className="p-3 tracking-wide hover:bg-slate-500 hover:text-white hover:underline">{value}</a>                
    )
}

function MenuListDesktop(){
    return(
        <div className="flex gap-5">            
            <Menu value="Portofolio" />
            <a href={`https://github.com/feratyusa`} target="__blank" className="p-3 tracking-wide hover:bg-slate-500 hover:text-white hover:underline">Github</a>                
            <a href={`/documents/CV.pdf`} target="__blank" className="p-3 tracking-wide hover:bg-slate-500 hover:text-white hover:underline">Github</a>                
        </div>
    )
}

export default function Navbar(){    
    return(
        <div className="text-slate-400 sticky top-0 z-10">
            <div className="flex gap-5 justify-center bg-slate-800 shadow-lg">            
                <MenuListDesktop />
            </div>                                    
        </div>
    )
}