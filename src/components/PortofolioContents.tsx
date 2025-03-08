"use client"

import TitleContent from "./TitleContent"
import { MovingCircleA } from "./BGAnimation"
import { Docker, EHumanCapital, Flask, Flutter, Github, LACI, Laravel, MySQL, Nginx, NodeJS, PostgreSQL, React, Springboot } from "./LogoList"

function Time({time}:{time:string}){
    return(
        <div className="grid grid-rows-3 h-full">
            <div className="flex items-center justify-center">
                <div className="bg-slate-500 w-1 h-full">
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="px-1">
                    <p className="italic text-center">
                        {time}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-slate-500 w-1 h-full">
                </div>
            </div>
        </div>
    )
}

function PortofolioContent({children}:{children:React.ReactNode}){
    return(
        <div className="bg-slate-700 rounded-lg shadow-lg shadow-black/30 hover:shadow-white/30 w-full lg:max-w-4xl my-10">
            {children}
        </div>
    )
}

function LineContent({time, children}:{time:string, children:React.ReactNode}){
    return(
        <div className="grid grid-cols-4 w-full h-full text-sm">
            <div className="col-span-1">
                <Time time={time}/>
            </div>
            <div className="col-span-3">
                <PortofolioContent>
                    {children}
                </PortofolioContent>
            </div>
        </div>
    )
}

function LinkContent({link, className, name}:{name:string, link:string, className:string}){
    return(
        <div className="flex items-center justify-center">
            <a href={link} target="_blank" className="flex items-center">
                <div className={`${className} text-center rounded-lg hover:bg-white hover:text-black p-2`}>
                    <p className={`capitalize tracking-wide text-sm`}>
                        {name}
                    </p>        
                </div>  
            </a>
        </div>      
    )
}

