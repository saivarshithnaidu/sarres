"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/yournumber"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors group"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <div className="absolute right-20 bg-white text-brand-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-maroon/10">
        Inquire Now
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
