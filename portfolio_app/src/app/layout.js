import "./globals.css";
import Navbar from "./Components/Navbar";
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
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        </style>
        {/* <script src="https://kit.fontawesome.com/5c9555d31b.js" crossOrigin="anonymous"></script> */}
      </head>
      <body className=" bg-tertiaryColor lg:bg-bgColor w-screen h-screen " >
        <main className=" lg:px-4  w-full h-full grid lg:grid-cols-10 lg:grid-rows-8 md:gap-x-4">
        <Navbar />
        {children}
        </main>
        
      </body>
    </html>
  );
}
