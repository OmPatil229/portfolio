import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Activity } from 'lucide-react';

const Research = () => {
  const papers = [
    {
      title: "Comprehensive Review on BMI, TDEE, BMR and Calories for Weight Management",
      subtitle: "Insights into Energy Expenditure and Nutrient Balance for Long-Term Well-Being",
      link: "https://www.researchgate.net/publication/384950082_Comprehensive_Review_on_BMI_TDEE_BMR_and_Calories_for_Weight_Management_Insights_into_Energy_Expenditure_and_Nutrient_Balance_for_Long-Term_Well-Being",
      publisher: "ResearchGate"
    },
    {
      title: "A Comprehensive Framework for Weight Management",
      subtitle: "Leveraging Personalized Health Data Integrating Macro, Micronutrient, and Behavioral Insights",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-7473-2_45",
      publisher: "Springer Nature"
    }
  ];

  return (
    <section id="research" className="py-24 px-6 md:px-12 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <span className="text-brand-accent text-sm font-semibold tracking-wide uppercase flex items-center gap-2 mb-4">
              <Activity size={16} /> Bridging Code & Science
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue mb-6 leading-tight">
              Engineering <br /> <span className="italic text-brand-accent">Human Health.</span>
            </h2>
            <p className="text-lg text-brand-blue/90 font-normal leading-relaxed mb-8">
              I don't just build standard web apps. I research and design the algorithmic foundations of next-generation health technology. My published peer-reviewed work explores how complex user data can be transformed into actionable insights.
            </p>
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {papers.map((paper, index) => (
              <motion.a 
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group block bg-white p-8 rounded-3xl border border-brand-blue/5 hover:border-brand-accent/30 hover:shadow-[0_20px_40px_-15px_rgba(172,68,13,0.15)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-brand-cream text-brand-blue rounded-xl group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                    <BookOpen size={24} />
                  </div>
                  <ExternalLink size={20} className="text-brand-blue/30 group-hover:text-brand-accent transition-colors duration-500" />
                </div>
                <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">{paper.publisher}</div>
                <h3 className="text-xl font-serif text-brand-blue mb-3 group-hover:text-brand-accent transition-colors duration-300 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-base text-brand-blue/90 font-normal leading-relaxed">
                  {paper.subtitle}
                </p>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
