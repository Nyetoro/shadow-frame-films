import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const team = [
  {
    name: "Julian Vane",
    role: "Director / Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Elena Rossi",
    role: "Cinematographer",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/team-cinematographer-v2-0fcf47e2-1778512250130.webp",
  },
  {
    name: "Marcus Thorne",
    role: "Senior Editor",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/team-editor-v2-7a08b8c1-1778512251415.webp",
  },
];

const Team = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">The Creative Minds</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Our Team</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {team.map((member, i) => (
          <div key={i} className="group">
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex gap-4">
                  <Linkedin className="text-white hover:text-amber-500 cursor-pointer" size={20} />
                  <Instagram className="text-white hover:text-amber-500 cursor-pointer" size={20} />
                  <Twitter className="text-white hover:text-amber-500 cursor-pointer" size={20} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-white mb-1">{member.name}</h3>
            <p className="text-amber-500 text-sm uppercase tracking-widest">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;