import React from "react";

import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import dark from "../assets/dark-theme-svgrepo-com.svg";
import dark2 from "../assets/bullseye-gradient.svg";
import Mail from "../assets/email.png";
import logo from "../assets/Logo.png";
import { useState } from "react";

const Navbar = ({ setBgStyle }) => {
  const [imgbtn, setImgbtn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav className="flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 w-[50%]  sm:w-[40%] items-center ">
        <a href="#" aria-label="home">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full h-10 w-[70%] sm:w-[100%] mx-2"
          />
        </a>
      </div>
      <div className="flex lg:m-8 m-0  items-center justify-center lg:gap-4 gap-3 text-2xl">
        <button
          onClick={() => {
            if (darkMode) {
              setBgStyle(
                <div class="relative h-full w-full bg-black">
                  <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
                </div>
              );
              setImgbtn(true);
              setDarkMode(false);
            } else {
              setBgStyle(
                <div class="relative h-full w-full bg-slate-950">
                  <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                  <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                </div>
              );
              setDarkMode(true);
              setImgbtn(false);
            }
          }}
        >
          {" "}
          {imgbtn && (
            <img
              src={dark}
              className="lg:rounded-full rounded-[30px] lg:w-[27px] w-[20px] border border-white "
              alt="Dark Mode"
            />
          )}
          {!imgbtn && (
            <img
              src={dark2}
              alt="Dark Mode"
              className="lg:rounded-full rounded-[30px] lg:w-[27px] w-[20px] border border-white "
            />
          )}
        </button>
        <a
          href="https://www.linkedin.com/in/ravi-kumar-78016026a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord Profile"
        >
          <FaDiscord />
        </a>
        <a
          href="https://github.com/Rav9jsn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvNPWwSCMCzlzHCMnWXnggwjxChmhWJtZbTnmnNfdmDjLZsDxVZKBfhcrKZvxDTfhtTl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Profile"
        >
          <img
            src={Mail}
            alt="Email "
            className="bg-white"
            width={22}
            height={9}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
