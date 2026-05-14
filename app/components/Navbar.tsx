"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Instagram", href: "#instagram" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 glass shadow-luxury" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-maroon uppercase">
            Sri Blooms
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-brand-gold uppercase -mt-1">
            Collection
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-brand-black hover:text-brand-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/yournumber"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 bg-brand-maroon text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-black transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-maroon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-brand-maroon/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-brand-black hover:text-brand-maroon transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/yournumber"
                className="flex items-center justify-center gap-2 bg-brand-maroon text-white px-6 py-4 rounded-xl text-md font-semibold"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
