"use client";

import WindowContainer from "@/app/Components/WindowContainer";
import AllProjects from "@/app/Components/AllProjects";
import Image from "next/image";
import AllStacks from "@/app/Components/AllStacks";
import Link from "next/link";

export default async function ProjectDetails({ params }) {
  let { slug } = await params;

  const getProject = AllProjects.find((project) => {
    return project.projectId === slug;
  });

  const handleStacks = (stack) => {
    const foundStack = AllStacks.find((tech) => tech.name === stack);
    return foundStack?.icon();
  };

  // console.log(getProject);
  const pageUnfound = () => {
    return (
      <div className=" w-full pb-10 px-5 lg:pb-0 lg:px-0  h-full flex flex-col justify-center items-center gap-4">
        <h1 className=" text-3xl font-semibold  text-blackColor text-center">
          Ce projet n'existe pas
        </h1>
        <Link
          href="/projects"
          className="text-center bg-secondaryColor text-whiteColor py-2 px-2 rounded-2xl hover:cursor-pointer hover:bg-primaryColor hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          Revenir à la page des projets
        </Link>
      </div>
    );
  };

  const pageFound = () => {
    return (
      <>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full min-h-80 h-96 border-b-4 border-blackColor relative">
            <Image
              loading="lazy"
              id={`project-${getProject.projectId}`}
              src={getProject.img}
              fill
              alt={`thumbnail de ${getProject.title}`}
              className="object-cover"
            ></Image>
          </div>
        </div>

        <div className="  w-full pb-10 px-5 p-5 flex flex-col justify-center items-center gap-4">
          <div className="flex mb-4 gap-5">
            <h1 className=" text-3xl font-semibold  text-blackColor text-center">
              {getProject.title}
            </h1>

            <Link
              href={getProject.link ?? getProject.githubLink}
              target=" _blank"
              className="text-center bg-secondaryColor text-whiteColor py-2 px-2 rounded-2xl hover:cursor-pointer hover:bg-primaryColor hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              Ouvrir
            </Link>
          </div>

          <div className="tech-grid  flex  h-10">
            {getProject.technologies.map((tech) => (
              <div key={tech}>{handleStacks(tech)}</div>
            ))}
          </div>

          <div className="w-full  mt-10 flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl text-blackColor font-semibold bg-bgColor rounded-xl px-4">
              Description
            </h2>
            <p className="text-blackColor text-lg mx-3 mt-2">
              {getProject.description}
            </p>
          </div>

          <div className="w-full  mt-10 flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl text-blackColor font-semibold bg-bgColor rounded-xl px-4">
              Solution
            </h2>
            <p className="text-blackColor text-center text-lg mx-3 mt-2">
              {getProject.solution}
            </p>
          </div>

          <div className="w-full  mt-10 flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl  text-blackColor font-semibold bg-bgColor rounded-xl px-4">
              Extrait du code
            </h2>
            <div className="w-full  mt-10 flex flex-col gap-4">
              <h3 className="text-blackColor text-xl mx-3 my-4 font-semibold ">
                {getProject.extractTitle} :
              </h3>
              <div className="pixel-thumbnails w-full bg-bgColor p-2 text-blackColor ">
                <pre className="overflow-x-auto">{getProject.codeExtract}</pre>
              </div>
              <div>
                <h3 className="text-blackColor text-xl mx-3 my-4 font-semibold">
                  Explication :
                </h3>
                <p className="text-blackColor text-center text-lg mx-3 mt-4">
                  {getProject.codeExplaination}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <WindowContainer content={getProject ? pageFound : pageUnfound} />
    </>
  );
}
