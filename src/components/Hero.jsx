import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Sparkles, Zap } from 'lucide-react';
import heroImg from '../assets/hero.png';

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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const elements = [
    { icon: <Code2 className="text-brand-accent" />, delay: 0, top: '10%', left: '-5%' },
    { icon: <Cpu className="text-brand-blue" />, delay: 1, top: '60%', left: '-10%' },
    { icon: <Sparkles className="text-orange-400" />, delay: 0.5, top: '20%', right: '-5%' },
    { icon: <Zap className="text-brand-accent" />, delay: 1.5, bottom: '10%', right: '0%' },
    { icon: <Globe className="text-brand-blue" />, delay: 0.8, top: '80%', left: '20%' },
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] -z-10" />

      {/* Left Content */}
      <motion.div 
        className="w-full md:w-1/2 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold tracking-wide mb-6">
          <Sparkles size={14} />
          MERN Stack Master
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-serif text-brand-blue leading-[1.1] mb-8">
          Crafting <span className="italic text-brand-accent block md:inline">digital</span> magic.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-blue/80 max-w-lg mb-10 leading-relaxed font-normal">
          I build scalable web applications that don't just work flawlessly—they leave a lasting impression. 
          Performance, elegance, and pixel-perfect design.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
          <a href="#projects" className="group relative bg-brand-blue text-white px-10 py-4 rounded-full font-medium overflow-hidden transition-all hover:shadow-magnetic">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a 
            href="https://wa.me/919313796383?text=Hi%20OM,%20I'm%20interested%20in%20a%20project%20inquiry%20regarding%20MERN%20Stack%20development." 
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-full font-medium hover:bg-brand-blue hover:text-white transition-all text-center"
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image with Playful Elements */}
      <motion.div 
        className="w-full md:w-1/2 relative flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative w-full max-w-[500px] aspect-[4/5]">
          {/* Floating Icons */}
          {elements.map((el, i) => (
            <motion.div
              key={i}
              className="absolute z-20 p-4 bg-white rounded-2xl shadow-xl border border-brand-cream"
              style={{ ...el }}
              variants={floatingVariants}
              animate="animate"
              custom={i}
            >
              {el.icon}
            </motion.div>
          ))}

          {/* Decorative Rings */}
          <div className="absolute -inset-4 border border-brand-accent/20 rounded-[3rem] -z-10 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-10 border border-brand-blue/10 rounded-[4rem] -z-10 animate-[spin_30s_linear_infinite_reverse]" />

          {/* Image Container */}
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-brand-cream border border-brand-blue/5 shadow-2xl relative">
            <img 
              src={heroImg} 
              alt="Portrait of OM" 
              className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Playful Blob */}
          <motion.div 
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-full -z-10 blur-2xl opacity-30"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


