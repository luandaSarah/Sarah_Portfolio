"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import AllStacks from "./AllStacks";

export default function ProjectsThumbnails({
  img: img,
  projectname: projectname,
  technologies: technologies,
  projectId: projectId,
  projectDesc: projectDesc,
}) {
 
  const handleStacks = (stack) => {
    const foundStack = AllStacks.find((tech) => tech.name === stack);
    return foundStack?.icon();
  };


  return (
    <>
      <div
        className={ projectId + " project-thumbnail-container  pixel-thumbnails  bg-bgColor  mr-4 py-10 px-6  mb-10 min-h-2/3"}
        
      >
        <div className="flex flex-col  items-center md:items-start md:flex-row mb-4 gap-1 md:gap-5">
          <h2 className="text-xl font-bold text-blackColor ">
            {projectname}
          </h2>
          <Link
            href= {'/projects/' + projectId}
            className="text-center bg-secondaryColor text-whiteColor px-2 lg:py-0 rounded-2xl hover:cursor-pointer hover:bg-primaryColor hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            Voir le projet
          </Link>
        </div>

        <div className="w-full gap-x-4 md:grid md:grid-cols-5 md:grid-rows-1">
          <div className="pixel-thumbnails col-start-1 col-end-3 h-52 relative  ">
            <Image
              loading="lazy"
              id={`project-${projectId}`}
              src={img}
              fill
              alt={`thumbnail de ${projectname}`}
              className="object-cover"
            ></Image>
          </div>

          <div className="col-start-3 col-end-6 row-start-1 ">
            <div>
              <p className="text-center md:text-left">{projectDesc}</p>
              
              {/* <p>{projectSolution}</p> */}
            </div>
            <div className="tech-grid  md:w-full flex justify-center md:justify-start flex-wrap h-10 col-start-3 col-end-6 ">
              {technologies.map((tech) => (
                <div key={tech} className="text-center mt-3">
                  {handleStacks(tech)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
