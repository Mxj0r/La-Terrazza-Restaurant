/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 60);
    });
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-charcoal/80 backdrop-blur-xl border-b border-white/5 shadow-lg py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta to-burgundy flex items-center justify-center border border-gold/30 shadow-inner group-hover:scale-105 transition-transform duration-500">
            <span className="font-serif text-xl font-bold text-cream tracking-tighter">LT</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-none text-cream tracking-tight group-hover:text-gold transition-colors duration-300">La Terrazza</span>
            <span className="text-[10px] uppercase font-sans tracking-widest-plus text-gold/80">Ristorante Italiano</span>
          </div>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {['Menu', 'Story', 'Reserve', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-widest-extra text-cream hover:text-gold transition-colors duration-300 font-medium"
            >
              {item}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 168, 83, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-8 py-2 border border-gold rounded-full text-[11px] uppercase tracking-widest-extra text-gold transition-all duration-300"
          >
            Reserve
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
