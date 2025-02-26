"use client";
import React, { useEffect } from "react";
import WindowContainer from "./Components/WindowContainer";
import Image from "next/image";

export default function Home() {
  const PageContent = () => {
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

            <div className=" bg-bgColor rounded-3xl absolute    bottom-0 w-full h-3/4 z-20 "></div>

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
            <h1 className=" sarahLuanda  pt-2 text-5xl font-medium text-secondaryColor">
              SARAH LUANDA
            </h1>

            <h2 className="text-2xl mt-20 font-semibold bg-bgColor rounded-xl ">
              Développeuse Full Stack
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
            <h3 className="text-lg text-center mb-4 text-blackColor semibold">
              Back-End
            </h3>
            <ul className="skillsList  grid     2xl:grid-cols-3 xl:grid-cols-2 gap-3 mb-9">
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                PHP
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                SYMPHONY
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                MYSQL
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                GIT
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                LINUX
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                BASH
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                DOCKER
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                POSTMAN
              </li>
            </ul>
          </div>
          <div className="frontSkills">
            <h3 className="text-lg text-center mb-4 text-blackColor ">
              Front-End
            </h3>
            <ul className="skillsList grid 2xl:grid-cols-3 xl:grid-cols-2 gap-3">
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                JAVASCRIPT
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                HTML
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                CSS
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                REACT
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                REACT NATIVE
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                VUE
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                ANGULAR
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                TAILWIND
              </li>
              <li className="hardSkills-Bubble text-center bg-blackColor text-whiteColor px-2 py-3 lg:py-0  rounded-2xl">
                FIGMA
              </li>
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