function Timeline(){
    return(
        <div className="w-full text-slate-200">
            <LineContent time="12/2024 - Now">
                <div>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2 gap-2 overflow-x-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-[50px]">
                                <img src={EHumanCapital.src} alt="LACi Logo" />
                            </div>
                            <div>
                                <p className="font-bold">E-Human Capital Reload</p>
                                <p className="font-thin text-sm tracking-wide">Employee Mobile Application</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg bg-red-500 px-2 py-1 shadow-md">
                                <p className="capitalize text-sm font-bold text-center">Full Stack</p>
                            </div>
                        </div>                                                              
                    </div>
                    <div className="border-b-2 border-white px-5 py-2">                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">Accomodate more than 7 main functionalities for employee to use, which includes paid leave, sick permit leave, regular permit leave, glasses accomodation, hospital stay, hospital care, and others </li>
                            <li>Develop authentication using JWT Token and integrate with the last system and credential used</li>
                            <li>Develop CI/CD using Docker and utilising Gitlab features for improving the team development flow</li>
                        </ul>
                        <div className="mt-5 mb-2 flex gap-2">
                            <LinkContent link="/documents/EHCReload.pdf" name="dokumen" className="bg-blue-500"/>
                        </div>
                    </div>
                    <div className="px-5 py-2 flex items-center gap-5">
                        <img src={Springboot.src} alt="Springboot" width={30}/>
                        <div className="bg-white rounded-lg p-2">
                            <img src={Flutter.src} alt="Flutter" width={60} />
                        </div>
                    </div>
                </div>
            </LineContent>
            <LineContent time="07/2024 - 12/2024">
                <div>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2 gap-2 overflow-x-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-[50px]">
                                <img src={LACI.src} alt="LACi Logo" />
                            </div>
                            <div>
                                <p className="font-bold tracking-[8px]">LACI</p>
                                <p className="font-thin text-sm tracking-wide">Administration System of Learning Center</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg bg-red-500 px-2 py-1 shadow-md">
                                <p className="capitalize text-sm font-bold text-center">Full Stack</p>
                            </div>
                        </div>                                                              
                    </div>
                    <div className="border-b-2 border-white px-5 py-2">                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">Monitoring system for over 100 training events per year</li>
                            <li>Participants and file manager for each training events, also equipped with monitoring system for administrator</li>
                            <li>Budget monitoring system with dynamic type of budgets and budget details</li>
                            <li>Dashboard training with query based filtering</li>
                            <li>Certification monitoring system for over 2000 employees</li>
                            <li>Guidebook for the website usage</li>
                        </ul>
                        <div className="mt-5 mb-2 flex gap-2 overflow-x-auto">
                            <LinkContent link="/documents/LACI.pdf" name="dokumen" className="bg-blue-500"/>
                            <LinkContent link="https://github.com/feratyusa/laci-public" name="source code" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex items-center py-2 overflow-x-auto">
                        <img src={Laravel.src} alt="Laravel" width={60} />
                        <img src={React.src} alt="Laravel" width={60} />
                        <img src={MySQL.src} alt="Laravel" width={60} />
                        <img src={Nginx.src} alt="Laravel" width={60} />
                    </div>
                </div>
            </LineContent>
            <LineContent time="10/2023 - 01/2024">
                <>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2 gap-2 overflow-x-auto"> 
                        <div className="flex items-center gap-2">
                            <div>
                                <p className="font-bold tracking-wide">Recruiter Assistant</p>
                                <p className="font-thin text-sm tracking-wide">
                                    Decision Support System for Recruitmen
                                </p>
                                <p className="font-thin text-sm tracking-wide">Thesis Project for Infomatics Engineering ITS 2024</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg bg-red-500 px-2 py-1 shadow-md">
                                <p className="text-nowrap capitalize text-sm font-bold">Full Stack</p>
                            </div>
                        </div>                                      
                    </div>
                    <div className="border-b-2 border-white px-5 py-2">
                        <p>
                            Decision Support System for Recruitment on RuangKarir Double Track Using 
                            <i>Simple Additive Weight (SAW)</i>
                            <i>and Analytical Hierarchy Process (AHP)</i> methods.
                            This decsision support system (DSS) is used to help recruiter with filtering for employee candidate where the system
                            can help determine the best candidate based on criteria or sub-criteria weight specified by the recruiter.
                        </p>                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">SAW method is based on the weight each criteria or subcriteria that is specified by the recruiter</li>
                            <li>AHP method is based on importance or priority of each criteria and subcriteria with other criteria or subcriteria</li>                                               
                        </ul>
                        <div className="mt-5 mb-2 flex gap-2 overflow-x-auto">
                            <LinkContent link="/documents/RA.pdf" name="dokumen" className="bg-blue-500"/>
                            <LinkContent link="https://github.com/feratyusa/spk-rekrutmen-react" name="Frontend" className="bg-black"/>
                            <LinkContent link="https://github.com/feratyusa/spk-rekrutmen-flask" name="Backend" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex py-2 overflow-x-auto">
                        <img src={React.src} alt="Laravel" width={60} />
                        <div className="bg-white rounded-lg">
                            <img src={Flask.src} alt="Flask" width={60} />
                        </div>
                        <img src={PostgreSQL.src} alt="Laravel" width={60} />
                        <img src={Nginx.src} alt="Laravel" width={60} />
                    </div>
                </>
            </LineContent>
            <LineContent time="09/2022 - 10/2022">
                <>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2 gap-2 overflow-x-auto">
                        <div className="flex items-center gap-2">                            
                            <div>
                                <p className="font-bold tracking-wide">3DVT</p>                                
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg bg-green-500 px-2 py-1 shadow-md">
                                <p className="capitalize text-sm font-bold">DevOps</p>
                            </div>
                        </div>                                      
                    </div>
                    <div className="border-b-2 border-white px-5 py-2">
                        <p>
                            DevOps internship on developing the &quot;System for Determining Blood Clot Volume in Deep Vein Thrombosis based on Three-Dimensional Ultrasound Images&quot;
                        </p>                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">Developing CI/CD for the backend and frontend utilising Github Actions and Docker</li>
                            <li>Configurate web server using Nginx on Digital Ocean Platform</li>
                        </ul>
                        <div className="mt-5 mb-2 flex gap-2 overflow-x-auto">
                            <LinkContent link="https://github.com/feratyusa/3dvt-backend" name="backend" className="bg-black"/>
                            <LinkContent link="https://github.com/feratyusa/3dvt-frontend" name="frontend" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex gap-2 p-2 overflow-x-auto">
                        <div className="bg-white rounded-lg">
                            <img src={Docker.src} alt="Docker" width={60} />
                        </div>
                        <div className="bg-white rounded-lg">
                            <img src={Github.src} alt="Docker" width={60} />
                        </div>
                    </div>
                </>
            </LineContent>
            <LineContent time="05/2022 - 06/2022">
                <>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2 gap-2 overflow-x-auto">
                        <div className="flex items-center gap-2">                            
                            <div>
                                <p className="font-bold tracking-wide">Paras</p>
                                <p className="font-thin text-sm tracking-wide">
                                    Facial Skin Advicer
                                </p>
                                <p className="font-thin text-sm tracking-wide">Capstone Project Bangkit 2022</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg bg-rose-500 px-2 py-1 shadow-md">
                                <p className="capitalize text-sm font-bold">Backend</p>
                            </div>
                        </div>                                      
                    </div>
                    <div className="border-b-2 border-white px-5 py-2">
                        <p>
                            Face Scanner Application to help analyze early stage facial problem and provide recommendations for related beauty medicines to help overcome these facial problems.
                        </p>
                        <ul className="list-disc pl-4">
                            <li className="list-item">Integrate the model used to identify facial problem with the mobile Application using RESTful API (HapiJS)</li>
                            <li>Deploy the backend RESTful API and the model using App Engine from Google Cloud Platform</li>
                        </ul>
                        <div className="mt-5 mb-2 flex gap-2 overflow-x-auto">
                            <LinkContent link="documents/Paras.pdf" name="dokumen" className="bg-blue-500"/>
                            <LinkContent link="https://github.com/feratyusa/paras-capstone-bangkit-2022" name="source code" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex gap-2 p-2">
                        <img src={NodeJS.src} width={35}/>
                    </div>
                </>
            </LineContent>
        </div>
    )
}


export default function PortofolioContents({id}:{id:string}){
    return(
        <div className="flex flex-col py-52" id={id}>
            <MovingCircleA />
            <div className="flex justify-center text-left">
                <TitleContent title="Portofolio"/>
            </div>
            <div className="p-5 pt-10">
                <Timeline />
            </div>                
        </div>
    )
}