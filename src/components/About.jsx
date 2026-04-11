import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white rounded-t-[3rem] mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-brand-blue mb-8"
        >
          Engineering that <br className="md:hidden" /> <span className="italic text-brand-accent">doesn't fail at scale.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-brand-blue/90 space-y-6 font-normal leading-relaxed"
        >
          <p>
            The best technology is invisible. When I build a product, my goal isn't to show off complex code. 
            It's to make the complex feel incredibly simple. As a MERN stack expert, I engineer fast, reliable architectures 
            that handle whatever scale you throw at them, while delivering a fluid, brand-aligned user interface.
          </p>
          <p>
            From MongoDB to React, every line of code is written with purpose. 
            Because great software shouldn't just run—it should feel like it's anticipating your next move.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
