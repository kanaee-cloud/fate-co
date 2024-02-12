import React from 'react';
import Image from '../assets/profile.png';
import { FaGithub, FaYoutube, FaInstagram} from 'react-icons/fa'
import { AiFillCaretRight } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-5 lg:flex-row lg:items-center lg:justify-center lg:gap-x-16'>
        {/*image*/}
        <motion.div 
          className=' lg:flex flex-1 max-w-[320px] lg:max-w-[300px]'
          variants={fadeIn('down', 0.8)}
          whileInView={'show'}
          initial="show"
          viewport={{ once: false, amount: 0.7}}
          > 
          <img src={Image} alt="" width={[500]} height={[500]}/>
        </motion.div>
        {/*text*/}
        <div className='flex-1 text-center lg:text-left'>
          <motion.h1 
            className='lg:text-[90px] text-[3.5rem] leading-[0.8] lg:flex lg:mb-10 mb-10 gap-x-3 font-bold font-tertiary'
            variants={fadeIn('up', 0.3)}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            >
            <TypeAnimation sequence={[
              'Hello',
              2000,
              'こんにちは',
              2000,
              'Hallo',
              2000,
              'Bonjour',
              2000,
              'Hola',
              2000,
            ]}
            speed={50}
            className='text-[#4F48EC]'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.h1>
          <motion.span 
            className='lg:text-[90px] text-[3.5rem] text-gradient font-tertiary'
            variants={fadeIn('up', 0.3)}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            >I'm Arsal
          </motion.span>
         
        {/* socials */}
        <motion.div 
          className='icon mt-10 flex text-[20px] gap-x-10 max-w-max mx-auto lg:mx-0 text-[#4F48EC]'
          variants={fadeIn('up', 0.7)}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}
          >
          <a href="">
            <FaYoutube />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </motion.div>
        </div>
        
      </div>
    </div>
  </section>
  );
};

export default Banner;
