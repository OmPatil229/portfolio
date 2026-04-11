import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <motion.div 
        className="w-full md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold tracking-wide mb-6">
          MERN Stack Master
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-brand-blue leading-tight mb-8">
          Crafting <span className="italic text-brand-accent">digital</span> experiences that feel like magic.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-blue/90 max-w-lg mb-10 leading-relaxed font-normal">
          I build scalable web applications that don't just work flawlessly—they leave a lasting impression. 
          Performance, elegance, and pixel-perfect design.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex gap-4">
          <a href="#projects" className="bg-brand-blue text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition-colors border border-brand-blue">
            View My Work
          </a>
          <a href="#contact" className="border border-brand-blue text-brand-blue px-8 py-4 rounded-full font-medium hover:bg-brand-blue hover:text-white transition-colors">
            Let's Talk
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="w-full md:w-1/2 relative h-[500px] md:h-[650px] mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-brand-dark/5 shadow-2xl">
          <img 
            src="/hero.png" 
            alt="Portrait" 
            className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
