"use client";

import { motion } from "framer-motion";
import FashionImage from "./FashionImage";

const BrandStory = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Images Stack */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl optimize-gpu"
            >
              <FashionImage 
                src="/images/about/heritage.png"
                title="Our Heritage" 
                className="w-full h-[500px]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 z-20 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-[10px] border-white"
            >
              <FashionImage 
                src="/images/about/detail.png"
                title="Artisanal Detail" 
                className="w-full aspect-square"
              />
            </motion.div>

            {/* Decorative Gold Element */}
            <div className="absolute top-10 -left-10 -z-10 w-full h-full border-2 border-brand-gold/20 rounded-2xl" />
          </div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-brand-black mb-8 leading-tight">
              More Than A <br />
              <span className="text-brand-maroon italic">Saree Brand</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Sri Blooms Collection creates elegant sarees designed to blend tradition with modern style. 
                Our journey began with a simple vision: to bring the intricate beauty of handcrafted Indian textiles to the global stage.
              </p>
              <p>
                Every piece is crafted to make women feel confident, graceful, and timeless. 
                We work directly with master artisans across India, ensuring that every brushstroke and weave 
                preserves a centuries-old heritage while meeting modern luxury standards.
              </p>
              <p>
                When you wear Sri Blooms, you're not just wearing a garment; you're carrying a story of passion, 
                perseverance, and the incomparable soul of handcrafted art.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-brand-maroon">Artisan</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Collaborations</span>
              </div>
              <div className="w-px h-12 bg-brand-gold/30" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-brand-maroon">Sustainable</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Slow Fashion</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
