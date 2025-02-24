import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
// import Text from './components/Text';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import AnimeChar from './components/Live2DViewer';

const App = () => {
  
  return (
    <div className='bg-[#111215] bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Text /> */}
      <Work />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
