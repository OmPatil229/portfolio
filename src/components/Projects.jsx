import React from 'react';
import { motion } from 'framer-motion';
import { Activity, MessageSquare, MapPin, Brain, ExternalLink, ArrowRight } from 'lucide-react';
import calorieImg from '../assets/projects/calorie-tracker.png';
import crmImg from '../assets/projects/crm-llm.png';
import gpsImg from '../assets/projects/gps-employee.png';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-cream aspect-[4/3] mb-10 shadow-sm hover:shadow-magnetic transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-brand-blue/5 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full transform scale-150 rotate-45 flex flex-wrap gap-4">
                {[...Array(60)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-brand-accent/20" />
                ))}
              </div>
            </div>
            <div className="w-24 h-24 mb-6 rounded-3xl bg-white shadow-xl flex items-center justify-center relative z-10 transform group-hover:rotate-12 transition-transform duration-500">
              <Brain className="text-brand-accent w-12 h-12" />
            </div>
            <div className="relative z-10">
              <p className="text-brand-blue font-serif text-2xl italic">Logic of Life</p>
              <div className="h-[2px] w-12 bg-brand-accent/30 mx-auto mt-4" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-blue transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 delay-100">
            <ExternalLink size={24} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-2">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-brand-accent/10 text-brand-accent`}>
            {project.icon}
          </div>
          <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-serif text-brand-blue leading-tight group-hover:text-brand-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <div className="space-y-6">
          <p className="text-brand-blue/80 leading-relaxed font-normal text-base md:text-lg">
            {project.description}
          </p>

          <div className="p-6 rounded-2xl bg-brand-blue/[0.03] border border-brand-blue/5 space-y-4">
            <div>
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-2">The Challenge</p>
              <p className="text-sm text-brand-blue/70 italic leading-relaxed">
                "{project.problem}"
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black text-brand-blue/40 uppercase tracking-[0.2em] mb-2">Engineering Solution</p>
              <p className="text-sm text-brand-blue/80 font-medium leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[9px] px-3 py-1.5 rounded-full border border-brand-blue/10 bg-white text-brand-blue/60 font-bold uppercase tracking-widest shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4 pt-6 mt-4 border-t border-brand-blue/5">
          <p className="text-[10px] font-black text-brand-blue/40 uppercase tracking-[0.3em]">Key Innovations</p>
          <ul className="grid grid-cols-1 gap-3">
            {project.features.map((feature, i) => (
              <li key={i} className="text-sm text-brand-blue/70 flex items-start gap-3 font-medium border-l-2 border-brand-accent/20 pl-4 py-1">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI Calorie Insight",
      category: "Health Engineering",
      icon: <Activity size={18} />,
      description: "A precision nutrition platform that moves beyond simple tracking into diagnostic-style health architecture.",
      problem: "Traditional apps offer generic advice, failing to account for metabolic variations and dynamic physiological changes.",
      solution: "Engineered a recursive heuristic engine that adjusts macro targets daily based on biometric fluctuations and activity intensity.",
      image: calorieImg,
      tags: ["AI Adapters", "Health-Tech", "MERN", "Nutrition Science"],
      features: [
        "Dynamic macro-adjustment algorithm based on daily weight drift",
        "Personalized micronutrient optimization engine",
        "Predictive goal estimation using historical adherence data",
        "Automated meal-profile analysis for nutritional density"
      ]
    },
    {
      title: "Private CRM LLM",
      category: "Ai & Data Integrity",
      icon: <MessageSquare size={18} />,
      description: "An enterprise-grade CRM that leverages the power of Local LLMs to turn unstructured customer data into actionable intelligence.",
      problem: "Cloud-based AI models pose high data-leakage risks for sensitive customer logs and proprietary business logic.",
      solution: "Containerized a Llama 3 instance within an isolated VPC, allowing natural language queries over encrypted databases.",
      image: crmImg,
      tags: ["Local Inference", "Llama 3", "Data Privacy", "Enterprise"],
      features: [
        "In-situ inference engine eliminates external API latency and cost",
        "RAG (Retrieval-Augmented Generation) for accurate context extraction",
        "Automated sentiment analysis and lead prioritization",
        "Privacy-first architecture with end-to-end data localization"
      ]
    },
    {
      title: "GPS Operations Hub",
      category: "Enterprise Mobility",
      icon: <MapPin size={18} />,
      description: "A mission-critical management system for decentralized workforces, focused on operational integrity and real-time coordination.",
      problem: "Manual attendance systems and simple GPS logs are prone to 'location spoofing' and clock-in fraud in field operations.",
      solution: "Implemented multi-layered geo-fencing with device-integrity checks and cryptographic proof-of-work for each check-in event.",
      image: gpsImg,
      tags: ["Geo-fencing", "IoT", "Real-time Ops", "Logistics"],
      features: [
        "Anti-spoofing logic verifying hardware GPS vs network triangulation",
        "Automated payout calculations tied to verified operational milestones",
        "Real-time administrative dashboard with geo-spatial visualizations",
        "Fractional-latency updates using WebSocket protocols for live tracking"
      ]
    },
    {
      title: "Life OS Systems",
      category: "Behavioral Design",
      icon: <Brain size={18} />,
      description: "An advanced productivity framework built to bridge the gap between abstract long-term goals and daily execution integrity.",
      problem: "Planning often collapses due to 'reactive work'—tasks that appear during the day and derail prepared schedules.",
      solution: "Developed an 'Execution Integrity' metric that locks daily intents into an immutable snapshot to track planning accuracy.",
      image: null,
      tags: ["Productivity", "Goal Hierarchies", "Atomic Design"],
      features: [
        "Immutable 'Daily Intent' snapshots for honest performance audits",
        "Recursive goal breakdown from yearly vision to daily micro-actions",
        "Advanced carry-forward logic that preserves task context and history",
        "Consistency heatmaps for identifying behavioral bottlenecks"
      ]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase"
            >
              Curated Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-brand-blue mt-4 leading-tight"
            >
              Selected <span className="italic">Works</span> & Research
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-0"
          >
            <p className="text-brand-blue/60 max-w-xs text-sm md:text-right font-medium">
              Transforming complex problems into elegant, high-performance digital solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-brand-blue/5 flex flex-col items-center"
        >
          <p className="text-brand-blue/40 text-sm mb-6 font-medium uppercase tracking-widest">Interested in collaboration?</p>
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-brand-blue overflow-hidden"
          >
            <span className="relative z-10">Start a conversation</span>
            <span className="text-brand-accent group-hover:translate-x-3 transition-transform duration-500">&rarr;</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
