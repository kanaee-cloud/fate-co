import React from 'react';
import { FaFilm } from "react-icons/fa";


const Header = () => {
  const urlBtn = () =>{
    window.location.href = 'https://yukinime.vercel.app';
  }

  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href="#" className='font-normal font-primary text-[2rem]'>
        sal<span className='text-[#F9D949]'>toru.</span>
        </a>
        {/* button */}
        <button 
          className='btn btn-sm font-primary'
          onClick={urlBtn}
          >
            <FaFilm size={20}/>
          </button>
      </div>
    </div>
  </header>
  );
};

export default Header;
