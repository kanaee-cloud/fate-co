import React from "react";
import Image from "../assets/last.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text*/}
          <motion.div
            className=" lg:flex flex-1 max-w-[320px] lg:max-w-[350px]"
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={Image} alt="" width={[500]} height={[500]} />
          </motion.div>
          {/*form*/}
          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 glassmorphism flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <span className="text-gradient font-tertiary text-[2rem]">
              Contact me!
            </span>
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-gradient transition-all"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-gradient transition-all"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-gradient transition-all resize-none mb-12"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-lg">Submit</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
