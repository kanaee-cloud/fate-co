import React from "react";
import Image from "../assets/service.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Text = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center"  id='services'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:justify-center lg:gap-x-16">
          <motion.div
            className=" lg:flex flex-1 max-w-[320px] lg:max-w-[300px]"
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={Image} alt="" width={[500]} height={[510]} />
          </motion.div>
          <div className="flex-1 text-center lg:text-left">
          <motion.span 
            className='lg:text-[90px] text-[3.5rem] text-gradient font-tertiary'
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            >My project
          </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
