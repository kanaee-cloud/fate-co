import React from "react";
import Image from "../assets/bg-profile.jpg";
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[125vh] lg:min-h-[80vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-center lg:gap-x-16">
          {/*text*/}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col">
              <motion.div
                className="flex justify-center lg:justify-start gap-x-2 font-semibold font-primary"
                variants={fadeIn("up", 0.3)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <p className="text-4xl lg:text-[4.5rem] text-gradient font-primary">Hello!</p>
                <p className="text-lg lg:text-xl opacity-40 mt-3 lg:mt-6 hover:underline transition-all decoration-accent">I'm Arsal</p>
              </motion.div>
              <motion.div
                className="flex justify-center lg:justify-start gap-x-2 mt-5  font-primary"
                variants={fadeIn("up", 0.3)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <p className="opacity-80">I'm a</p>
                <TypeAnimation
                    sequence={[
                      "Web Developer",
                      2000,
                      "Front-end Developer",
                      2000,
                      "UI/UX Designer",
                      2000,
                      "Weebs",
                      2000,
                      
                    ]}
                    speed={50}
                    className="text-accent"
                    wrapper="span"
                    repeat={Infinity}
                  />
              </motion.div>
            </div>

            {/* socials */}
            <p className="font-primary text-sm mt-5">Find me on</p>
            <motion.div
              className="icon mt-5 flex  text-[20px] gap-x-5 max-w-max mx-auto lg:mx-0  text-accent"
              variants={fadeIn("up", 0.7)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              
              <a href="" className="flex items-center gap-x-2 background-gray rounded-md px-4 py-2">
                <FaYoutube />
                <p className="text-sm font-semibold font-primary">
                  YouTube
                </p>
              </a>
              <a href="https://github.com/kanaee-cloud" className="flex items-center gap-x-2 background-gray rounded-md px-4 py-2">
                <FaGithub />
                <p className="text-sm font-semibold font-primary">
                  Github
                </p>
              </a>
              <a href="https://instagram.com/_arsalnaufal" className="flex items-center gap-x-2 background-gray rounded-md px-4 py-2">
                <FaInstagram />
                <p className="text-sm font-semibold font-primary">
                  Instagram
                </p>
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div
            className=" lg:flex flex-1 mx-auto background-glass max-w-[320px] lg:max-w-[300px]"
            variants={fadeIn("down", 0.8)}
            whileInView={"show"}
            initial="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={Image}
              alt=""
              width={[500]}
              height={[500]}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
