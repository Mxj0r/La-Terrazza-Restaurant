/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { OliveIcon, PhoneIcon } from './Icons';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-charcoal">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-terracotta/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, scale: 0.9 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8 text-gold/40">
            <OliveIcon />
          </div>
          <h2 className="text-7xl md:text-8xl text-cream font-serif font-bold mb-8 italic">La Vita è Bella</h2>
          <p className="text-xl md:text-2xl text-cream/70 font-sans leading-relaxed mb-12 max-w-2xl mx-auto">
            "Every great evening starts with a decision. Tonight, choose the table that's been waiting for you."
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 bg-gradient-to-r from-gold to-terracotta rounded-sm text-charcoal font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl"
            >
              <PhoneIcon className="w-4 h-4" />
              Call to Reserve
            </motion.button>
            <motion.a
              href="https://maps.google.com"
              whileHover={{ scale: 1.04, backgroundColor: "var(--color-cream)", color: "var(--color-charcoal)" }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 border border-cream text-cream rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
            >
              Get Directions
            </motion.a>
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/40 font-bold">
            Thu · Fri · Sat · Dinners from 5 PM · 1727 E 7th Ave, Tampa
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 bg-charcoal border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-terracotta to-burgundy flex items-center justify-center border border-gold/20 shadow-xl">
              <span className="font-serif text-2xl font-bold text-cream tracking-tighter">LT</span>
            </div>
            <div>
              <p className="font-serif text-2xl text-cream mb-2 tracking-tight">La Terrazza</p>
              <p className="text-cream/50 text-xs italic leading-relaxed">
                "Handmade pasta, time-honored recipes, and the warmth of an Italian family table."
              </p>
            </div>
          </div>

          {/* Hours Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold">The Kitchen</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between md:justify-start md:gap-10">
                <span className="text-cream/80 text-sm">Thu — Sat</span>
                <span className="text-cream/40 text-[10px] uppercase tracking-widest font-bold">5:00 PM — Close</span>
              </div>
              <div className="flex items-center justify-between md:justify-start md:gap-10">
                <span className="text-cream/30 text-sm">Sun — Wed</span>
                <span className="text-cream/20 text-[10px] uppercase tracking-widest font-bold">Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold">Reach Us</h4>
            <div className="space-y-4">
              <a href="tel:+18132481326" className="text-cream/80 hover:text-gold block transition-colors text-sm underline underline-offset-4 decoration-gold/30">+1 (813) 248-1326</a>
              <p className="text-cream/60 text-sm leading-relaxed max-w-[200px] mx-auto md:mx-0">
                1727 E 7th Avenue<br />
                Ybor City, Tampa, FL 33605
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="#" className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/60 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4.63h3V23.5h5V12.09h3.76l.51-4.63z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/60 transition-all">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest text-cream/20 font-bold">
           <span>© 2024 La Terrazza Ristorante Italiano</span>
           <span>Crafted with love in Tampa, Florida</span>
        </div>
      </div>
    </footer>
  );
}
