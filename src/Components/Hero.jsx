import profilepic from "../assets/raviKumarProfile (1).webp";
import { HERO_CONTENT } from "../assets/constants/index";
import { motion } from "framer-motion";

const containervarients = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2  ">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilepic}
              alt="Ravi Kumar"
              width={650}
              height={650}
              className="border border-stone-900 rounded-[50px]"
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containervarients}
            className=" flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVarients}
              className="pb-2 text-4xl tracking-tighter lg:text-7xl"
            >
              Ravi Kumar
            </motion.h2>
            <motion.span
              variants={childVarients}
              className=" bg-gradient-to-r from-stone-300 to-stone-900 text-transparent bg-clip-text text-3xl  tracking-tight"
            >
              Front-End Developer{" "}
            </motion.span>
            <motion.p
              variants={childVarients}
              className="my-2 max-w-lg  py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVarients}
              href="/Front_end_Internship.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 "
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
