'use client' 
import React, { useState, useEffect }  from "react";

export default function MainTitleContainer() {

    const [mainTitle, setMainTitle] = useState("");

    const getTitle = () => {

        useEffect(() => {
            var fullPathName = window.location.pathname;
            var splitPathName = fullPathName.split("/")[1];
            // console.log(splitPathName);
            if (splitPathName == "") {
                setMainTitle("My Name");
            } else if (splitPathName == "playlist") {
                setMainTitle("Mes Playlists");
            } else if (splitPathName == "contact") {
                setMainTitle("Me Contacter");
            }
    
        }, []);

    }
 getTitle();

    
    return (
    <div
      id="mainTitleContainer"
      className=" rounded-t-3xl bg-black bg-opacity-50 col-start-1 col-end-6 row-start-1 row-end-2 flex flex-col justify-center pl-10"
    >
    <h1  className="text-whiteColor text-5xl font-bold tracking-wide">
                {mainTitle} 
            </h1>
    </div>
  );
}
