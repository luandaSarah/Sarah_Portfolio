'use client'
import React, {useEffect} from "react";
import WindowContainer from "./Components/WindowContainer";
import Image from "next/image";

export default function Home() {

  const PageContent = () => {

    return (
      <>
      <div className="presentation-container flex">

        <div className="nameAbout-container">
          <h1 className="">
            A PROPOS DE 
            <br/>
            <span>SARAH LUANDA</span>
          </h1>
          <h2>
            Bienvenue sur mon portfolio !
          </h2>
        </div>

        <div className="pp-container">
          <Image 
          id="pp"
          src={"/profil-picture.jpeg"} 
          height={400}
          width={400}
          alt={"Photo de Sarah"}
          >

          </Image>
        </div>
      </div>
      </>
      
    )

  }

  return (
    <>
      <WindowContainer content={PageContent} />
    </>
  );
}
