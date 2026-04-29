/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Ornament, StarIcon } from './Icons';

export default function Hero() {
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.08]);

  const specialties = [
    { name: "Ravioli al Pomodoro", price: "$26", desc: "Handmade tomato-burrata ravioli, fresh basil, brown butter sage" },
    { name: "Fettuccine Bolognese", price: "$28", desc: "Wide ribbon pasta, slow-cooked beef & pork ragù, parmigiano-reggiano" },
    { name: "Scaloppine Piccata", price: "$38", desc: "Veal cutlets, capers, lemon, white wine butter sauce, saffron risotto" },
    { name: "Tiramisù della Casa", price: "$12", desc: "Classic Italian layers, mascarpone, espresso-soaked savoiardi" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 bg-charcoal"
      >
        <img 
          src="https://i.ibb.co/VYJT35Jn/4-X-la-terrazza-tampa-fl-1.jpg"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          alt="La Terrazza Restaurant Interior"
        />
        {/* Horizontal Dark Overlay to match design HTML style */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/20 to-charcoal/80" />
      </motion.div>

      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* Left Column (60%) */}
        <div className="lg:col-span-3 flex flex-col items-start text-left pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-widest-plus text-gold font-bold">Est. in Ybor City · Tampa, FL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-7xl md:text-8xl lg:text-9xl text-cream font-serif font-bold leading-none mb-2 tracking-tight"
          >
            La Terrazza
          </motion.h1>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="block text-2xl md:text-3xl uppercase tracking-widest-max text-gold/60 font-sans mb-10"
          >
            Ristorante Italiano
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-10 w-48 h-px bg-gold/30 flex items-center justify-center"
          >
             <div className="w-2 h-2 bg-gold rotate-45" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-md text-lg md:text-xl text-parchment font-sans leading-relaxed mb-10 italic"
          >
            "Handmade pasta, time-honored recipes, and the warmth of an Italian family table — served Thursday through Saturday in the heart of historic Ybor City."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 bg-gradient-to-r from-gold to-terracotta rounded-sm text-white font-bold uppercase tracking-widest text-[11px] shadow-lg shadow-terracotta/10"
            >
              Reserve Your Table
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "var(--color-cream)", color: "var(--color-charcoal)" }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 border border-cream text-cream rounded-sm uppercase tracking-widest text-[11px] transition-all"
            >
              View Menu
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <div className="bg-espresso/80 backdrop-blur-md border border-gold/20 px-5 py-2.5 rounded-full flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold shadow-[0_0_8px_var(--color-gold)]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-cream">
                Open Thu · Fri · Sat from 5 PM
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-3 h-3 text-gold" />)}
              </div>
              <span className="text-xs text-cream/70 font-medium">4.8 · 650 reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (40%) - Specialties Card */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:col-span-2 hidden lg:block"
        >
          <div className="bg-espresso/90 backdrop-blur-xl border border-gold/10 p-12 rounded-sm relative overflow-hidden shadow-2xl">
            {/* Background Quote Mark */}
            <div className="absolute top-4 right-4 opacity-5 text-gold scale-150">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 14.691 16.708 12 20.017 12L20.017 7C14.494 7 10.017 11.477 10.017 17L10.017 21L14.017 21ZM4 21L4 18C4 14.691 6.691 12 10 12L10 7C4.477 7 0 11.477 0 17L0 21L4 21Z" />
              </svg>
            </div>

            <div className="text-center mb-10">
              <span className="text-[10px] uppercase tracking-widest-plus text-gold font-bold">Nostra Cucina</span>
              <h2 className="text-3xl font-serif text-cream mt-2 tracking-tight">House Specialties</h2>
            </div>

            <div className="space-y-8">
              {specialties.map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="text-base font-medium text-cream group-hover:text-gold transition-colors duration-300">{item.name}</h3>
                    <div className="flex-1 border-b border-gold/10 border-dotted" />
                    <span className="text-gold font-serif">{item.price}</span>
                  </div>
                  <p className="text-[11px] text-cream/40 mt-1.5 italic leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gold/10 text-center">
              <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-2 italic">"Best Italian in Tampa since day one"</p>
              <div className="text-[11px] text-cream/80 font-medium">— William Davis, Local Guide</div>
            </div>
          </div>
        </motion.aside>

      </div>

      {/* Floating Blobs (Refined) */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="glow-blob w-[600px] h-[600px] bg-gold -top-32 -left-32 opacity-10" />
        <div className="glow-blob w-[700px] h-[700px] bg-terracotta -bottom-32 -right-32 opacity-15" />
      </div>

    </section>
  );
}
