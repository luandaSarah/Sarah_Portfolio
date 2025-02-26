"use client";
import React, { useState, useEffect } from "react";
import "./componentsStyle/windowContainer.css";
import AllProjects from "./AllProjects";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectInfosContainer() {
  let leftArrow = "<";
  let rightArrow = ">";



    
  let handleBack = () => {
    window.history.back();
  };

  let handleForward = () => {
    window.history.forward();
  };

  const param = useParams()["slug"];

 const project =  AllProjects.find((searcProject) => searcProject.projectId == param);



// console.log(setProjects());

  // const setInfos = () => {
  //   let projects = {};
  //   if (param == "Puissance-4") {
  //     projects = {
  //       title: "Puissance 4",
  //       description:
  //         "Je me suis amusée à refaire le jeu du puissance 4 en Javascript orienté objet, HTML et CSS.",
  //       technologies: ["JS", "HTML", "CSS"],
  //       thumbnail: "/thumbnails/puissance4-thumbnail.webp",
  //       link: "",
  //       githubLink: "",
  //     };
  //   }

  //   return projects;
  // };

  // console.log(setInfos());
  return (
    <>
      <div className="windowContainer bg-bgColor relative z-30 col-start-4 col-end-9 row-start-3 row-end-8 ">
        <div className="windowContainer-grid w-full h-full grid grid-rows-8 grid-cols-4">
          <div className="windowContainer-topContainer col-start-1 col-end-5 row-start-1 row-end-2 border-blackColor border-b-4">
            <div className="windowContainer-topContainer-elementsBox px-5 h-full w-full grid grid-cols-8 flex items-center  ">
              <div className="flex gap-2 text-3xl text-blackColor">
                <p>o</p>
                <p>o</p>
                <p>o</p>
              </div>

              <div className="flex gap-5 text-3xl font-medium text-blackColor">
                <p
                  className="hover:cursor-pointer hover:text-primaryColor"
                  onClick={handleBack}
                >
                  {leftArrow}
                </p>
                <p
                  className="hover:cursor-pointer hover:text-primaryColor"
                  onClick={handleForward}
                >
                  {rightArrow}
                </p>
              </div>

              <div className="pixel-corners px-4 self-end flex items-center gap-4 col-start-7 col-end-9">
                <h1 className="text-blackColor">{project ? project.title : "Chargement..."}</h1>
              </div>
            </div>
          </div>

          <div className="contentContainer text-blackColor flex flex-col items-center row-start-2 row-end-9 col-start-1 col-end-5 h-full w-full py-6 px-32 overflow-auto inset-0 h-full w-full bg-tertiaryColor bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            {project ? (
              <>
                <h2 className="text-2xl font-semibold text-center mb-6">{project.title}</h2>
                <Link href={project.link || "#"}>
                  <div className="pixel-thumbnails projectImage-container text-blackColor w-267 h-60 hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                    <Image
                      loading="lazy"
                      src={project.thumbnail}
                      height={400}
                      width={400}
                      alt={`thumbnail de ${project.title}`}
                
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
        </div>
      </div>
      <div className="windowContainer absolute z-20 bg-blackColor top-7 left-5 col-start-4 col-end-9 row-start-3 row-end-8 "></div>
    </>
  );
}
