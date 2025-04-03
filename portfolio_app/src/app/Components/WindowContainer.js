"use client";
import React, { useState, useEffect } from "react";
import "./componentsStyle/windowContainer.css";
import Image from "next/image";

export default function WindowContainer({ content: Content }) {
  // const [isLoading, setIsLoading] = useState(true);
  const [mainTitle, setMainTitle] = useState("");
  const [pageLogo, setPageLogo] = useState([
    "/star.webp,",
    "Logo de page par défaut",
  ]);

  let leftArrow = "<";
  let rightArrow = ">";

  let handleBack = () => {
    window.history.back();
  };

  let handleForward = () => {
    window.history.forward();
  };

  // useEffect(() => {
  //   const loadContent = async () => {
  //     setIsLoading(true);
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     setIsLoading(false);
  //   };
  //   loadContent();
  // }, [Content]);

  useEffect(() => {
    var fullPathName = window.location.pathname;
    var splitPathName = fullPathName.split("/")[1];
    console.log(splitPathName);
    setPageLogo([
      `/icones/${splitPathName}.webp`,
      `"Logo de la page ${splitPathName}`,
    ]);
    // console.log(splitPathName);
    if (splitPathName == "") {
      setMainTitle("A PROPOS");
      setPageLogo(["/icones/me.webp", "Logo de la page à propos"]);
    } else if (splitPathName == "projects") {
      setMainTitle("MES PROJETS");
    } else if (splitPathName == "contact") {
      setMainTitle("ME CONTACTER");
    } else {
      setMainTitle("NOM DE LA PAGE");
    }
  }, []);

  return (
    <>
      <div className="windowContainer  p-x fullWindow bg-bgColor w-full h-full relative z-10 col-start-1 col-end-11 lg:col-start-3 lg:col-end-10 lg:row-start-2 lg:row-end-8 row-start-1 row-end-9 ">
        <div className="windowContainer-grid w-full h-full grid lg:grid-rows-8 lg:grid-cols-4">
          <div className="windowContainer-topContainer hidden lg:block col-start-1 col-end-5 row-start-1 row-end-2 border-blackColor border-b-4">
            <div className="windowContainer-topContainer-elementsBox  px-5 h-full w-full flex items-center gap-5">
              <div className="flex gap-2 text-3xl text-blackColor">
                <p>o</p>
                <p>o</p>
                <p>o</p>
              </div>

              <div className="flex gap-5 text-3xl font-medium text-blackColor">
                <p
                  className="hover:cursor-pointer hover:text-primaryColor"
                  onClick={handleBack}
                >
                  {leftArrow}
                </p>
                <p
                  className="hover:cursor-pointer hover:text-primaryColor"
                  onClick={handleForward}
                >
                  {rightArrow}
                </p>
              </div>

              <div className="windowContainer w-3/4 h-12 col-start-2 col-end-3">
                <input
                  className=" w-full h-full box-border placeholder:text-blackColor opacity-50  focus:outline-none px-5 text-blackColor"
                  type="text"
                  name="searchBar"
                  id="searchBar"
                  placeholder="Rechercher"
                />
              </div>

              <div className="pixel-corners px-4 h-3/4 w-1/3  self-end flex items-center gap-4">
                <Image
                  loading="lazy"
                  src={pageLogo[0]}
                  height={"30"}
                  width={"30"}
                  alt={pageLogo[1]}
                  className="sm:hidden xl:block"
                ></Image>
                <h1 className="text-blackColor">{mainTitle}</h1>
              </div>
            </div>
          </div>

          <div className="contentContainer  flex flex-col   items-center row-start-1 lg:row-start-2 row-end-9 col-start-1 col-end-5 h-full w-full  overflow-auto  lg:inset-0 bg-tertiaryColor bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pb-52 lg:pb-0">
            <Content />
          </div>
        </div>
      </div>
  

      {/* <div className="windowContainer shadowContainer absolute z-0 bg-blackColor inset-0 translate-x-5 translate-y-5 col-start-3 col-end-10 row-start-2 row-end-8 hidden lg:block"></div> */}
    </>
  );
}
