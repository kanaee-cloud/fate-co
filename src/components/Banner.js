import React from 'react';
import Image from '../assets/profile.jpg';
import { FaGithub, FaYoutube, FaInstagram} from 'react-icons/fa'
import { AiFillCaretRight } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/*text*/}
        <div className='flex-1 text-center lg:text-left'>
          <motion.h1 
            className='text-[50px] leading-[0.8] lg:flex lg:mb-10 gap-x-3 font-bold font-tertiary'
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            >
            こん
            <span className='text-gradient font-tertiary'>にちは !</span>
           
          </motion.h1>
          <motion.div 
            className='mb-6 relative text-[20px] top-[10px] lg:top-0 font-semibold font-primary uppercase leading-[1]'
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            >
            <span className='mr-2 font-primary font-semibold'>I am</span>
            <TypeAnimation sequence={[
              'Designer',
              2000,
              'Developer',
              2000,
              'Weebs',
              2000,
            ]}
            speed={50}
            className='text-[#4F48EC]'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
            className='font-tertiary mb-8 max-w-lg mx-auto lg:mx-0'
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            >
              My name is Arsal Nawfal. I'm Web Designer and Anime Enthusiasm.
          </motion.p>
          <motion.div 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            >
          <button className='btn btn-lg btn-link '>
            Follow me
          </button>
          <a 
            href="" 
            className='text-gradient border-solid border-b-2 border-[#4F48EC]'
            >
              My Project
            </a>
            <AiFillCaretRight
             className='relative lg:left-[-14px] lg:top-[3px] text-[#4F48EC]'
            />
        </motion.div>
        {/* socials */}
        <motion.div 
          className='icon flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-[#4F48EC]'
          variants={fadeIn('up', 0.7)}
          initial="hidden"
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
        {/*image*/}
        <motion.div 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          variants={fadeIn('down', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}
          > 
          <img src={Image} alt="" width={[500]} height={[500]}/>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
