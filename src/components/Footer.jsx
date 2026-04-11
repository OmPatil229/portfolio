import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/om-patil-bb7a97246", icon: FaLinkedin },
    { name: "X", url: "https://x.com/OmPatil229", icon: FaTwitter },
    { name: "Instagram", url: "https://www.instagram.com/ompatil.229/", icon: FaInstagram },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61554830761613", icon: FaFacebook },
    { name: "GitHub", url: "https://github.com/OmPatil229", icon: FaGithub },
  ];

  return (
    <footer id="contact" className="bg-brand-dark text-brand-cream/80 py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif text-white mb-2">Ready to work together?</h2>
          <p className="font-normal">Let's craft something beautiful and performant.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-cream hover:text-brand-dark hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-cream/10 text-brand-cream/80 text-sm flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <p>&copy; {new Date().getFullYear()} OM Patil. All rights reserved.</p>
        <p>MERN Stack Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
