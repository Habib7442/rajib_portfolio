import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaChevronDown, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-20">
      {/* Background Animation (Circuit-like) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 H100 M50 0 V100 M25 25 L75 75 M75 25 L25 75"
              stroke="rgba(0, 212, 255, 0.3)"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="50" cy="50" r="2" fill="rgba(0, 212, 255, 0.5)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-teal font-mono text-sm tracking-widest mb-4 uppercase">
            Welcome to my research portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
            RAJIB <span className="text-teal">SUTRADHAR</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-white/80 mb-8 h-12">
            <TypeAnimation
              sequence={[
                'PhD Scholar',
                2000,
                'VLSI Researcher',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-2xl mx-auto lg:mx-0 text-white/60 mb-10 text-lg">
            Specializing in semiconductor devices, perovskite materials, and ReRAM memory technology.
            Bridging materials science and nanoelectronics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-teal text-navy font-bold rounded-full hover:bg-white transition-colors w-full sm:w-auto text-center"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/Rajib Sutradhar Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-teal text-teal font-bold rounded-full hover:bg-teal/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaDownload size={16} />
              Download Resume
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rajib-sutradhar-3a4589192/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border border-teal text-teal rounded-full hover:bg-teal/10 transition-colors flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-first lg:order-last"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Animated Ring */}
            <div className="absolute inset-0 border-2 border-teal/30 rounded-[3rem] rotate-6 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 border-2 border-teal/20 rounded-[3rem] -rotate-6 animate-[spin_15s_linear_infinite]" />
            
            <div className="absolute inset-2 bg-navy rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/IMG_4805.jpg.jpeg" 
                alt="Rajib Sutradhar" 
                className="w-full h-full object-cover lg:grayscale lg:hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-teal/50 hidden lg:block"
      >
        <FaChevronDown size={24} />
      </motion.div>
    </section>
  );
}
