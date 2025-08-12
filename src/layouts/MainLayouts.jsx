import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground/ParticleBackground";
import { div } from "motion/react-client";
import ScrollTop from "../components/scrollToTop/ScrollTop";

const MainLayouts = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <ParticleBackground />
      </div>
      <header className="w-11/12 mx-auto sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="w-11/12 mx-auto">
        <Footer></Footer>
      </footer>
      <ScrollTop></ScrollTop>
    </div>
  );
};

export default MainLayouts;
