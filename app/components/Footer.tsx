"use client";

import { MessageCircle, Mail, MapPin } from "lucide-react";

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

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-3xl font-bold tracking-tight text-white uppercase">
                Sri Blooms
              </span>
              <span className="text-xs tracking-[0.3em] text-brand-gold uppercase -mt-1">
                Collection
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Experience the elegance of handcrafted sarees designed for the modern woman. 
              Preserving tradition with world-class craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-maroon transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-maroon transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#collections" className="hover:text-white transition-colors">Featured Collections</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Brand Story</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Feed</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 text-brand-gold">Shop By Fabric</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pure Silk Sarees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Organza Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chiffon Elegance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hand Painted Art</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 text-brand-gold">Get In Touch</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex gap-4">
                <Mail size={20} className="text-brand-gold flex-none" />
                <span>care@sriblooms.com</span>
              </li>
              <li className="flex gap-4">
                <MapPin size={20} className="text-brand-gold flex-none" />
                <span>Hyderabad, Telangana, <br />India - 500001</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-gold font-bold">Web:</span>
                <span>sarees.growxlabs.tech</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-brand-gold/30 to-transparent mb-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
          <p>© 2026 Sri Blooms Collection. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
