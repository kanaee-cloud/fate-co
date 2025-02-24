import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, project: service }) => {
    if (!isOpen) return null;
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 font-primary flex justify-center items-center z-50"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="glassmorphism rounded-xl p-6 max-w-lg w-full relative shadow-lg"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-black"
          >
            <FaTimes size={20} />
          </button>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.name}</h2>
          {service.img && (
            <img
              src={service.img}
              alt={service.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
          )}
          <p className="text-gray-600">{service.description}</p>
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline block mt-4"
          >
            Kunjungi Situs
          </a>
        </motion.div>
      </motion.div>
    );
  };

  export default Modal;
