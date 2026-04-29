/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Ornament, StarIcon } from './Icons';

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="story" className="py-24 bg-espresso/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&q=80&w=800" 
                alt="Pasta making at La Terrazza"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </div>
            
            {/* Review Card Overlay */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={isInView ? { scale: 1, opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 md:right-6 bg-charcoal/90 backdrop-blur-md border border-gold/20 p-6 rounded-xl shadow-2xl max-w-[200px]"
            >
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-3 h-3 text-gold" />)}
              </div>
              <p className="font-serif text-cream text-lg mb-1 tracking-tight">650+ Five-Star Reviews</p>
              <p className="text-[10px] uppercase tracking-widest text-gold/60 font-sans">Ybor City's Choice</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Our Story</span>
            <h2 className="text-5xl md:text-6xl text-cream font-serif font-bold leading-tight mb-6">
              A Family Table / <span className="text-gold">Since Day One</span>
            </h2>
            
            <div className="mb-8 overflow-hidden">
               <Ornament className="justify-start opacity-40" />
            </div>

            <div className="space-y-6 text-cream/70 text-lg leading-relaxed font-sans mb-10">
              <p>
                In the heart of historic Ybor City, La Terrazza represents more than just a menu—it's a living heritage of Northern Italian tradition. Under the guidance of Luigi and his family, every morning begins with the patient crafting of fresh pasta and slow-simmered sauces that have been passed down through generations.
              </p>
              <p>
                We believe in the luxury of slow dining. In our candlelit dining room, time pauses for handmade ravioli, carefully selected Italian wines, and the sounds of laughter shared over a table of authentic Italian soul food.
              </p>
            </div>

            {/* Owner Callout */}
            <div className="flex items-center gap-5 pt-6 border-t border-gold/10">
              <div className="w-14 h-14 rounded-full bg-walnut border border-gold/20 flex items-center justify-center font-serif text-2xl text-gold shadow-lg shadow-black/40">
                L
              </div>
              <div>
                <p className="font-serif text-xl text-cream">Luigi & Family</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-bold font-sans">Owners, La Terrazza</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
