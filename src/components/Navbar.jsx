import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/80 backdrop-blur-md px-6 py-4 rounded-full flex justify-between items-center z-50 shadow-sm border border-brand-cream/20"
    >
      <div className="font-serif font-bold text-2xl tracking-wide text-brand-blue">
        OM.
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
        <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
      </div>
      <a 
        href="#contact" 
        className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-magnetic transition-all hover:-translate-y-0.5 active:scale-95"
      >
        Hire Me
      </a>
    </motion.nav>
  );
};

export default Navbar;
