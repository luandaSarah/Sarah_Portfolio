import React from "react";
import "./componentsStyle/windowContainer.css"


export default function WindowContainer() {
  return (
    
    <>
      <div className="windowContainer col-start-2 col-end-6 row-start-2 row-end-8  ">
        <div className="w-full h-full grid grid-rows-5 grid-cols-4">
            <div className="col-start-1 col-end-5 row-start-1 row-end-2 border-black border-b-4">
                <div className="buttonContainer flex gap-2 text-3xl">
                    <p>o</p>
                    <p>o</p>
                    <p>o</p>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
      </div>


       </>  
  
  );
}
