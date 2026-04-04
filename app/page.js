"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";
import Loader from "./components/UI/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  ) : (
    <>
      <Toaster />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Experience />
      {/* <Service /> */}
      <GetInTouch />
      <Footer />
    </>
  );
}
