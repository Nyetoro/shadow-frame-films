import React from "react";
import { Camera, Clapperboard, MonitorPlay, Lightbulb, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Clapperboard,
    title: "Production",
    description: "Full-scale production management, from scouting locations to casting and on-set management.",
  },
  {
    icon: MonitorPlay,
    title: "Post-Production",
    description: "Expert editing, color grading, sound design, and visual effects to bring the vision to life.",
  },
  {
    icon: Camera,
    title: "Cinematography",
    description: "High-end visual storytelling using industry-standard cameras (RED, ARRI) and lenses.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Brand discovery, concept development, and scripting to ensure your story hits the mark.",
  },
  {
    icon: Zap,
    title: "VFX & Motion",
    description: "Advanced motion graphics and CGI to enhance narrative possibilities.",
  },
  {
    icon: Users,
    title: "Casting & Talent",
    description: "Curating the perfect talent pool to bring authentic emotion to every frame.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Production Expertise</h2>
        <p className="text-white/60 text-lg">
          We combine technical precision with creative soul to deliver visuals that don't just look good—they feel right.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Card key={i} className="bg-white/[0.03] border-white/10 hover:border-amber-500/50 transition-colors group rounded-none overflow-hidden">
            <CardContent className="p-10">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 mb-8 group-hover:bg-amber-500 transition-colors">
                <service.icon className="text-white group-hover:text-black" size={24} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;