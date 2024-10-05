"use client"

import TitleContent from "./TitleContent"
import { MovingCircleA } from "./BGAnimation"
import { LACI, Laravel, LogoFlask, LogoIcon, MySQL, Nginx, NodeJS, PostgreSQL, React, RecruitAssistant } from "./LogoList"

function Time({time}:{time:string}){
    return(
        <div className="grid grid-rows-3 h-full">
            <div className="m-auto h-full bg-slate-500 w-1">
            </div>
            <div className="m-auto">
                <p className="italic">{time}</p>
            </div>
            <div className="m-auto h-full bg-slate-500 w-1">
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
        <div className="grid grid-cols-4 w-full h-full">
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
        <a href={link} target="__blank" className={`rounded-lg hover:bg-white hover:text-black p-2 
                                capitalize tracking-wide text-sm ${className}`}>
            {name}
        </a>        
    )
}

function Timeline(){
    return(
        <div className="w-full text-slate-200">
            <LineContent time="07/2024 - now">
                <div>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2">                        
                        <div className="flex items-center gap-2">
                            <div className="w-[50px]">
                                <img src={LACI.src} alt="LACi Logo" />
                            </div>
                            <div>
                                <p className="font-bold tracking-[8px]">LACI</p>
                                <p className="font-thin text-sm tracking-wide">Sistem Administrasi Learning Center</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg bg-red-500 px-2 py-1 shadow-md">
                                <p className="capitalize text-sm font-bold">Full Stack</p>
                            </div>
                        </div>                                                              
                    </div>
                    <div className="border-b-2 border-white px-5 py-2">
                        <p>
                            Aplikasi berbasis web untuk membantu pegawai dalam memonitoring progress 
                            nota, surat, invoice, dan dokumen administrasi lainnya untuk pelaksanaan pelatihan/diklat
                            dan juga monitoring pengeluaran anggaran pelatihan/diklat dalam setiap tahunnya.
                        </p>                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">Sistem file manager untuk setiap jenis pelatihan</li>
                            <li>Sistem file tag untuk monitoring nota, surat, invoice atau dokumen pelatihan yang wajib dipenuhi</li>
                            <li>Dashboard monitoring setiap anggaran pelatihan yang telah dimasukkan</li>
                            <li>Dashboard monitoring jadwal setiap pelatihan berdasarka lokasinya</li>                                
                        </ul>
                        <div className="flex gap-3 mt-2">
                            <LinkContent link="laci.prabupamungkas.site" name="demo" className="bg-red-500"/>
                            <LinkContent link="https://github.com/feratyusa/laci-public" name="source code" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex items-center py-2">
                        <LogoIcon logo={Laravel.src}/>
                        <LogoIcon logo={React.src}/>
                        <LogoIcon logo={MySQL.src}/>
                        <LogoIcon logo={Nginx.src}/>
                    </div>
                </div>
            </LineContent>
            <LineContent time="10/2023 - 01/2024">
                <>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2">                        
                        <div className="flex items-center gap-2">
                            <div className="w-[85px]">
                                <img src={RecruitAssistant.src} alt="LACi Logo" />
                            </div>
                            <div>
                                <p className="font-bold tracking-wide">Recruiter Assitant</p>
                                <p className="font-thin text-sm tracking-wide">
                                    Sistem Rekomendasi Rekrutmen pada RuangKarir Double Track Menggunakan Metode 
                                    <span className="italic">Simple Additive Weight (SAW)</span>
                                    <span>dan Analytical Hierarchy Process (AHP)</span>
                                </p>
                                <p className="font-thin text-sm tracking-wide">Tugas Akhir Teknik Informatika ITS 2024</p>
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
                            Sistem pendukung keputusan (SPK) untuk membantu rekruter dalam menyaring calon karyawan dimana sistem dapat membantu
                            menentukan calon karyawan yang paling cocok berdasarkan bobot kriteria maupun subkriteria yang diberikan oleh rekruter.
                        </p>                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">Sistem rekomendasi calon karyawan dengan menggunakan metode SAW dan AHP berdasarkan bobot kriteria yang diberikan</li>                            
                            <li>Metode SAW berdasarkan nilai bobot yang diberikan pada setiap kriteria maupun subkriteria</li>
                            <li>Metode AHP berdasarkan asas kepentingan antar satu kriteria dengan kriteria lainnya</li>                                               
                        </ul>
                        <div className="flex gap-3 mt-2">
                            <LinkContent link="/documents/RA.pdf" name="dokumen" className="bg-amber-500"/>
                            <LinkContent link="https://github.com/feratyusa/spk-rekrutmen-react" name="source code frontend" className="bg-black"/>
                            <LinkContent link="https://github.com/feratyusa/spk-rekrutmen-flask" name="source code backend" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex w-fit h-fit py-2">
                        <LogoIcon logo={React.src}/>
                        <LogoFlask />
                        <LogoIcon logo={PostgreSQL.src}/>
                        <LogoIcon logo={Nginx.src}/>
                    </div>
                </>
            </LineContent>
            <LineContent time="09/2022 - 10/2022">
                <>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2">                        
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
                            Internshi DevOps dalam pengembangan Sistem Penentu Volume Gumpalan Darah pada Deep Vein Thrombosis berbasis Citra Ultrasound Tiga Dimensi
                        </p>                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">Mengembangkan CI/CD backend dan frontend aplikasi dengan Github Actions dan Docker</li>
                            <li>Mengkonfigurasi web server menggunakan Nginx pada Digital Ocean Platform</li>
                        </ul>
                        <div className="flex gap-3 mt-2">                            
                            <LinkContent link="https://github.com/feratyusa/3dvt-backend" name="source code backend" className="bg-black"/>
                            <LinkContent link="https://github.com/feratyusa/3dvt-frontend" name="source code frontend" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex items-center pl-2 py-2">
                        <img src={NodeJS.src} className="w-[35px]"/>                     
                    </div>
                </>
            </LineContent>
            <LineContent time="05/2022 - 06/2022">
                <>
                    <div className="flex border-b-2 items-center justify-between border-white px-5 py-2">                        
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
                            <div className="rounded-lg bg-amber-500 px-2 py-1 shadow-md">
                                <p className="capitalize text-sm font-bold">Backend</p>
                            </div>
                        </div>                                      
                    </div>
                    <div className="border-b-2 border-white px-5 py-2">
                        <p>
                            Aplikasi scan wajah untuk membantu menganalisa masalah awal wajah pengguna dan memberikan rekomendasi obat kecantikan yang terkait untuk membantu mengatasi masalah wajah tersebut.
                        </p>                        
                        <ul className="list-disc pl-4">
                            <li className="list-item">Mengintegrasikan model pendeteksi masalah kulit dengan aplikasi Paras menggunakan RESTful API</li>
                            <li>Deployment Backend dan model aplikasi menggunakan App Engine dari Google Cloud Platform</li>
                        </ul>
                        <div className="flex gap-3 mt-2">
                            <LinkContent link="documents/Paras.pdf" name="dokumen" className="bg-amber-500"/>
                            <LinkContent link="https://github.com/feratyusa/paras-capstone-bangkit-2022" name="source code" className="bg-black"/>
                        </div>
                    </div>
                    <div className="flex items-center pl-2 py-2">
                        <img src={NodeJS.src} className="w-[35px]"/>                     
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