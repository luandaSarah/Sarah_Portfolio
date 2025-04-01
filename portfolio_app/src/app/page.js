"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import WindowContainer from "./Components/WindowContainer";
import AllStacks from "./Components/AllStacks";
import { Icon } from "@iconify/react";

export default function Home() {
  const PageContent = () => {
    const handleStacks = (stack) => {
      const foundStack = AllStacks.find((tech) => tech.name === stack);
      return foundStack?.icon();
    };

    return (
      <>
        <div className="presentation-container  flex flex-col items-center">
          <div className="ppSoftskills-container  w-60 h-72 relative  ">
            <Image
              id="pp"
              src={"/profil-picture.webp"}
              height={400}
              width={400}
              alt={"Photo de Sarah"}
              className="z-30 absolute object-cover	w-full h-full  rounded-3xl"
            ></Image>

            {/* <div className=" bg-bgColor rounded-3xl absolute    bottom-0 w-full h-3/4 z-20 "></div> */}

            <div className="softskills-bubble absolute bg-blackColor text-whiteColor px-2 rounded-2xl -left-10 bottom-20  z-40">
              <p>Créative</p>
            </div>

            <div className="softskills-bubble absolute bg-blackColor text-whiteColor px-2 rounded-2xl  -right-8 bottom-8 z-40">
              <p>Autonome</p>
            </div>

            <div className="softskills-bubble absolute bg-blackColor text-whiteColor px-2  -left-16 bottom-36 rounded-2xl z-40">
              <p>Organisée</p>
            </div>

            <div className="softskills-bubble absolute bg-blackColor text-whiteColor px-2 rounded-2xl  -right-10 bottom-28 z-40">
              <p>Fléxible</p>
            </div>

            <div className="softskills-bubble absolute bg-blackColor text-whiteColor px-2 rounded-2xl  -left-8 bottom-4 z-40">
              <p>Empathique</p>
            </div>
          </div>

          <div className="nameAbout-container text-blackColor text-center pl-3">
            <h1 className="type-animation  pt-2 text-5xl font-medium text-secondaryColor">
              SARAH LUANDA
            </h1>

            <h2 className="text-2xl mt-20 font-semibold bg-bgColor rounded-xl ">
              Développeuse Web Junior 
            </h2>
          </div>

          <h3 className="text-blackColor text-center text-xl mx-3 pt-2 mt-9">
            Bienvenue dans mon monde !
          </h3>
          <p className="text-blackColor text-center text-lg mx-3 mt-4">
            Je suis une jeune développeuse junior de 23 ans, passionnée par les
            nouvelles technologies et le développement web. Dotée d'une grande
            créativité, j'aime apporter ma touche personnelle à chacun de mes
            projets.
            <br />
            N'hésitez pas à me contacter si mon profil vous intéresse !
          </p>
        </div>

        <h2 className="text-2xl  text-center  mt-9 px-9 font-semibold bg-bgColor rounded-xl text-blackColor">
          Mes compétences techniques
        </h2>

        <div className="hardSkills-container flex w-2/3 lg:w-full flex-col  lg:flex-row justify-around mt-12">
          <div className="backSkills">
            <h3 className="text-2xl text-center mb-6 text-blackColor font-semibold">
              Back-End
            </h3>
            <ul className="skillsList grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
              <li className="hardSkills-Bubble">{handleStacks("php")}</li>
              <li className="hardSkills-Bubble">{handleStacks("symfony")}</li>
              <li className="hardSkills-Bubble">{handleStacks("mysql")}</li>
              <li className="hardSkills-Bubble">{handleStacks("git")}</li>
              <li className="hardSkills-Bubble">{handleStacks("linux")}</li>
              <li className="hardSkills-Bubble">{handleStacks("bash")}</li>
              <li className="hardSkills-Bubble">{handleStacks("docker")}</li>
              <li className="hardSkills-Bubble">{handleStacks("postman")}</li>
            </ul>
          </div>
          <div className="frontSkills">
            <h3 className="text-2xl text-center mb-6 text-blackColor font-semibold ">
              Front-End
            </h3>
            <ul className="skillsList grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
              <li className="hardSkills-Bubble">
                {handleStacks("javascript")}
              </li>
              <li className="hardSkills-Bubble text-center">
                {handleStacks("html")}
              </li>
              <li className="hardSkills-Bubble">{handleStacks("css")}</li>
              <li className="hardSkills-Bubble">{handleStacks("react")}</li>
              <li className="hardSkills-Bubble">{handleStacks("vue")}</li>
              <li className="hardSkills-Bubble">{handleStacks("tailwind")}</li>
              <li className="hardSkills-Bubble">{handleStacks("figma")}</li>
            </ul>
          </div>
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
