import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, Global Tech",
    content: "NOIR STUDIOS transformed our brand identity with their cinematic vision. The level of detail and storytelling they brought to our commercial project was beyond our expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Michael Chen",
    role: "Independent Producer",
    content: "Working with Julian and his team was a masterclass in efficiency and creativity. They understood the nuances of our documentary and delivered a final product that truly resonated with audiences.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Elena Rodriguez",
    role: "Artist & Musician",
    content: "The music video they produced for my latest single is a work of art. The lighting, the pacing, the visual metaphors—everything was perfect. I couldn't be happier.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">Client Success</span>
        <h2 className="text-4xl md:text-6xl font-serif text-white">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/10 p-10 relative group"
          >
            <Quote className="absolute top-6 right-6 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" size={40} />
            <div className="mb-8">
              <p className="text-white/70 italic leading-relaxed text-lg">
                "{item.content}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-amber-500/30"
              />
              <div>
                <h4 className="text-white font-serif">{item.name}</h4>
                <p className="text-amber-500/60 text-xs uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;