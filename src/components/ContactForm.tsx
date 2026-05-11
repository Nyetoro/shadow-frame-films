import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will get back to you soon.");
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-amber-500 tracking-widest uppercase text-sm mb-4 block">Start a Project</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Let's Create Together</h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed">
            Have a vision? We have the tools and expertise to bring it to life. Reach out for a custom quote or to discuss your next production.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Mail className="text-amber-500" size={20} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-white text-lg">hello@noirstudios.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Phone className="text-amber-500" size={20} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-white text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="text-amber-500" size={20} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Visit Us</p>
                <p className="text-white text-lg">123 Cinematic Ave, Los Angeles, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.03] p-10 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Full Name</label>
                <Input className="bg-white/5 border-white/10 rounded-none h-12 focus:ring-amber-500 transition-colors text-white" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Email Address</label>
                <Input className="bg-white/5 border-white/10 rounded-none h-12 focus:ring-amber-500 transition-colors text-white" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Project Type</label>
              <Input className="bg-white/5 border-white/10 rounded-none h-12 focus:ring-amber-500 transition-colors text-white" placeholder="Commercial, Music Video, etc." />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Your Message</label>
              <Textarea className="bg-white/5 border-white/10 rounded-none min-h-[150px] focus:ring-amber-500 transition-colors text-white" placeholder="Tell us about your vision..." required />
            </div>
            <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-600 h-14 font-bold tracking-widest rounded-none">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;