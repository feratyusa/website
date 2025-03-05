"use client"

export default function Footer(){
    return(
        <div className="flex justify-center gap-2 bg-slate-500 p-8">
            <p>Made with <a href="https://github.com/feratyusa/website" target="_blank" className="underline">Love</a></p>
            <p>-</p>
            <p>Prabu @ {new Date().getFullYear()}</p>
        </div>
    )
}