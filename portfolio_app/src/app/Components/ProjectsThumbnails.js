"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import AllStacks from "./AllStacks";

export default function ProjectsThumbnails({
  img: img,
  projectname: projectname,
  technologies: technologies,
  slug: slug,
  projectDesc: projectDesc,
}) {
  const handleStacks = (stack) => {
    const foundStack = AllStacks.find((tech) => tech.name === stack);
    return foundStack?.icon();
  };

  return (
    <>
      <div
        className={
          slug +
          " project-thumbnail-container  pixel-thumbnails  bg-bgColor  pb-1 mb-10 min-h-2/3"
        }
      >
        <div className="w-full ">
          <div className="min-h-80 border-b-4 border-blackColor  relative  ">
            <Image
              loading="lazy"
              id={`project-${slug}`}
              src={Array.isArray(img) ? img[0] : img}
              fill
              alt={`thumbnail de ${projectname}`}
              className="object-cover"
            ></Image>
          </div>

          <div className="flex flex-col items-center mx-4  gap-1 md:gap-5">
            <div className="flex gap-4 mt-5">
              <h2 className="text-xl font-bold text-blackColor ">
                {projectname}
              </h2>
              <Link
                href={"/projects/" + slug}
                className="text-center bg-secondaryColor text-whiteColor px-2 lg:py-0 rounded-2xl hover:cursor-pointer hover:bg-primaryColor hover:scale-105 transition-transform duration-500 ease-in-out"
              >
                Voir le projet
              </Link>
            </div>

            <div>
              <p className="text-center md:text-left">{projectDesc}</p>

              {/* <p>{projectSolution}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
