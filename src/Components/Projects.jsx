import React from "react";
import { PROJECTS } from "../assets/constants/index";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" capitalize my-20 text-center text-4xl"
      >
        projetcs
      </motion.h2>
      {PROJECTS.map((data, index) => (
        <div key={index} className="mb-8  flex flex-wrap lg:justify-center ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/4"
          >
            <img
              src={data.image}
              alt={data.title}
              // heigth={650}
              width={350}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-xl  lg:w-3/4 "
          >
            <a
              target="_blank"
              href={data.link}
              rel="noopener noreferrer"
              className="mb-2  hover:animate-pulse duration-1000 hover:underline hover:text-[#DDDDD3] font-semibold text-2xl"
            >
              {data.title} <span className="text-blue-400">↗</span>
            </a>
            <p className="mb-4 text-stone-400 ">{data.description}</p>
            {data.technologies.map((tech, index) => (
              <span
                className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 "
                key={index}
              >
                {tech}
              </span>
            ))}

            <div className="mt-5">
              <a
                className="flex  gap-1 hover:text-blue-200 duration-200 items-center font-bold"
                target="_blank"
                href={data.github}
              >
                <FaGithub />
                <p>Code</p>
              </a>
            </div>
          </motion.div>
        </div>
      ))}
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className=" capitalize font-semibold leading-10 my-20 animate-bounce text-center text-3xl"
      >
        More projects loading! ⏳
      </motion.h2>
    </div>
  );
};

export default Projects;
