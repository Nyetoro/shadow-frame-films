import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Development",
    description: "Scriptwriting, storyboarding, and defining the visual language of the project.",
  },
  {
    number: "02",
    title: "Pre-Production",
    description: "Casting, location scouting, and meticulous technical planning.",
  },
  {
    number: "03",
    title: "Production",
    description: "The main shoot where our crew brings the script to life with high-end gear.",
  },
  {
    number: "04",
    title: "Post-Production",
    description: "Editing, color grading, and final sound mix for a polished masterpiece.",
  },
];

const Process = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">Our Workflow</span>
        <h2 className="text-4xl md:text-6xl font-serif text-white">From Script to Screen</h2>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 hidden lg:block -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:border-amber-500 group-hover:scale-110">
                <span className="text-2xl font-serif text-white group-hover:text-amber-500 transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;