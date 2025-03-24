"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";

export default function ProjectsThumbnails({
  gif: gif,
  projectname: projectname,
  technologies: technologies,
  projectId: projectId,
  githubLink: githubLink,
  projectDesc: projectDesc,
  projectSolution: projectSolution,
  time: time,
}) {
  const projectRef = useRef(null);

  // const getTopOffset = () => {
  //   // const { offsetTop } = projectRef.current;
  //   // return offsetTop;
  // }

  // console.error(projectRef);
  return (
    <>
      <div
        className="project-thumbnail-container  pixel-thumbnails  bg-bgColor  mr-4 p-6  mb-10 min-h-2/3"
        // ref={projectRef}
        // onScroll = {getTopOffset}
      >
        <div className="flex mb-4 gap-5">
          <h2 className="text-lg font-semibold text-blackColor ">
            {projectname}
          </h2>
          <Link
            href={githubLink}
            className="text-center bg-secondaryColor text-whiteColor px-2 lg:py-0 rounded-2xl hover:cursor-pointer hover:bg-primaryColor hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            Voir sur GitHub
          </Link>
        </div>

        <div className="w-full flex">
          <div className="  pixel-thumbnails w-1/2 h-52 relative ">
            <Image
              loading="lazy"
              id={`project-${projectId}`}
              src={gif}
              fill
              alt={`thumbnail de ${projectname}`}
              className="object-cover"
            ></Image>
          </div>

          <div>
            <div>
              <p>{projectDesc}</p>
              <p>{projectSolution}</p>
            </div>
            <div className="tech-grid  md:w-full flex flex-wrap h-10 ">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="text-center text-sm bg-blackColor text-whiteColor rounded-2xl mt-3 py-0.5 lg:w-20"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
