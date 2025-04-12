import { RiReactjsLine } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
        >
          <RiReactjsLine className="text-cyan-400 text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(1.5)}
          className="p-4"
        >
          <IoLogoHtml5 className="text-orange-500  text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3)}
          className="p-4"
        >
          <FaCss3 className="text-[#2D53E5] text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(6)}
          className="p-4"
        >
          <SiTailwindcss className="text-cyan-400 text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2)}
          className="p-4"
        >
          <IoLogoJavascript className="text-yellow-400  text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(6)}
          className="p-4"
        >
          <FaBootstrap className="text-[#8819FD] text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(4)}
          className="p-4"
        >
          <SiRedux className="text-[#7A50BE] text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
