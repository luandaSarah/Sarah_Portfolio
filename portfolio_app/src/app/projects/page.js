"use client";

import WindowContainer from "../Components/WindowContainer";
import ProjectsThumbnails from "../Components/ProjectsThumbnails";
import AllProjects from "../Components/AllProjects";
import React from "react";

export default function Projects() {
  const scrollToProject = (id) => {
    const currentProject = document.querySelector(`.${id}`);

    currentProject.scrollIntoView({
      behavior: "smooth",
      block: "start",
    

    });
  };

  const PageContent = () => {
    return (
      <div className="projectsPage  w-full pb-10 px-5 lg:pb-0 lg:px-0  flex flex-col md:grid md:grid-cols-5 md:grid-rows-9 mb-73px lg:mb-0 overflow-hidden gap-8 md:gap-4">
        <div className="projectTitle-container  col-start-1 col-end-6 row-start-1 row-end-2 w-full ">
          <h1 className=" text-3xl font-semibold  text-blackColor text-center">
            Mes projets
          </h1>
        </div>

        <div className="col-start-1 col-end-6 md:col-end-2 row-start-2  row-end-3 md:row-end-10 ">
          <ul className="text-whiteColor font-semibold text-lg md:overflow-y-auto overflow-x-auto flex md:flex-col gap-2 justify-center">
            {AllProjects.map((project, index) => (
              <li
                key={index}
                onClick={() => scrollToProject(project.projectId)}
                className=" bg-blackColor rounded-xl text-center cursor-pointer hover:bg-blackColor hover:opacity-85 ">
              
                {project.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-y-auto md:col-start-2 col-start-1 col-end-6 md:row-start-2 row-start-3 row-end-10 ">
          {AllProjects.map((project) => (
            <ProjectsThumbnails
              gif={project.gif}
              projectname={project.title}
              technologies={project.technologies}
              projectId={project.projectId}
              githubLink={project.githubLink}
              projectDesc={project.description}
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
