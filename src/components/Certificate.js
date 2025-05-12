import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GiAchievement } from "react-icons/gi";
// import Img1 from "../assets/serti-1.png";
// import Img2 from "../assets/serti-2.png";
// import Img3 from "../assets/serti-3.jpg";

const certificate = [
  {
    name: "Coding Camp by DBS Foundation",
    company: "DBS Foundation",
    periode: "May 2025",
    img: "https://cdn.discordapp.com/attachments/896349028961378305/1371477469105885356/image.png?ex=6823476d&is=6821f5ed&hm=e0d1b2950b2025ae3968d736c545131005a346f41c7b70d89258e42f19c2a900&",
  },
  {
    name: "English for Business Communication",
    company: "The British Institute",
    periode: "May 2025",
    img: "https://cdn.discordapp.com/attachments/896349028961378305/1371478075077951560/image.png?ex=682347fd&is=6821f67d&hm=4a7ebc4e8bd66f37b215872409e8c80c175b9efeffbbfa2556efcb74488217e6&",
  },
  {
    name: "Financial Literacy 101",
    company: "Dicoding",
    periode: "April 2025",
    img: "https://cdn.discordapp.com/attachments/896349028961378305/1371478822695997521/image.png?ex=682348b0&is=6821f730&hm=a4fa22eec9755f577a742a82442859b1144b5c337a61a383c7c7c9743c5647eb&",
  },
  {
    name: "Fundamental Front-End Web Development",
    company: "Dicoding",
    periode: "March 2025",
    img: "https://cdn.discordapp.com/attachments/896349028961378305/1371479288314073210/image.png?ex=6823491f&is=6821f79f&hm=300f080b659da337597ff702420a9759331836c5f7add85cafa108214f48dc2b&",
  },
  {
    name: "Uji Kemahiran Bahasa Indonesia",
    company: "Kementerian Pendidikan dan Kebudayaan",
    periode: "December 2024",
    img: "https://cdn.discordapp.com/attachments/896349028961378305/1371479717240373380/image.png?ex=68234985&is=6821f805&hm=89ac2d8bf52d7524d0459961870997c98333202aa0df83f951745ec7a3ae7208&",
  },
];

const total = certificate.length;

const Certificate = () => {
  return (
    <section className="" id="services">
      <div>
        <h1 className="text-2xl mb-5 font-semibold flex items-center gap-x-2">
          <GiAchievement size={30} className="opacity-70" />
          Certificate
        </h1>
        <h2 className="text-[16px] text-justify opacity-70 font-light leading-relaxed">
          Some of the achievements i have during my career.
        </h2>
        <hr className="opacity-30 my-3" />
      </div>
      <p className="text-sm ">Total: {total}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {certificate.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-black/30  rounded-lg shadow-md mb-6 flex flex-col"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={cert.img}
              alt=""
              className="w-full h-auto object-cover rounded-t-lg "
            />
            <div className="p-4 flex flex-col gap-y-2">
              <h4 className="text-sm font-semibold">{cert.name}</h4>
              <p className="text-sm font-primary leading-tight opacity-80 text-gray-700">
                {cert.company}
              </p>
              <p className="text-sm font-primary leading-tight opacity-80 text-gray-700">
                {cert.periode}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
