import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/hero-cinematic-set-v2-01d3010e-1778512251510.webp"
          alt="Cinematic Set"
          className="w-full h-full object-cover scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#050505]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-amber-500 font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Award Winning Production Studio
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8">
            Visual Stories <br />
            <span className="italic">That Resonate</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="h-16 px-10 text-lg bg-amber-500 text-black hover:bg-amber-600 rounded-none tracking-widest"
              onClick={() => {
                const element = document.getElementById("portfolio");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              EXPLORE WORK
            </Button>
            
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <button className="flex items-center gap-3 text-white hover:text-amber-500 transition-colors group">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Play className="fill-white group-hover:fill-amber-500 ml-1" size={24} />
                  </div>
                  <span className="font-semibold tracking-widest uppercase text-sm">Watch Showreel</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-black border-none p-0 aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30 cursor-pointer"
        onClick={() => {
          const element = document.getElementById("portfolio");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Stats overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/5 py-8 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-around items-center">
          {[
            { label: "YEARS EXP", value: "12+" },
            { label: "PROJECTS", value: "250+" },
            { label: "AWARDS", value: "18" },
            { label: "CLIENTS", value: "85" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-serif text-white font-bold mb-1">{stat.value}</div>
              <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;