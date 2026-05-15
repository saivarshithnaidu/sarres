"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import FashionImage from "./FashionImage";

const InstagramIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
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

const reels = [
  { id: 1, image: "/images/instagram/reel1.png" },
  { id: 2, image: "/images/instagram/reel2.png" },
  { id: 3, image: "/images/instagram/reel3.png" },
  { id: 4, image: "/images/instagram/reel4.png" },
  { id: 5, image: "/images/instagram/reel5.png" },
];

const InstagramShowcase = () => {
  return (
    <section id="instagram" className="py-24 bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Loved On <span className="text-brand-gold italic">Instagram</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Building a modern saree fashion experience, shared with our community of 50k+ fashion enthusiasts.
            </p>
          </div>
          <a
            href="https://instagram.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full transition-all border border-white/20"
          >
            <InstagramIcon size={24} className="text-brand-gold" />
            <span className="font-bold">Follow Us @SriBlooms</span>
          </a>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-12 snap-x luxury-scrollbar">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex-none w-[280px] aspect-[9/16] relative rounded-3xl overflow-hidden snap-center group cursor-pointer shadow-2xl"
              >
                <FashionImage
                  src={reel.image}
                  title={`Reel #${reel.id}`}
                  className="w-full h-full md:grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 optimize-gpu"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0.8, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    className="w-16 h-16 rounded-full glass flex items-center justify-center text-white"
                  >
                    <Play fill="white" size={24} />
                  </motion.div>
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-gold overflow-hidden bg-brand-maroon" />
                  <span className="text-sm font-medium">@SriBlooms</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Subtle Glow Overlay - Reduced blur for mobile */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-gold/20 blur-[60px] md:blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-maroon/30 blur-[60px] md:blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;
