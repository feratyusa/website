"use client"

import ITS from "@/public/its.png"
import React from "@/public/react.svg"
import Flask from "@/public/flask.svg"
import Laravel from "@/public/laravel.svg"
import Nginx from "@/public/nginx.svg"
import MySQL from "@/public/mysql.svg"
import PostgreSQL from "@/public/postgresql.svg"
import Docker from "@/public/docker.svg"
import Github from "@/public/github.svg"
import LACI from "@/public/laci.png"
import RecruitAssistant from "@/public/recruitassistant.svg"
import NodeJS from "@/public/nodejs.svg"

function LogoIcon({logo}:{logo:string}){
    return(
        <img src={logo} className="w-[60px]"/>
    )
}

function LogoFlask(){
    return(
        <div className={`bg-white rounded-lg`}>
            <img src={Flask.src} alt="Flask" className="w-[60px]" />
        </div>
    )
}

export {
    LogoIcon,
    ITS,
    React,
    LogoFlask,
    Laravel,
    Nginx,
    MySQL,
    PostgreSQL,
    Docker,
    Github,
    LACI,
    RecruitAssistant,
    Flask,
    NodeJS
}