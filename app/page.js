import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster/>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <GetInTouch />
      <Footer/>
    </>
  );
}
