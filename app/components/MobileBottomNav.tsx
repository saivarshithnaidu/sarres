"use client";

import { motion } from "framer-motion";
import { Home, Grid, MessageCircle, Star } from "lucide-react";

const InstagramIcon = ({ className, size = 20 }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const MobileBottomNav = () => {
  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "#" },
    { icon: <Grid size={20} />, label: "Shop", href: "#collections" },
    { icon: <MessageCircle size={20} />, label: "Chat", href: "https://wa.me/yournumber" },
    { icon: <InstagramIcon size={20} />, label: "Style", href: "#instagram" },
    { icon: <Star size={20} />, label: "Love", href: "#reviews" },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[100] md:hidden"
    >
      <div className="glass mx-4 mb-6 rounded-2xl border border-white/40 shadow-2xl overflow-hidden">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 px-3 py-1 text-brand-black/60 hover:text-brand-maroon transition-colors"
            >
              <motion.div whileTap={{ scale: 0.8 }} className="p-1">
                {item.icon}
              </motion.div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileBottomNav;
