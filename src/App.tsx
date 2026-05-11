import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Process from "./components/Process";
import BehindTheScenes from "./components/BehindTheScenes";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Equipment from "./components/Equipment";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark bg-[#050505] text-white min-h-screen selection:bg-amber-500 selection:text-black font-sans">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif tracking-widest text-amber-500" style={{ textShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}>
                NOIR STUDIOS
              </h1>
              <div className="mt-4 flex justify-center">
                <div className="h-[1px] w-24 bg-amber-500 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <div className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
                <section id="portfolio" className="py-24">
                  <Portfolio />
                </section>
                <section id="services" className="py-24 bg-white/[0.01]">
                  <Services />
                </section>
                <section id="process" className="py-24">
                  <Process />
                </section>
                <section id="bts" className="py-24 bg-white/[0.01]">
                  <BehindTheScenes />
                </section>
                <section id="team" className="py-24">
                  <Team />
                </section>
                <section id="testimonials" className="py-24 bg-white/[0.01]">
                  <Testimonials />
                </section>
                <section id="equipment" className="py-24">
                  <Equipment />
                </section>
                <section id="contact" className="py-24 bg-white/[0.01]">
                  <ContactForm />
                </section>
              </div>
            </main>
            <Footer />
            <Toaster position="top-center" theme="dark" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;