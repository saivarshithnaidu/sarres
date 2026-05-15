"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const WhatsAppCTA = () => {
  return (
    <section className="py-24 bg-brand-maroon relative overflow-hidden">
      {/* Decorative Gold Circles - Reduced blur for mobile */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 blur-[50px] md:blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[50px] md:blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center optimize-gpu"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-gold/30 mb-10 shadow-2xl relative">
            <Image 
              src="/images/cta-icon.png"
              alt="Related Icon"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">
            Found Your <span className="text-brand-gold italic">Favorite</span> Saree?
          </h2>

          <p className="text-xl text-brand-cream/80 mb-12 max-w-2xl leading-relaxed">
            Order directly through WhatsApp in seconds. Get personalized style advice and quick delivery updates from our team.
          </p>

          <motion.a
            href="https://wa.me/yournumber"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-brand-gold text-brand-maroon px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:bg-white transition-all duration-300"
          >
            <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
            Chat On WhatsApp
          </motion.a>
          
          <p className="mt-8 text-brand-cream/60 text-sm font-medium uppercase tracking-[0.2em]">
            Fast Response • Pan India Delivery • Secure Orders
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
