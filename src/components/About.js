import React from "react";
import CountUp from "react-countup";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import Image from "../assets/bg-profile-2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const frameworks = [
  {
    name: "React",
    url: "https://reactjs.org/",
    imagesUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    imagesUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Laravel",
    url: "https://laravel.com/",
    imagesUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    name: "Tailwind",
    url: "https://tailwindcss.com/",
    imagesUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    imagesUrl: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/en/",
    imagesUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    url: "https://expressjs.com/",
    imagesUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
];

const About = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        {/* Profile Section */}
        <motion.div
          className="rounded-lg blue-gradient p-4 flex-1 lg:flex gap-x-10 justify-center"
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          {/* Image */}
          <motion.div
            className="lg:flex flex-1 max-w-[320px] lg:max-w-[300px]"
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={Image}
              alt=""
              width={300}
              height={200}
              className="rounded-full shadow-lg w-[20vh] h-[20vh] lg:h-full lg:w-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-10 lg:mt-8"
          >
            <div className="font-primary font-extralight mt-5 text-[15px]">
              <div className="flex flex-col text-justify gap-y-4">
                <h1 className="font-semibold text-2xl">About Me</h1>
                <p className="text-sm">
                  I'm a student of Vocational High School, with a focus on
                  building responsive websites. <br /> I like to use Javascript
                  as my programming language.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex gap-x-6 gap-y-10 lg:gap-x-10 mb-12 mt-12">
              <div className="flex items-center gap-x-2">
                <div className="text-sm">
                  <CountUp start={0} end={17} duration={15} />
                </div>
                <div className="text-sm tracking-[2px] font-primary">
                  Years Old
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="text-sm">
                  <CountUp start={0} end={31} duration={15} />
                </div>
                <div className="text-sm tracking-[2px] font-tertiary">
                  Portfolio
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="text-sm">
                  <CountUp start={0} end={110} duration={15} />
                </div>
                <div className="text-sm tracking-[2px] font-tertiary">
                  Waifu
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-primary mt-5"
        >
          <h1 className="font-semibold">What I use?</h1>
          <p className="text-sm opacity-40">These are the frameworks I use</p>
          <div className="mt-5">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3} 
              loop={true} 
              spaceBetween={30}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ dynamicBullets: true }}
              modules={[EffectCoverflow, Pagination]}
            >
              {frameworks.map((framework, index) => (
                <SwiperSlide key={index} className="mb-9">
                  <div className="p-4 background-gray rounded-lg shadow-md">
                    <div className="flex flex-col items-center gap-y-2">
                      <img
                        src={framework.imagesUrl}
                        alt={framework.name}
                        className="w-20 h-20 object-contain"
                      />
                      <h1 className="text-sm font-semibold">
                        {framework.name}
                      </h1>
                      <a
                        href={framework.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs opacity-60"
                      >
                        {framework.url}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
