import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  FileCode, 
  Database, 
  Server, 
  Layers, 
  Terminal, 
  Github, 
  Globe, 
  Box, 
  Cpu, 
  Workflow 
} from 'lucide-react';

const TechMarquee = () => {
  const techs = [
    { name: "HTML5", icon: <Globe className="text-orange-500" /> },
    { name: "CSS3", icon: <Layers className="text-blue-500" /> },
    { name: "JavaScript", icon: <FileCode className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <Layers className="text-cyan-400" /> },
    { name: "Node.js", icon: <Server className="text-green-500" /> },
    { name: "Express.js", icon: <Terminal className="text-gray-400" /> },
    { name: "MongoDB", icon: <Database className="text-green-600" /> },
    { name: "MySQL", icon: <Database className="text-blue-600" /> },
    { name: "Postgres", icon: <Database className="text-indigo-600" /> },
    { name: "Git", icon: <Workflow className="text-orange-600" /> },
    { name: "GitHub", icon: <Github className="text-gray-900" /> },
    { name: "Docker", icon: <Box className="text-blue-500" /> },
    { name: "Kafka", icon: <Cpu className="text-gray-600" /> },
    { name: "RabbitMQ", icon: <Box className="text-orange-500" /> },
  ];

  return (
    <div className="py-12 bg-white/50 backdrop-blur-sm border-y border-brand-blue/5 overflow-hidden">
      <Marquee speed={50} gradient={true} gradientColor="white" gradientWidth={100}>
        {techs.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 mx-12 group cursor-default"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm border border-brand-blue/5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              {tech.icon}
            </div>
            <span className="text-lg font-serif font-bold text-brand-blue/60 group-hover:text-brand-accent transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;
