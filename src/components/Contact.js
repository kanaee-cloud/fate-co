import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { PiContactlessPayment } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Swal from "sweetalert2";

const social = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arsal-naufal",
    logo: ""
  },
  {
    name: "GitHub",
    url: "https://github.com/kanaee-cloud",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_arsalnaufal",
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const userId = process.env.REACT_APP_EMAILJS_USER_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        console.log("Pesan terkirim: ", result.text);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your message has been sent!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.log("Gagal mengirim pesan: ", error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="" id="contact">
      <div>
             <h1 className="text-2xl mb-5 font-semibold flex items-center gap-x-2">
               <PiContactlessPayment size={30} className="opacity-70" />
               Contact
             </h1>
             <h2 className="text-[16px] text-justify opacity-70 font-light leading-relaxed">
              For further information please contact me.
             </h2>
            <hr className="opacity-30 my-3" />
           </div>
        <div className="flex flex-col lg:flex-row">
          {/* text
          <motion.div
            className=" lg:flex flex-1 max-w-[320px] lg:max-w-[350px]"
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={Image} alt="" width={[500]} height={[500]} />
          </motion.div> */}
          {/*form*/}
          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 glassmorphism flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:opacity-50 focus:border-gradient transition-all"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:opacity-50 focus:border-gradient transition-all"
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:opacity-50 focus:border-gradient transition-all resize-none mb-12"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Submit
            </button>
          </motion.form>
        </div>
     
    </section>
  );
};

export default Contact;
