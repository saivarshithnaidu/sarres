"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FashionImageProps {
  className?: string;
  patternType?: "silk" | "gold-leaf" | "maroon-flow" | "cream-texture" | "floral-abstract";
  title?: string;
  src?: string;
}

const FashionImage = ({ className, patternType = "silk", title, src }: FashionImageProps) => {
  const getPattern = () => {
    switch (patternType) {
      case "silk":
        return "bg-linear-to-br from-brand-maroon via-[#7D1626] to-brand-black";
      case "gold-leaf":
        return "bg-linear-to-tr from-brand-gold via-[#E6C25A] to-brand-gold";
      case "maroon-flow":
        return "bg-linear-to-b from-brand-maroon to-[#4A0D17]";
      case "cream-texture":
        return "bg-linear-to-br from-brand-cream via-[#F0E68C] to-brand-beige";
      case "floral-abstract":
        return "bg-linear-to-tr from-[#5D101D] via-[#D4AF37] to-[#FFFDD0]";
      default:
        return "bg-brand-maroon";
    }
  };

  return (
    <div className={`relative overflow-hidden optimize-gpu ${!src ? getPattern() : "bg-brand-black"} ${className}`}>
      {src && (
        <Image
          src={src}
          alt={title || "Saree Collection"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      )}
      
      {/* Texture Overlay 1: Fine Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      {/* Texture Overlay 2: Silk Flow (SVG Pattern) - Disabled on mobile for performance */}
      {!src && (
        <svg className="absolute inset-0 w-full h-full opacity-20 hidden md:block" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      )}

      {/* Abstract Shapes to simulate Saree drapes - only if no image */}
      {!src && (
        <motion.div
          animate={typeof window !== 'undefined' && window.innerWidth > 768 ? { 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            x: [0, 10, 0]
          } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-30"
          style={{
            background: "radial-gradient(circle at center, rgba(212,175,55,0.4) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <div className="glass px-6 py-4 rounded-xl border-white/30">
          <span className="font-serif text-sm font-bold tracking-widest text-brand-black uppercase block mb-1">
            Sri Blooms
          </span>
          <span className="text-[10px] text-brand-maroon font-black uppercase tracking-[0.3em]">
            {title || "Exclusive Piece"}
          </span>
        </div>
      </div>

      {/* Luxury Border Accent */}
      <div className="absolute inset-4 border border-white/10 pointer-events-none" />
      <div className="absolute inset-2 border border-brand-gold/20 pointer-events-none" />
    </div>
  );
};

export default FashionImage;
