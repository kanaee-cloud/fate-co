import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name : 'Akiyama Cafe',
    description : 'Orang jawa minum tolak jawa',
    link : 'Learn more',
    url:'https://akiyama-cafe.vercel.app',
  },
  {
    name : 'Yukinime',
    description : 'Orang jawa minum tolak jawa',
    link : 'Learn more',
    url:'https://yukinime.vercel.app'
  },
  {
    name: 'Calculator',
    description: 'Orang jawa minum tolak jawa',
    link: 'Learn More',
    url: 'https://calculator-chan.vercel.app'
  }
]


const Services = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/*text & image*/}
          
        <div className='flex flex-col lg:flex-row lg:gap-x-10'>
          {/*service*/}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}} 
            className='flex-1'>
            {/*services list*/}
            <div>
              {services.map((services, index) => {
                const {name, description, link, url, language} = services;
                return (
                <div 
                  className='border-b border-[#75BFEC]/70 h-[146px] mb-[38px] flex'
                  key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[15px] lg:text-[2rem] text-gradient tracking-wider font-tertiary font-semibold mb-6'>{name}</h4>
                    <p className='text-[14px] font-primary leading-tight'>{description}</p>
                  </div>
                  <div className='font-tertiary flex flex-col flex-1 items-end'>
                    <a href={url} className='btn w-9 h-9 mb-[42px] flex justify-center pt-[6px]'>
                      <BsArrowUpRight />
                    </a>
                    <a href="" className='text-gradient font-tertiary text-sm'>
                      {link}
                    </a>
                    {language}
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
