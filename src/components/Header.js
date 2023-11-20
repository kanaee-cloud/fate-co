import React from 'react';


const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href="#" className='font-bold font-primary text-[2rem]'>
        Fate<span className='text-[#F9D949]'>.co</span>
        </a>
        {/* button */}
        <button className='btn btn-sm font-primary font-semibold'>LOGIN</button>
      </div>
    </div>
  </header>
  );
};

export default Header;
