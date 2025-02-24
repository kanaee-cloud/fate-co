import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/aku-prima.jpg";
import Img2 from "../assets/web-assessment.png";
import Img3 from "../assets/orbit.jpg";
import Modal from "./Modal";

// Warna untuk setiap framework
// const frameworkColors = {
//   Laravel: "border-red-500",
//   MySQL: "border-orange-500",
//   Bootstrap: "border-yellow-500",
//   "Vanilla JS": "border-green-500",
//   "Next.js": "border-purple-500",
//   TypeScript: "border-blue-500",
// };

const services = [
  {
    name: "Akuprim",
    description:
      "Berkontribusi sebagai Front-end Developer pada pengembangan platform daring Akuprim yang menyederhanakan pembayaran pajak, membantu konsultan pajak menghemat waktu dan mengurangi risiko kesalahan.",
    url: "https://gitlab.com/teknikal/aku-prima.git",
    periode: "Juli 2024 - Agustus 2024",
    img: Img1,
    frameworks: ["Laravel", "MySQL", "Tailwind", "Font Awesome"],
  },
  {
    name: "Web Assessment",
    description:
      "Membangun platform assessment daring untuk memfasilitasi proses rekrutmen karyawan dan identifikasi kandidat terbaik untuk perusahaan.",
    url: "https://gitlab.com/teknikal/web-assessment.git",
    periode: "Agustus 2024 - September 2024",
    img: Img2,
    frameworks: ["Laravel", "Bootstrap", "Vanilla JS", "Excel JS", "PostgreSQL"],
  },
  {
    name: "ORBIT",
    description:
      "Bertanggung jawab atas pengembangan situs web LMS untuk eskul Orbit dari sisi Front-End, memastikan tampilan yang menarik, user-friendly, dan responsif.",
    url: "https://github.com/orbit4it/web-frontend.git",
    periode: "Juni 2023 - September 2023",
    img: Img3,
    frameworks: ["Next.js", "TypeScript", "Python", "Tailwind", "PostgreSQL", "Fast API"],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toGithub = () => {
    window.open("https://github.com/kanaee-cloud");
  };

  return (
    <section className="section mb-14" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10">
          <motion.div
            variants={fadeIn("left", 0.5)}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => (
                <div
                  className="border border-[#75BFEC]/70 p-5 rounded-lg shadow-md mb-6 flex cursor-pointer flex-col"
                  key={index}
                  onClick={() => openModal(service)}
                >
                  <div className="flex items-center mb-3">
                    <img src={service.img} alt="" className="w-52 object-cover rounded-lg mr-4" />
                    <div>
                      <h4 className="text-[15px] lg:text-[2rem] text-gradient font-tertiary font-semibold">
                        {service.name}
                      </h4>
                      <p className="text-sm font-primary leading-tight opacity-80 text-gray-700">
                        {service.periode}
                      </p>
                    </div>
                  </div>

                  {/* Framework List */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.frameworks.map((framework, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm font-semibold border font-primary opacity-80 rounded-md framework-card text-accent`}
                      >
                        {framework}
                      </span>
                    ))}
                  </div>

                  <div className="font-tertiary flex flex-col items-end mt-3">
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-9 h-9 flex justify-center items-center"
                      onClick={(e) => e.stopPropagation()} 
                    >
                      <BsArrowUpRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <button className="btn btn-lg" onClick={toGithub}>
          View All My Project on Github
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedService} />
    </section>
  );
};

export default Services;
