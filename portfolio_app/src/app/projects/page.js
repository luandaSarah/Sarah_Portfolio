"use client"

import WindowContainer from "../Components/WindowContainer";
import ProjectsThumbnails from "../Components/ProjectsThumbnails";
import AllProjects from "../Components/AllProjects";
import React, { use } from "react";
import { useState } from "react";


export default function Projects() {
  const PageContent = () => {

    // console.log(AllProjects);
    return (
      <div className=" pb-10 px-5 lg:pb-0 lg:px-0  mb-73px lg:mb-0">
      <div className="projectTitle-container  flex flex-col items-center">
      <h1 className=" text-3xl w-2/4 font-semibold  text-blackColor text-center">
          Mes projets
        </h1>

      </div>
     

        <div className="project-grid  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto gap-9 mt-12">
       {AllProjects.map((project, index) => (
        
            <ProjectsThumbnails
              thumbnail={project.thumbnail}
              projectname={project.title}
              technologies={project.technologies}
              thumbnailId={project.projectId}
              key={index}
            />
      
          ))} 
          
{/* 
            <ProjectsThumbnails
            thumbnail={"/thumbnails/puissance4-thumbnail.webp"}
            projectname={"Puissance 4"}
            technologies={["Javascript", "HTML", "CSS"]}
          /> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <WindowContainer content={PageContent} />
    </>
  );
}
