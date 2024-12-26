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
              src={"/profil-picture.png"}
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

          <div className="nameAbout-container text-blackColor text-center">
            <h1 className=" sarahLuanda  pt-2 text-5xl font-medium text-secondaryColor">
              SARAH LUANDA
            </h1>

            <h2 className="text-2xl mt-12 font-semibold bg-bgColor rounded-xl">Bienvenue sur mon portfolio !</h2>
          </div>

          <p className="text-blackColor text-center text-lg pt-2">
            Actuellement étudiante en développement web, je suis passionnée par
            l'informatique et l'univers numérique. Curieuse et créative, j'aime
            concevoir des projets uniques en ajoutant ma touche personnelle de
            couleurs et d'originalité. À travers mes projets, je cherche à
            allier technicité et esthétique pour offrir des expériences web
            captivantes et fonctionnelles.
          </p>
        </div>


        <div className="flex flex-col items-center">
        <h2 className="text-2xl mt-9 font-semibold bg-bgColor rounded-xl text-blackColor">
          Mes compétences techniques
        </h2>
        </div>
        
        <div className="hardSkills-container">

          <div className="backSkills">

          <h3 className=""></h3>
            <ul className="skillsList"> 
            <li>PHP</li>
            <li>SYMPHONY</li>
            <li>MYSQL</li>
            <li>GIT</li>
            <li>LINUX</li>
            <li>BASH</li>
            </ul>
            
          </div>
          <div className="frontSkills"></div>
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
