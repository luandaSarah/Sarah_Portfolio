"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [meLogo, setMeLogo] = useState("/icones/me.png");
  const [projectsLogo, setProjectsLogo] = useState("/icones/projects.png");
  const [contactLogo, setContactLogo] = useState("/icones/contact.png");

//   const MeHoverHandlerIn = () => {
//     setMeLogo("/me-pink.png");
//   };
//   const MeHoverHandlerOut = () => {
//     setMeLogo("/me.png");
//   };

//   const ProjectsHoverHandlerIn = () => {
//     setProjectsLogo("/projects-pink.png");
//   };

//   const ProjectsHoverHandlerOut = () => {
//     setProjectsLogo("/projects.png");
//   };

//   const contactHoverHandlerIn = () => {
//     setContactLogo("/contact-pink.png");
//   };

//   const contactHoverHandlerOut = () => {
//     setContactLogo("/contact.png");
//   };

  return (
    <nav className=" lg:pb-4 col-start-1 sticky bottom-0 z-30 h-full flex items-end justify-center  lg:z-0 lg:static   col-end-11  row-start-8 row-end-9 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-8 flex  justify-center text-xl">
    <div className="  py-8   lg:py-0 h-2/3 lg:h-full w-2/3 lg:w-full bg-bgColor navbar windowContainer   text-xl">
      <div className="flex flex-row lg:flex-col lg:gap-8 md:px-10 lg:px-0 w-full h-full items-center lg:justify-center justify-around  text-blackColor">
        <Link
          href={"/"}
          className=" flex  gap-2 items-center  flex-col font-semibold hover:text-primaryColor"
          // onMouseEnter={MeHoverHandlerIn}
          // onMouseLeave={MeHoverHandlerOut}
        >
          <Image
            id="meLogo"
            src={meLogo}
            width={80}
            height={80}
            alt="logo a propos"
          ></Image>
          <p className="hidden lg:block">A propos</p>
        </Link>
        <Link
          href={"/projects"}
          className="flex  gap-2 items-center   flex flex-col font-semibold hover:text-primaryColor"
          // onMouseEnter={ProjectsHoverHandlerIn}
          // onMouseLeave={ProjectsHoverHandlerOut}
        >
          <Image
            id="projectsLogo"
            src={projectsLogo}
            width={50}
            height={50}
            alt="logo mes projets"
          ></Image>
          <p className="hidden lg:block">Mes Projets</p>
        </Link>
        <Link
          href={"/contact"}
          className="flex  gap-2 items-center  flex flex-col font-semibold hover:text-primaryColor "
          // onMouseEnter={contactHoverHandlerIn}
          // onMouseLeave={contactHoverHandlerOut}
        >
    
          <Image
            id="contactLogo"
            src={contactLogo}
            width={50}
            height={50}
            alt="logo me contacter"
          ></Image>
          <p className="hidden lg:block">Me Contacter</p>
        </Link>
      </div>
    </div>
    </nav>
  );
}
