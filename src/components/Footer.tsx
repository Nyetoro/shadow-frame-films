import React from "react";
import { Instagram, Twitter, Youtube, Linkedin, Film } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-8">
              <span className="text-3xl font-serif font-bold tracking-tighter text-white">
                NOIR<span className="text-amber-500">STUDIOS</span>
              </span>
            </a>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              We are a collective of filmmakers, visionaries, and craftsmen dedicated to the art of cinematic storytelling. Based in Los Angeles, working globally.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-amber-500 hover:border-amber-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8">Studio</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#portfolio" className="hover:text-amber-500 transition-colors">Our Work</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#bts" className="hover:text-amber-500 transition-colors">Behind the Scenes</a></li>
              <li><a href="#team" className="hover:text-amber-500 transition-colors">Creative Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8">Resources</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#equipment" className="hover:text-amber-500 transition-colors">Equipment Rental</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Project Planner</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-white/20 text-xs uppercase tracking-widest gap-4 text-center">
          <p>© 2024 NOIR STUDIOS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            DESIGNED FOR THE <Film size={14} className="text-amber-500" /> BIG SCREEN
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;