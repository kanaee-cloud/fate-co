import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Text from "./components/Text";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulasi loading selama 2 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#111215] bg-no-repeat bg-cover overflow-hidden">
      {loading ? (
        <motion.div
          className="h-screen flex justify-center items-center text-white text-2xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
         <Loading />
        </motion.div>
      ) : (
        <>
          <Header />
          <Banner />
          <Nav />
          <About />
          <Work />
          <Text />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
