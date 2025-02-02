"use client";
import WindowContainer from "../Components/WindowContainer";
import ProjectsThumbnails from "../Components/ProjectsThumbnails";
import React, { use } from "react";
import { useState } from "react";

export default function Projects() {
  const PageContent = () => {

    return (
      <>
      <div className="projectTitle-container  flex flex-col items-center">
      <h1 className=" text-3xl w-2/4 font-semibold  text-blackColor text-center">
          Mes projets
        </h1>

      </div>
     

        <div className="project-grid grid grid-cols-3 grid-rows-auto gap-9 mt-12">
          <ProjectsThumbnails
            thumbnail={"/thumbnails/puissance4-thumbnail.png"}
            projectname={"Puissance 4"}
            technologies={["Javascript", "HTML", "CSS"]}
          />
{/* 
            <ProjectsThumbnails
            thumbnail={"/thumbnails/puissance4-thumbnail.png"}
            projectname={"Puissance 4"}
            technologies={["Javascript", "HTML", "CSS"]}
          /> */}
        </div>
      </>
    );
  };

  return (
    <>
      <WindowContainer content={PageContent} />
    </>
  );
}
