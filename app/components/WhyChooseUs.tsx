"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Leaf, 
  Truck, 
  Award, 
  MessageCircle, 
  Lock 
} from "lucide-react";

const features = [
  {
    icon: <Palette size={32} />,
    title: "Handcrafted Designs",
    desc: "Every saree is a unique piece of art, hand-painted and designed by master artisans."
  },
  {
    icon: <Leaf size={32} />,
    title: "Skin Friendly Fabrics",
    desc: "We use only premium, breathable natural fibers to ensure maximum comfort all day."
  },
  {
    icon: <Truck size={32} />,
    title: "Pan India Shipping",
    desc: "Reliable and fast delivery to every corner of India, tracked and insured."
  },
  {
    icon: <Award size={32} />,
    title: "Premium Quality",
    desc: "Strict quality checks for fabric strength, color fastness, and embroidery precision."
  },
  {
    icon: <MessageCircle size={32} />,
    title: "WhatsApp Support",
    desc: "Direct access to our style consultants via WhatsApp for any queries."
  },
  {
    icon: <Lock size={32} />,
    title: "Limited Collections",
    desc: "Exclusive small-batch production to maintain the uniqueness of your wardrobe."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-brand-cream/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">
            The Sri Blooms <span className="text-brand-maroon italic">Promise</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We are committed to preserving traditional Indian craftsmanship while providing a seamless modern shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 border border-brand-maroon/5 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-maroon/5 flex items-center justify-center text-brand-maroon mb-8 group-hover:bg-brand-maroon group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-brand-black mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
