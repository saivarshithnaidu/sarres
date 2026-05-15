"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import FashionImage from "./FashionImage";

const collections = [
  {
    title: "Kalamkari Collection",
    price: "₹4,999",
    fabric: "Pure Silk",
    image: "/images/collections/kalamkari.png",
  },
  {
    title: "Hand Painted Sarees",
    price: "₹6,499",
    fabric: "Organza",
    image: "/images/collections/hand-painted.png",
  },
  {
    title: "Festive Collection",
    price: "₹5,299",
    fabric: "Chiffon",
    image: "/images/collections/festive.png",
  },
  {
    title: "Wedding Collection",
    price: "₹12,999",
    fabric: "Kanjeevaram",
    image: "/images/collections/wedding.png",
  },
];

const FeaturedCollections = () => {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">
              Featured <span className="text-brand-maroon italic">Collections</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our curated selection of handcrafted sarees, each telling a unique story of heritage and modern style.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-maroon font-bold border-b-2 border-brand-maroon pb-1 hover:gap-4 transition-all">
            View All Collections <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative optimize-gpu"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-lg">
                <FashionImage 
                  src={item.image}
                  title={item.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Overlay Button */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="https://wa.me/yournumber"
                    className="w-full flex items-center justify-center gap-2 bg-white text-brand-maroon py-3 rounded-full font-bold shadow-xl"
                  >
                    <MessageCircle size={18} />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-brand-black mb-1 group-hover:text-brand-maroon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">{item.fabric}</p>
                </div>
                <p className="font-bold text-brand-maroon">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
