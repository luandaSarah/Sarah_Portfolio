'use client';
import WindowContainer from "../../Components/WindowContainer";
import React, { useState, useEffect } from "react";
import AllProjects from "../../Components/AllProjects";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

export default  function ProjectInfos() {

    const PageContent = () => {
        const param = useParams()["slug"];

        const project =  AllProjects.find((searcProject) => searcProject.projectId == param);
       
 
       
         return (
         
       
                 <div className="contentContainer text-blackColor flex flex-col items-center row-start-2 row-end-9 col-start-1 col-end-5 h-full w-full py-6 px-32 overflow-y-auto [&::-webkit-scrollbar]:w-2inset-0 h-full w-full bg-tertiaryColor bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                   {project ? (
                     <>
                       <h1 className=" text-3xl w-2/4 font-semibold  text-blackColor text-center">{project.title}</h1>
                       <Link href={project.link || "#"}>
                         <div className=" hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                           <Image 
                             loading="lazy"
                             src={project.gif || "/star"}
                          
                             alt={`thumbnail de ${project.title}`}
                             width={500}
                              height={500}
                             style={{objectFit:"contain", borderRadius:"20px", border:"4px solid var(--blackColor)"}}
                       
                           />
                         </div>
                       </Link>
                       <div className="bg-blackColor text-whiteColor px-2 rounded-2xl text-center mt-5">
                       <p >Durée de production :</p>
                       <p >{project.time}</p>
       
                       </div>
                     
                       <p className="mt-4 text-center">{project.description}</p>
                     </>
                   ) : (
                     <p>Projet Introuvable.</p> 
                   )}
                 </div>
         );
    }


    
    return (
        <>

        
        <WindowContainer content={PageContent}/>

        </>
    )
  }