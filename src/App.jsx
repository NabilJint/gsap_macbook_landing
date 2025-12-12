import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductViewer from "./Components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./Components/Showcase";
import Performance from "./Components/Performance";
import Features from "./Components/Features";
import Highlights from "./Components/Highlights";
import Footer from "./Components/Footer";

gsap.registerPlugin(ScrollTrigger);
// Prevent GSAP from trying to fix 100vh for mobile
ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,resize" });

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
