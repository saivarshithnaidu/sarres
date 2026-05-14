"use client";

import { motion } from "framer-motion";

const stories = [
  { label: "New Drops", color: "bg-brand-maroon" },
  { label: "Silk Fest", color: "bg-brand-gold" },
  { label: "Client Love", color: "bg-brand-black" },
  { label: "Our Story", color: "bg-brand-beige" },
  { label: "Processes", color: "bg-brand-maroon" },
  { label: "Offers", color: "bg-brand-gold" },
];

const Stories = () => {
  return (
    <div className="w-full bg-brand-cream/50 pt-32 pb-6 border-b border-brand-maroon/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
          {stories.map((story, index) => (
            <motion.div
              key={story.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex-none flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full p-[3px] border-2 border-brand-maroon group-hover:border-brand-gold transition-colors duration-500">
                <div className={`w-full h-full rounded-full ${story.color} flex items-center justify-center text-white font-serif text-[10px] font-bold uppercase tracking-tighter text-center px-2`}>
                  {story.label}
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black/60">
                {story.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
