import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/aku-prima.jpg';
import Img2 from '../assets/orbit.jpg';
import Img3 from '../assets/web-assessment.png';



const Work = () => {

  const toGithub = () => {
    window.open('https://github.com/kanaee-cloud');
  }

  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/*text*/}
            <div>
              <span className='text-[2.5rem] lg:text-[4rem] font-tertiary tight text-accent font-semibold'>
                My Project
              </span>
              <p className='glassmorphism max-w-sm mb-14 font-primary'>
                 Proyek yang saya kerjakan saat ini
              </p>
              <button onClick={toGithub} className='btn btn-sm'>Lihat semua proyek</button>
            </div>
            {/*image*/}
            <div 
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'> 
              {/*overlay*/}
              <div 
                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/*img*/}
              <img 
                className='group-hover:scale-125 transition-all duration-500' src={Img1}
                alt=''
                />
              {/*pretitle*/}
              <div 
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                {/* <span 
                  className='text-gradient'
                  >
                    Akuprim
                </span> */}
              </div>
              {/*title*/}
              <div 
                className='absolute -bottom-full left-8 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='font-primary text-gradient'>Akuprim</span> <br />
                <span className='text-sm text-justify text-white font-primary font-semibold'>Berkontribusi sebagai Front-end Developer pada pengembangan platform daring Akuprim yang menyederhanakan pembayaran pajak, membantu konsultan pajak menghemat waktu dan mengurangi risiko kesalahan.</span>
              </div>
              {/*pretitle*/}
              <div>
                
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}} 
            className='flex-1 flex flex-col gap-y-10'>
            {/*image*/}
            <div 
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'> 
              {/*overlay*/}
              <div 
                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/*img*/}
              <img 
                className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
              {/*pretitle*/}
              <div 
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                {/* <span 
                  className='text-gradient'
                  >
                   Learning Management System
                </span> */}
              </div>
              {/*title*/}
              <div 
                className='absolute -bottom-full left-8 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='font-primary text-gradient'>LMS ORBIT</span> <br />
                <span className='text-sm text-white font-primary '>Bertanggung jawab atas pengembangan situs web LMS untuk eskul Orbit dari sisi Front-End, memastikan tampilan yang menarik, user-friendly, dan responsif.</span>
              </div>
              {/*pretitle*/}
              <div>
                
              </div>
            </div>
            <div 
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'> 
              {/*overlay*/}
              <div 
                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/*img*/}
              <img 
                className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
              {/*pretitle*/}
              <div 
                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                {/* <span 
                  className='text-gradient'
                  >
                    Assessment Web
                </span> */}
              </div>
              {/*title*/}
              <div 
                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='font-primary text-gradient'>Assessment Web</span> <br />
                <span className='text-sm font-primary text-white'>Membangun platform assessment daring untuk memfasilitasi proses rekrutmen karyawan dan identifikasi kandidat terbaik untuk perusahaan.</span>
              </div>
              {/*pretitle*/}
              <div>
                
              </div>
            </div>
          </motion.div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
