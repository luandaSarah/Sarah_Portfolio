"use client";

import WindowContainer from "../Components/WindowContainer";
import ProjectsThumbnails from "../Components/ProjectsThumbnails";
import AllProjects from "../Components/AllProjects";
import React from "react";
import { useRef } from 'react';


export default function Projects() {
  const PageContent = () => {
    // console.log(AllProjects);
    return (
      
      <div className="projectsPage  w-full pb-10 px-5 lg:pb-0 lg:px-0  grid grid-cols-5 grid-rows-9 mb-73px lg:mb-0 overflow-hidden">
        <div className="projectTitle-container  col-start-1 col-end-6 row-start-1 row-end-2 w-full ">
          <h1 className=" text-3xl font-semibold  text-blackColor text-center">
            Mes projets
          </h1>
        </div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-10">
         
          <ul className="">
            {AllProjects.map((project,index) => (
              <li key={index} >{project.title}</li>
            ))}
          </ul>
        </div>

        <div className="projects overflow-y-auto col-start-2 col-end-6 row-start-2 row-end-10 ">
          {AllProjects.map((project) => (
            <ProjectsThumbnails
              gif={project.gif}
              projectname={project.title}
              technologies={project.technologies}
              projectId={project.projectId}
              githubLink={project.githubLink}
              projectDesc = {project.description}
              projectSolution={project.solution}
              key={project.projectId}
            />
          ))}
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
