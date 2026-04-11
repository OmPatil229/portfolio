import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPlaceholder = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-brand-accent text-sm font-semibold tracking-wide uppercase">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue mt-2">
              Featured Projects
            </h2>
          </div>
          <a href="#" className="hidden md:inline-block text-brand-blue/90 hover:text-brand-accent transition-colors mt-6 md:mt-0 font-medium">
            View All Projects &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="w-full aspect-[4/3] bg-brand-cream rounded-2xl overflow-hidden relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-brand-blue/30 font-serif italic text-2xl group-hover:scale-105 transition-transform duration-700">
                Coming Soon
              </div>
            </div>
            <h3 className="text-2xl font-serif text-brand-blue mb-2">Project Title One</h3>
            <p className="text-brand-blue/90 font-normal">MERN Stack • Full-scale Architecture</p>
          </motion.div>

          {/* Placeholder Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer md:mt-16"
          >
            <div className="w-full aspect-[4/3] bg-brand-cream rounded-2xl overflow-hidden relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-brand-blue/30 font-serif italic text-2xl group-hover:scale-105 transition-transform duration-700">
                Coming Soon
              </div>
            </div>
            <h3 className="text-2xl font-serif text-brand-blue mb-2">Project Title Two</h3>
            <p className="text-brand-blue/90 font-normal">React • Node.js • Scalable</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPlaceholder;
