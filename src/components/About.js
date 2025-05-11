
import { BsBriefcase } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const About = () => {
  // const [inViewRef, inView] = useInView({
  //   threshold: 0.5,
  // });

  return (
  <section className="" id="about">
     <div className="">
        <h1 className="text-2xl mb-5 font-semibold flex items-center gap-x-2">
          <CiCircleInfo size={30} className="opacity-70"/>
          About Me
          </h1>
        <h2 className="text-[16px] text-justify opacity-70 font-light">
         My career trajectory begins as a Frontend Developer, where I intend to utilize my proficiency in React, Vue.js, and Next.js to build innovative web applications. I am proactive in seeking opportunities for professional development and aim to steadily advance my career by taking on increasing responsibilities and contributing to more significant projects. 
        </h2>
      </div>
      <div>
        <h3 className="text-xl font-medium flex items-center gap-x-3 glassmorphism px-3 py-2 mt-10">
          <BsBriefcase size={20} className="opacity-70" />
          Work Experience
        </h3>
        <p className="text-sm opacity-70 mt-6">Career Detail</p>
      </div>
  </section>
  )
};

export default About;
