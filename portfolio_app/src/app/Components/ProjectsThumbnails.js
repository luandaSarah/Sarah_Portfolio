"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
// import { Image } from "next/image";

export default function ProjectsThumbnails({
  // thumbnail: thumbnail,
  projectname: projectname,
  technologies: technologies,
  projectIdId: projectIdId,
}) {
  return (
    <>
      <div className="project-thumbnail-container hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer ">
        <Link
          href={`projects/${projectIdId}`}
          className="flex flex-col items-center"
        >
          <div className="">
            <Image
              loading="lazy"
              id={`project-${projectIdId}`}
              src="/icones/folder.webp"
              height={100}
              width={100}
              alt={`thumbnail de ${projectname}`}
              className="object-cover"
            ></Image>
          </div>
          <h3 className="text-center text-lg font-semibold w-full md:w-2/3 md:w-full text-blackColor">
            {projectname}
          </h3>
          <div className="tech-grid  justify-center w-2/3 md:w-full grid gap-x-4 grid-cols-1  lg:grid-cols-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="text-center text-sm bg-blackColor text-whiteColor rounded-2xl mt-3 py-0.5 lg:w-20"
              >
                {tech}
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
}
