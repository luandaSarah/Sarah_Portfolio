"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [meLogo, setMeLogo] = useState("/me.png");
  const [projectsLogo, setProjectsLogo] = useState("/projects.png");
  const [contactLogo, setContactLogo] = useState("/contact.png");

  const MeHoverHandlerIn = () => {
    setMeLogo("/me-pink.png");
  };
  const MeHoverHandlerOut = () => {
    setMeLogo("/me.png");
  };

  const ProjectsHoverHandlerIn = () => {
    setProjectsLogo("/projects-pink.png");
  };

  const ProjectsHoverHandlerOut = () => {
    setProjectsLogo("/projects.png");
  };

  const contactHoverHandlerIn = () => {
    setContactLogo("/contact-pink.png");
  };

  const contactHoverHandlerOut = () => {
    setContactLogo("/contact.png");
  };

  return (
    <nav className="pt-4 col-start-1 col-end-3 row-start-2 row-end-8 flex justify-center text-xl">
      <div className="flex flex-col  gap-8  align-center  text-blackColor">
        <Link
          href={"./"}
          className=" flex  gap-2 items-center flex flex-col hover:text-primaryColor"
          onMouseEnter={MeHoverHandlerIn}
          onMouseLeave={MeHoverHandlerOut}
        >
          <Image
            id="meLogo"
            src={meLogo}
            width={100}
            height={100}
            alt="logo a propos"
          ></Image>
          <p>A propos</p>
        </Link>
        <Link
          href={"./projects"}
          className="flex  gap-2 items-center  flex flex-col hover:text-primaryColor"
          onMouseEnter={ProjectsHoverHandlerIn}
          onMouseLeave={ProjectsHoverHandlerOut}
        >
          <Image
            id="projectsLogo"
            src={projectsLogo}
            width={50}
            height={50}
            alt="logo mes projets"
          ></Image>
          <p>Mes Projets</p>
        </Link>
        <Link
          href={"./contact"}
          className="flex  gap-2 items-center  flex flex-col hover:text-primaryColor"
          onMouseEnter={contactHoverHandlerIn}
          onMouseLeave={contactHoverHandlerOut}
        >
          {" "}
          <Image
            id="contactLogo"
            src={contactLogo}
            width={50}
            height={50}
            alt="logo me contacter"
          ></Image>
          <p>Me Contacter</p>
        </Link>
      </div>
    </nav>
  );
}
