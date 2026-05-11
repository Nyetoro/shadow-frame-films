import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const gear = [
  {
    name: "ARRI Alexa Mini LF",
    type: "Camera",
    price: "$1,200/day",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ae4197a-7b9c-4d60-b537-92fb59e9563e/cinema-camera-gear-v2-9b69e085-1778512250922.webp",
  },
  {
    name: "Cooke S7/i Full Frame",
    type: "Lenses",
    price: "$850/day",
    image: "https://images.unsplash.com/photo-1617391911580-2a939bc412e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Freefly Movi Pro",
    type: "Stabilization",
    price: "$450/day",
    image: "https://images.unsplash.com/photo-1590233461244-0b134d1bc978?auto=format&fit=crop&q=80&w=800",
  },
];

const Equipment = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">Gear Catalog</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Equipment Rental</h2>
        </div>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none">
          VIEW FULL CATALOG
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gear.map((item, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/5 p-6 group transition-all duration-300 hover:border-amber-500/30">
            <div className="aspect-video overflow-hidden mb-6 relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <Badge className="absolute top-4 right-4 bg-amber-500 text-black hover:bg-amber-600 font-bold border-none">
                {item.price}
              </Badge>
            </div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{item.type}</p>
            <h3 className="text-xl font-serif text-white mb-6">{item.name}</h3>
            <Button className="w-full bg-white/5 text-white hover:bg-amber-500 hover:text-black border-white/10 rounded-none transition-colors">
              BOOK NOW
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;