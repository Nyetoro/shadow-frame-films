import React from "react";
import { motion } from "framer-motion";

const btsImages = [
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/bts-director-v2-b6d9dff4-1778512251492.webp",
    span: "md:col-span-2 md:row-span-2",
    title: "On Set Focus",
  },
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/bts-lighting-setup-c47eb047-1778511931336.webp",
    span: "col-span-1 row-span-1",
    title: "Light Master",
  },
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/cinema-camera-gear-v2-9b69e085-1778512250922.webp",
    span: "col-span-1 row-span-1",
    title: "The Rig",
  },
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/team-editor-v2-7a08b8c1-1778512251415.webp",
    span: "col-span-1 row-span-1",
    title: "Final Cut",
  },
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/hero-cinematic-set-v2-01d3010e-1778512251510.webp",
    span: "col-span-1 row-span-1",
    title: "Set Life",
  },
];

const BehindTheScenes = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">Inside The Studio</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Behind The Scenes</h2>
        </div>
        <div className="hidden md:block">
          <p className="text-white/40 max-w-xs text-right">
            A glimpse into the craft, the gear, and the team that makes the magic happen.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
        {btsImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            className={`relative overflow-hidden group ${img.span}`}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif italic text-xl">{img.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BehindTheScenes;