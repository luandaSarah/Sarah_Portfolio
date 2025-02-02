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
        
        <Link href={`projects/${thumbnailId}`}>
        <h3 className="text-center text-lg font-semibold w-267 text-blackColor mb-4 ">
          {projectname}
        </h3>
        <div className="pixel-thumbnails w-267 h-40">
          <Image
            id={`project-${thumbnailId}`}
            src={thumbnail}
            height={400}
            width={400}
            alt={`thumbnail de ${projectname}`}
          ></Image>
        </div>
        <div className="tech-grid grid gap-1 grid-cols-3 ">

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
