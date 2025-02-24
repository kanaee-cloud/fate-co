import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name : 'TOEIC',
    description : 'Meraih skor 510 pada tes TOEIC yang diselenggarakan oleh Educational Testing Service, menunjukkan kemampuan bahasa inggris yang cukup baik.',
    // language: 'HTML CSS Javascript',
    // link : 'Learn more',
    url:'https://akiyama-cafe.vercel.app',
    img: ""
  },
  {
    name : 'Fundamental Javascript',
    description : 'Menyelesaikan pelatihan Front-end Fundamental Javascript dari Dicoding pada tahun 2025, yang berfokus pada pengembangan kemampuan dasar Javascript untuk front-end web.',
    // language: 'React Axios Tailwind CSS',
    // link : 'Learn more',
    url:'https://yukinime.vercel.app',
    img: ""
  },
  {
    name: 'UKBI',
    description: 'Memperoleh skor 606 pada tes uji kemahiran berbahasa Indonesia yang diselenggarakan Badan Pengembangan dan Pembinaan Bahasa pada tahun 2024. Skor tersebut menunjukan bahwa saya memiliki predikat unggul dan memadai dalam berkomunikasi menggunakan Bahasa Indonesia.',
    // language: 'Vue JS Tailwind CSS',
    // link: 'Learn More',
    url: 'https://neo-kokeshi.vercel.app',
    img: ""
  }
]


const Services = () => {
  return (
    <section className='section mb-14' id='services'>
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
                const {name, description, url} = services;
                return (
                <div 
                  className='border-b border-[#75BFEC]/70 h-[146px] mb-6 flex'
                  key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[15px] lg:text-[2rem] text-gradient  font-tertiary font-semibold mb-4'>{name}</h4>
                    <p className='text-sm font-primary leading-tight'>{description}</p>
                  </div>
                  <div className='font-tertiary flex flex-col flex-1 items-end'>
                    <a href={url} className='btn w-9 h-9 mb-7 flex justify-center pt-[6px]'>
                      <BsArrowUpRight />
                    </a>
                    {/* <a href="" className='text-gradient font-tertiary text-sm'>
                      {link}
                    </a> */}
                  </div>
                </div>
                );
              })}
            </div>
            {/* <div>
              <a href="https://github.com/kanaee-cloud" className='btn btn-lg p-3'>
              View Another Project on My Github 
              </a>
              
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
