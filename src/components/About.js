import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from '../assets/about.jpg'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='glassmorphism flex-1 lg:flex gap-x-10 '>
          {/*img*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}} 
            className='about relative top-[-100px] lg:top-0 flex-1 bg-contain bg-no-repeat h-[340px] bg-top border-solid border-0'>
            <img src={Image} alt=""/>
          </motion.div>
          {/*text*/}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='mt-4 lg:mt-0'>
            <h2 className='h2 text-gradient font-secondary font-semibold'>私について</h2>
            <h3 className='h3 mb-4 font-tertiary'>
              I'm a student from Vocational Highschool 4 Bandung.
            </h3>
            <p className='mb-5 font-tertiary'>
              I love to watch anime and design a web or application, also i want to be a freelancer.
            </p>
            {/*stats*/}
            <div className='flex gap-x-6 gap-y-10 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] text-gradient mb-2'>
                  <CountUp start={0} end={16} duration={15} /> 
                </div>
                <div className='text-sm tracking-[2px] font-tertiary'>
                  Years Old
                </div>
              </div>
              <div>
                <div className='text-[40px] text-gradient mb-2'>
                  <CountUp start={0} end={6} duration={15} /> 
                </div>
                <div className='text-sm tracking-[2px] font-tertiary'>
                  Portfolio <br/>Project
                </div>
              </div>
              <div>
                <div className='text-[40px] text-gradient mb-2'>
                  <CountUp start={0} end={100} duration={15} /> 
                </div>
                <div className='text-sm tracking-[2px] font-tertiary'>
                  Waifu
                </div>
              </div>
              
            </div>
            <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contact</button>
                <a href="#" className='text-gradient btn-link'>My Portfolio?</a>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
