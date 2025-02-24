import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import { useState } from "react";
import { IoMdNavigate } from "react-icons/io";

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [bgStyle, setBgStyle] = useState(
    <div class="relative h-full w-full bg-black">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
    </div>
  );
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">{bgStyle}</div>

      <div className=" container mx-auto px-8">
        <Navbar setBgStyle={setBgStyle} />
        <div
          onClick={scrollToTop}
          className="py-1 fixed  bg-gradient-to-r from-blue-100 to-transparent top-[80vh] left-[80vw] lg:top-[90vh] lg:left-[90vw] text-black text-5xl rounded-full flex justify-center w-14  "
        >
          {" "}
          <IoMdNavigate />{" "}
        </div>
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
