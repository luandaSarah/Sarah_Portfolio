import React from "react";
import "./componentsStyle/windowContainer.css"

let leftArrow = "<";
let rightArrow = ">";
export default function WindowContainer() {
  return (
    
    <>
      <div className="windowContainer col-start-2 col-end-6 row-start-2 row-end-8  ">
        <div className="w-full h-full grid grid-rows-8 grid-cols-4">
            <div className="col-start-1 col-end-4 row-start-1 row-end-2 border-black border-b-4">
                <div className=" h-full w-full flex items-center gap-5">
                    
                   <div className="pl-5 flex gap-2 text-3xl">
                   <p>o</p>
                    <p>o</p>
                    <p>o</p>
                    </div> 

                    <div className="flex gap-5 text-3xl font-medium">
                   <p>{leftArrow}</p>
                    <p>{rightArrow}</p>
                
                    </div> 

                    <div className="windowContainer w-96 h-12 col-start-2 col-end-">
                    <input className=" w-full h-full box-border focus:outline-none" type="text" name="searchBar" id="searchBar" placeholder="Rechercher"/>
                    </div>

                    
                </div>
                
                <div></div>
            </div>

            <div className="col-start-4 col-end-5 border-black rounded-lg border-b-0 border-4 h-2/3	 self-end"></div>
        </div>
      </div>


       </>  
  
  );
}
