import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectInfosContainer from "./ProjectInfosContainer";

export default function ProjectsThumbnails({
  thumbnail: thumbnail,
  projectname: projectname,
  technologies:  technologies = []
}) {
  let thumbnailId = projectname;
  if (projectname.includes(" ")) {
    thumbnailId = projectname.split(" ").join("-");

  }

  return (
    <>

      <div className="project-thumbnail-container hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer" 
   
      >
        
        <Link href={`projects/${thumbnailId}`} className="flex flex-col items-center">
        <h3 className="text-center text-lg font-semibold w-full md:w-2/3 md:w-full text-blackColor mb-4 ">
          {projectname}
        </h3>
        <div className="pixel-thumbnails w-full md:w-2/3  h-30 lg:w-full md:h-30 lg:h-40">
          <Image
            id={`project-${thumbnailId}`}
            src={thumbnail}
            height={500}
            width={500}
            alt={`thumbnail de ${projectname}`}
            className="object-cover"
          ></Image>
        </div>
        <div className="tech-grid w-2/3 md:w-full grid gap-1 grid-cols-1 md:grid-cols-3  ">

       {
       technologies.map((tech) => (
        
       <div  key={tech} className="text-center text-sm bg-blackColor text-whiteColor rounded-2xl mt-3 py-0.5">{tech}</div>
     ))}
        </div>

        </Link>
      </div>
    </>
  );
}
