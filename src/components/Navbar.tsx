import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "BTS", href: "#bts" },
    { name: "Team", href: "#team" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Gear", href: "#equipment" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold tracking-tighter text-white">
            NOIR<span className="text-amber-500">STUDIOS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-white/70 hover:text-amber-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-amber-500 text-black hover:bg-amber-600 font-semibold tracking-wide rounded-none"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REQUEST QUOTE
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-white hover:text-amber-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <Button
          size="lg"
          className="bg-amber-500 text-black hover:bg-amber-600 mt-4 rounded-none"
          onClick={() => {
            setIsOpen(false);
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          REQUEST QUOTE
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;