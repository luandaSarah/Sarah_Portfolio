'use client' 
import React, { useState, useEffect }  from "react";
import "./componentsStyle/windowContainer.css";
import Image from "next/image";

export default function WindowContainer({content : Content}) {
let leftArrow = "<";
let rightArrow = ">";

const [mainTitle, setMainTitle] = useState("");

const [pageLogo, setPageLogo] = useState(["/star.png", "Logo de page par défaut" ]);



    useEffect(() => {
        var fullPathName = window.location.pathname;
        var splitPathName = fullPathName.split("/")[1];
        console.log(splitPathName);
        setPageLogo([`/${splitPathName}.png`,`"Logo de la pagepage ${splitPathName}`]);
        // console.log(splitPathName);
        if (splitPathName == "") {
            setMainTitle("A PROPOS");
            setPageLogo(["/me.png", "Logo de la page à propos"]);
        } else if (splitPathName == "projects") {
            setMainTitle("MES PROJETS");
        } else if (splitPathName == "contact") {
            setMainTitle("ME CONTACTER");
        } else {
          setMainTitle("NOM DE LA PAGE")
        }
    }, []);



 
  return (
    <>
      <div className="windowContainer bg-bgColor relative z-10 col-start-3 col-end-10 row-start-2 row-end-8  ">
        <div className="windowContainer-grid w-full h-full grid grid-rows-8 grid-cols-4">
          <div className="windowContainer-topContainer col-start-1 col-end-5 row-start-1 row-end-2 border-black border-b-4">
            <div className="windowContainer-topContainer-elementsBox px-5 h-full w-full flex items-center gap-5">
              <div className="flex gap-2 text-3xl">
                <p>o</p>
                <p>o</p>
                <p>o</p>
              </div>

              <div className="flex gap-5 text-3xl font-medium">
                <p>{leftArrow}</p>
                <p>{rightArrow}</p>
              </div>

              <div className="windowContainer w-3/4 h-12 col-start-2 col-end-">
                <input
                  className=" w-full h-full box-border focus:outline-none px-5"
                  type="text"
                  name="searchBar"
                  id="searchBar"
                  placeholder="Rechercher"
                />
              </div>

              <div className="pixel-corners px-4 h-3/4 w-1/3 self-end flex items-center gap-4 ">
              <Image src={pageLogo[0]}  height={24} width={24} alt={pageLogo[1]}></Image>
              <h1>{mainTitle}</h1>
            </div>
            </div>
          </div>

          <div className="contentContainer row-start-2 row-end-9 col-start-1 col-end-5 h-full w-full p-6 overflow-auto">
          <Content/>
          </div>
        </div>
      </div>

      <div className="windowContainer absolute z-0 bg-black top-5 left-5 col-start-3 col-end-10 row-start-2 row-end-8"></div>
    </>
  );
}
