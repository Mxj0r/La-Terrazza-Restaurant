/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MapPinIcon, ClockIcon, DollarIcon } from './Icons';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoRows = [
    { 
      icon: <MapPinIcon className="w-5 h-5 text-gold" />, 
      content: "1727 E 7th Avenue / Ybor City · Tampa, FL 33605" 
    },
    { 
      icon: <ClockIcon className="w-5 h-5 text-gold" />, 
      content: "Thu · Fri · Sat Evenings / Reservations recommended" 
    },
    { 
      icon: <DollarIcon className="w-5 h-5 text-gold" />, 
      content: "$20–$30 per person / Dine-in · Takeaway · Delivery" 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-walnut/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Column */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Find Us</span>
            <h2 className="text-5xl md:text-6xl text-cream font-serif font-bold leading-tight mb-8">
              Ybor City, <br />
              <span className="text-gold italic">Tampa's Living Museum</span>
            </h2>
            
            <p className="text-cream/70 text-lg leading-relaxed font-sans mb-12">
              Located on historic 7th Avenue, La Terrazza sits at the intersection of Old World charm and tropical vibrance. Ybor City's red-brick streets and iron balconies provide the perfect backdrop for our intimate Italian escape.
            </p>

            <div className="space-y-6">
              {infoRows.map((row, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    {row.icon}
                  </div>
                  <span className="text-cream/80 text-sm tracking-wide leading-snug">{row.content}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Column */}
          <div className="relative">
            <motion.div 
              initial={{ rotate: -2, opacity: 0, scale: 0.95 }}
              animate={isInView ? { rotate: -1, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="p-3 bg-warmWhite rounded-2xl shadow-2xl relative z-10"
            >
              <div className="aspect-square w-full rounded-lg overflow-hidden bg-cream grayscale contrast-125 sepia-[0.3]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.613917457223!2d-82.4402636!3d27.9602517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c49e75555555%3A0x7555555555555555!2s1727%20E%207th%20Ave%2C%20Tampa%2C%20FL%2033605!5e0!3m2!1sen!2sus!4v1714400000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="py-6 text-center">
                 <p className="font-serif text-espresso text-lg tracking-tight">1727 E 7th Ave · Ybor City</p>
                 <p className="text-[10px] uppercase tracking-widest text-espresso/40 font-bold">Tampa, Florida</p>
              </div>
            </motion.div>

            {/* Parking Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 bg-charcoal border border-gold/10 rounded-xl relative z-0"
            >
              <p className="text-gold/60 uppercase tracking-widest text-[10px] mb-2 font-bold">Parking Note</p>
              <p className="text-cream/60 text-xs leading-relaxed">
                Street parking is available along 7th Ave and adjacent red-brick streets. Public garages are located within 2 blocks of the restaurant.
              </p>
            </motion.div>

            {/* Decorative Polish */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-[80px] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
