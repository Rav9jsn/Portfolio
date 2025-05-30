import { CONTACT } from "../assets/constants/index";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-10 text-center capitalize text-4xl "
      >
        Get In touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvNPWwSCMCzlzHCMnWXnggwjxChmhWJtZbTnmnNfdmDjLZsDxVZKBfhcrKZvxDTfhtTl"
          alt="email"
          target="_blank"
          className="border-b"
        >
          {" "}
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
