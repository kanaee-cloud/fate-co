import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text*/}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1 justify-start items-center'>
            <div>
              <h4 className='text-xl text-gradient uppercase font-medium mb-2 tracking-wide'>参加する</h4>
              <h2 className='font-primary font-bold text-[40px] lg:text-[80px] leading-none mb-12'>Join the<br />club!</h2>
            </div>
          </motion.div>
          {/*form*/}
          <motion.form 
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1 glassmorphism flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-gradient transition-all'
              type="text"
              placeholder='Your Name'
              />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-gradient transition-all'
              type="text"
              placeholder='Email'
              />
            <textarea 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-gradient transition-all resize-none mb-12'
              placeholder='Message'
              >
            </textarea>
            <button className='btn btn-lg'>Submit</button>
          </motion.form>
        </div>
      </div>
    </section> 
    );
};

export default Contact;
