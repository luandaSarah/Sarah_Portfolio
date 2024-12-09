import Navbar from "./Components/Navbar";
import MainTitleContainer from "./Components/MainTitleContainer";
export default function Home() {
  return (
<div id="home" className=" rounded-3xl bg-black bg-opacity-30 col-start-2 col-end-6 row-start-1 row-end-6" >
  <div className="grid grid-cols-3 grid-rows-4 w-full h-full">
  <MainTitleContainer/>
  </div>
</div>
  );
}
 