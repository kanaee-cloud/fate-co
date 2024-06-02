import React from 'react'
import { FaYoutube, FaInstagram, FaSpotify} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className='flex items-center bg-footer bg-cover'>
        <div className='container mx-auto mb-32'>
          <div className='text-center mt-5 text-[1rem]'>
              <h1 className='font-primary font-thin'>Ilustration by</h1>
              <span className='font-primary text-[2rem] text-gradient'>Daisuke Richard</span>
              <p>From X </p>
              <h1 className='font-primary font-thin'>Follow my Social Media</h1>
          </div>
          <div className='flex justify-center mt-5 gap-x-9 '>
            <FaInstagram size={23} className='fill-yellow-400'/>
            <FaYoutube size={25} className='fill-yellow-400'/>
            <FaSquareXTwitter size={25} className='fill-yellow-400'/>
            <FaSpotify size={25} className='fill-yellow-400'/>
          </div>
          <div className='flex justify-center gap-x-9 font-primary opacity-30 mt-10'>
            ©2023 | saltoru
          </div>
        </div>
    </section>
  )
}

export default Footer