// import React, {useEffect} from "react";
import Navbar from "./Components/Navbar";
import MainTitleContainer from "./Components/MainTitleContainer";
export default function Home() {
  return (
<div id="home" className=" border-2 border-blackColor rounded-3xl col-start-2 col-end-6 row-start-1 row-end-6" >
  <div className="grid grid-cols-3 grid-rows-4 w-full h-full">
  <MainTitleContainer/>
  </div>
</div>
  );
}
 