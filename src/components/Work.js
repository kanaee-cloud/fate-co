import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/serti-1.png";
import Img2 from "../assets/serti-2.png";
import Img3 from "../assets/serti-3.jpg";

const Work = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* Text */}
            <div>
              <span className="text-[2.5rem] lg:text-[4rem] font-tertiary tight text-accent font-semibold">
                Certificate
              </span>
              <p className="glassmorphism max-w-sm mb-14 font-primary">
                Beberapa sertifikat yang saya miliki saat ini  
              </p>
            </div>
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full h-[250px] object-cover"
                src={Img1}
                alt="Dicoding"
              />
              {/* Title & Description */}
              <div className="absolute -bottom-full left-8 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="font-primary text-gradient">Fundamental Front-end Dev</span> <br />
                <span className="text-sm text-white font-primary font-semibold">
                Menyelesaikan pelatihan Front-end Fundamental Javascript dari Dicoding pada tahun 2025, yang berfokus pada pengembangan kemampuan dasar Javascript untuk front-end web.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full h-[250px] object-cover"
                src={Img2}
                alt="UKBI"
              />
              {/* Title & Description */}
              <div className="absolute -bottom-full left-8 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="font-primary text-gradient">UKBI</span> <br />
                <span className="text-sm text-white font-primary">
                Memperoleh skor 606 pada tes uji kemahiran berbahasa Indonesia yang diselenggarakan Badan Pengembangan dan Pembinaan Bahasa pada tahun 2024. Skor tersebut menunjukkan bahwa saya memiliki predikat unggul dan memadai dalam berkomunikasi menggunakan Bahasa Indonesia.
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full h-[250px] object-cover"
                src={Img3}
                alt="TOEIC "
              />
              {/* Title & Description */}
              <div className="absolute -bottom-full left-8 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="font-primary text-gradient">TOEIC ETS</span> <br />
                <span className="text-sm text-white font-primary">
                Meraih skor 510 pada tes TOEIC yang diselenggarakan oleh Educational Testing Service, menunjukkan kemampuan bahasa Inggris yang cukup baik.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
