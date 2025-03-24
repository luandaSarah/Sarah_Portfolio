import "./globals.css";
import Navbar from "./Components/Navbar";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Sarah's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        </style>
       <link rel="shorcut icon" href="/favicon.ico" />
  
      
      </head>
      <body className=" bg-tertiaryColor lg:bg-bgColor w-screen h-screen ">
        <main className=" lg:px-4  w-full h-full grid lg:grid-cols-10 lg:grid-rows-8 md:gap-x-4 overflow-x-hidden">
          <Navbar />

          {children}

          <Link
            href="https://github.com/luandaSarah"
            target="_blank"
            className="  sticky bottom-5 left-2 z-10   lg:flex lg:flex-col lg:justify-self-end lg:self-center lg:col-start-10  lg:col-end-11 lg:row-start-8 lg:row-end-9 lg:static"
          >
            <Image
              loading="lazy"
              id="meLogo"
              src={"/icones/github.webp"}
              width={40}
              height={40}
              alt="logo a propos"
            ></Image>
          </Link>
        </main>
      </body>
    </html>
  );
}
