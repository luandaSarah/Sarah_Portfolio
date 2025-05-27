"use client";

import WindowContainer from "../Components/WindowContainer";
import ProjectsThumbnails from "../Components/ProjectsThumbnails";
import AllProjects from "../Components/AllProjects";
import React from "react";
import Link from "next/link";

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
      <div className="projectsPage  w-full py-4 lg:py-2 px-2 lg:px-10  flex flex-col md:grid md:grid-cols-5 md:grid-rows-9 mb-73px lg:mb-0 overflow-hidden gap-8 md:gap-4">
        <div className="projectTitle-container text-center text-blackColor col-start-1 col-end-6 row-start-1 row-end-2 w-full sticky md:static">
          <h1 className=" text-3xl font-semibold">Mes projets</h1>
          {/* <Link
            href="https://github.com/luandaSarah"
            className="hover:text-secondaryColor"
            
          >
            Voir plus de projets sur mon Githbub
          </Link> */}
        </div>

        <div className="col-start-1 col-end-6 md:col-end-2 row-start-2  row-end-3 md:row-end-10 sticky md:static">
          <ul className="text-whiteColor font-semibold min-w- text-lg md:overflow-y-auto overflow-x-auto flex md:flex-col gap-2 justify-center">
            {AllProjects.map((project, index) => (
              <li
                key={index}
                onClick={() => scrollToProject(project.slug)}
                className=" bg-blackColor px-2 rounded-xl text-center cursor-pointer hover:bg-blackColor hover:opacity-85 mt-2 "
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-y-auto md:col-start-2 col-start-1 col-end-6 md:row-start-2 row-start-3 row-end-10 ">
          {AllProjects.map((project) => (
            <ProjectsThumbnails
              img={project.img}
              projectname={project.title}
              technologies={project.technologies}
              slug={project.slug}
              githubLink={project.githubLink}
              projectDesc={project.description}
              projectSolution={project.solution}
              key={project.slug}
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
