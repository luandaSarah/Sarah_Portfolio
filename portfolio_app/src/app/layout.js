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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        </style>
        <script src="https://kit.fontawesome.com/5c9555d31b.js" crossorigin="anonymous"></script>
      </head>
      <body className="w-screen h-screen grid grid-cols-5 grid-rows-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
