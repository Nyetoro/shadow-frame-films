import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Celestial Echoes",
    category: "Narrative",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/hero-cinematic-set-v2-01d3010e-1778512251510.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "The Wild Frontier",
    category: "Documentary",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/portfolio-nature-v2-ee919a5a-1778512251099.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Neon Pulse",
    category: "Music Video",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/portfolio-urban-v2-24b9990a-1778512251629.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Urban Rhythms",
    category: "Commercial",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/cinema-camera-gear-v2-9b69e085-1778512250922.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Silent Shadows",
    category: "Narrative",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/hero-cinematic-set-e352363a-1778511931229.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Future Now",
    category: "Commercial",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/bts-lighting-setup-c47eb047-1778511931336.webp",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const categories = ["All", "Commercial", "Narrative", "Documentary", "Music Video"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">Selected Projects</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Portfolio</h2>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest transition-colors ${
                activeCategory === cat ? "text-amber-500 border-b border-amber-500 pb-1" : "text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[4/5] overflow-hidden bg-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-amber-500 text-xs uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300 cursor-pointer">
                        <Play className="text-white group-hover:text-black fill-current" size={20} />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl bg-black border-none p-0 aspect-video overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src={`${project.video}?autoplay=1`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;