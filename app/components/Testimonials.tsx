"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ananya Sharma",
    role: "Fashion Influencer",
    text: "The quality of the hand-painted organza saree I ordered is beyond words. It feels like wearing a piece of art. The packaging was so premium!",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Boutique Owner",
    text: "Sri Blooms Collection has become my go-to for unique pieces. Their attention to detail in Kalamkari designs is truly world-class.",
    initials: "PP",
    rating: 5,
  },
  {
    name: "Sanjana Reddy",
    role: "Groom's Sister",
    text: "Ordered a wedding collection saree and I was the star of the event. The fabric is so skin-friendly and the gold work is stunning.",
    initials: "SR",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* ... previous code ... */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ... header unchanged ... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-cream/30 p-10 rounded-[40px] shadow-luxury border border-brand-maroon/5 flex flex-col items-center text-center group hover:bg-white transition-all duration-500 optimize-gpu"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-brand-maroon flex items-center justify-center text-white text-2xl font-serif font-bold border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {review.initials}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white shadow-lg">
                  <Quote size={16} fill="white" />
                </div>
              </div>
              {/* ... rest of the card ... */}

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" className="text-brand-gold" />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed mb-8">"{review.text}"</p>

              <div>
                <h4 className="font-serif text-xl font-bold text-brand-black">{review.name}</h4>
                <p className="text-xs text-brand-maroon font-bold uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
