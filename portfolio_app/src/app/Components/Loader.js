import React from "react";
import WindowContainer from "../Components/WindowContainer";

export default function Loader({ page: page = null }) {
  const appLoader = () => {
    return (
      <>
        <div className="windowContainer  p-x fullWindow bg-bgColor w-full h-full lg:w-1/3 lg:h-1/3">
          <div className="windowContainer-grid w-full h-full grid lg:grid-rows-8 lg:grid-cols-4">
            <div className="windowContainer-topContainer hidden lg:block col-start-1 col-end-5 row-start-1 row-end-2 border-blackColor border-b-4">
              <div className="flex gap-2 text-3xl text-blackColor ">
                <p>o</p>
                <p>o</p>
                <p>o</p>
              </div>
            </div>

            <div className="contentContainer  lg:mb-0 flex flex-col py-10  items-center justify-center row-start-1 lg:row-start-2 row-end-9 col-start-1 col-end-5 h-full w-full lg:py-6 lg:px-32 lg:overflow-auto  lg:inset-0 bg-tertiaryColor bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]  ">
              <div className="type-animation loader text-5xl font-medium text-secondaryColor">
                <h1>Loading...</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const contactLoader = () => {
    return (
      <div className="contentContainer  lg:mb-0 flex flex-col py-10  items-center justify-center row-start-1 lg:row-start-2 row-end-9 col-start-1 col-end-5 h-full w-full lg:py-6 lg:px-32 lg:overflow-auto  lg:inset-0 bg-tertiaryColor bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]  ">
        <div className="type-animation loader text-5xl font-medium text-secondaryColor">
          <h1>Envoie en cours...</h1>
        </div>
      </div>
    );
  };

  return <>{page === "contact" ? contactLoader() : appLoader()} </>;
}
