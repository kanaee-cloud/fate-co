import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name : 'Calculator-chan',
    description : 'Mini calculator web application using html, css, and javascript.',
    link : 'Learn more'
  },
  {
    name : 'Akiyama Cafe',
    description : 'E-commerce cafe web using html, css and javascript with manga style.',
    link : 'Learn more'
  },
  {
    name : 'RyuuziCorps',
    description : 'Imagination Corporation using html, css and bit javascript with manga style.',
    link : 'Learn more'
  },
]


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text & image*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}} 
            className='flex-1 h-[460px] bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'>
            <h2 className='text-[3rem] mb-4 font-bold font-secondary text-[#4F48EC]'>
              私がやること？
            </h2>
            <h3 className='max-w-[455px] mb-16 font-tertiary'>
              This is my little project (i did it by myself)
            </h3>
            <button className='btn btn-sm'>More</button>
          </motion.div>
          {/*service*/}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}} 
            className='flex-1'>
            {/*services list*/}
            <div>
              {services.map((services, index) => {
                const {name, description, link} = services;
                return (
                <div 
                  className='border-b border-[#75BFEC]/70 h-[146px] mb-[38px] flex'
                  key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-tertiary font-semibold mb-6'>{name}</h4>
                    <p className='font-tertiary leading-tight'>{description}</p>
                  </div>
                  <div className='font-tertiary flex flex-col flex-1 items-end'>
                    <a href="" className='btn w-9 h-9 mb-[42px] flex justify-center pt-[6px]'>
                      <BsArrowUpRight />
                    </a>
                    <a href="" className='text-gradient font-tertiary text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
