"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Star, Quote } from "lucide-react";
import FashionImage from "./FashionImage";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#FDFBF7]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/30 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-maroon/5 rounded-full blur-2xl md:blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content: The Iconic Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: [0, -15, 0] } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group optimize-gpu"
            >
              <FashionImage 
                src="/images/hero.png"
                title="Signature Collection"
                className="w-full h-[600px] md:h-[700px]"
              />
              
              {/* Cinematic Brand Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-black/10 group-hover:bg-black/5 transition-colors duration-700">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="glass p-6 md:p-8 rounded-2xl border border-white/40 max-w-xs shadow-2xl"
                  >
                  <span className="font-serif text-sm font-bold tracking-[0.4em] text-brand-maroon uppercase block mb-4 border-b border-brand-maroon/20 pb-4">
                    Signature Edition
                  </span>
                  <h3 className="font-serif text-3xl text-brand-black leading-tight mb-4">
                    Crafting <span className="text-brand-maroon italic">Tradition</span> for the <span className="italic">Modern Grace</span>
                  </h3>
                  <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full" />
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative background shape */}
            <div className="absolute -top-8 -left-8 -z-10 w-full h-full border-2 border-brand-gold/20 rounded-2xl" />
            
            {/* Trust badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -right-6 z-20 glass p-5 rounded-2xl shadow-luxury flex items-center gap-4 border border-white/50"
            >
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="font-serif font-bold text-brand-black">Authentic Quality</p>
                <p className="text-xs text-gray-500">Premium Hand Painted</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content: The Quote and Branding */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-8 inline-flex items-center gap-3 py-2 px-4 rounded-full bg-brand-maroon/5 border border-brand-maroon/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-maroon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-maroon"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-maroon">New Arrivals 2024</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl text-brand-black mb-8 leading-tight">
              Elegance in <br />
              <span className="text-brand-maroon italic">Every Drape</span>
            </h1>

            <div className="relative mb-12">
              <Quote className="absolute -top-6 -left-6 text-brand-gold/20 w-12 h-12" />
              <p className="text-xl md:text-2xl text-gray-600 italic font-serif leading-relaxed pl-4 border-l-4 border-brand-gold/30">
                "A saree is not just an attire; it's a piece of heritage draped in elegance. We weave stories of tradition into every thread, creating timeless masterpieces for the modern woman."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <motion.a 
                href="#collections"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-brand-maroon text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-black transition-all shadow-2xl shadow-brand-maroon/20"
              >
                Shop Collection <ShoppingBag size={20} />
              </motion.a>
              
              <motion.a 
                href="https://wa.me/yournumber"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-brand-maroon font-bold group"
              >
                Inquire on WhatsApp 
                <div className="w-10 h-10 rounded-full border border-brand-maroon/20 flex items-center justify-center group-hover:bg-brand-maroon group-hover:text-white transition-all">
                  <MessageCircle size={18} />
                </div>
              </motion.a>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-100">
              <div>
                <p className="text-3xl font-serif text-brand-black mb-1">2k+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-brand-black mb-1">500+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Designs</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-brand-black mb-1">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Pure Silk</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
