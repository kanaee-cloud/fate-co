import React from "react";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import Image from "../assets/about.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className=" flex-1 lg:flex gap-x-10 justify-center">
          {/*text*/}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 lg:mt-0"
          >
            <span className="font-tertiary text-gradient  text-[2.5rem] lg:text-[4rem]">
              About
            </span>
            <div className="glassmorphism font-primary font-extralight mt-5 text-[15px]">
              <p>
                I'm Front-end Developer. I'd like to design a web or development
                a web. <br /> I can use figma too{" "}
              </p>
              <p className="font-semibold">What can i do?</p>
              <div className="flex gap-x-4">
                
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "I'm good at React",
                    1000,
                    "I'm good at Javascript",
                    1000,
                    "I'm good at Vue",
                    1000,
                    "I'm good at HTML",
                    1000,
                    "I'm good at CSS",
                    1000,
                    "I'm good at MySQL",
                    1000,
                    "I'm good at MongoDB",
                    1000,
                    "I'm good at Laravel",
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </div>
            </div>
            {/*stats*/}
            <div className="flex gap-x-6 gap-y-10 lg:gap-x-10 mb-12 mt-12">
              <div>
                <div className="text-[40px] text-gradient mb-2">
                  <CountUp start={0} end={17} duration={15} />
                </div>
                <div className="text-sm tracking-[2px] font-tertiary">
                  Years Old
                </div>
              </div>
              <div>
                <div className="text-[40px] text-gradient mb-2">
                  <CountUp start={0} end={31} duration={15} />
                </div>
                <div className="text-sm tracking-[2px] font-tertiary">
                  Portfolio
                </div>
              </div>
              <div>
                <div className="text-[40px] text-gradient mb-2">
                  <CountUp start={0} end={110} duration={15} />
                </div>
                <div className="text-sm tracking-[2px] font-tertiary">
                  Waifu
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio?
              </a>
            </div>
          </motion.div>
          {/*img*/}
          <motion.div
            className=" lg:flex flex-1 max-w-[320px] lg:max-w-[300px]"
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={Image} alt="" width={[500]} height={[500]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
