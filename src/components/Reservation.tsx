/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Ornament, ClockIcon, MapPinIcon, PhoneIcon } from './Icons';

export default function Reservation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    { day: "Thursday", status: "Open", dots: true },
    { day: "Friday", status: "Open", dots: true },
    { day: "Saturday", status: "Open", dots: true },
    { day: "Sunday", status: "Closed", dots: false },
    { day: "Monday", status: "Closed", dots: false },
    { day: "Tuesday", status: "Closed", dots: false },
    { day: "Wednesday", status: "Closed", dots: false },
  ];

  return (
    <section id="reserve" className="py-24 relative overflow-hidden bg-charcoal">
       {/* Background Decoration */}
       <div 
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none grayscale"
        style={{ 
          backgroundImage: 'url("https://i.ibb.co/VYJT35Jn/4-X-la-terrazza-tampa-fl-1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           ref={ref}
           className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest-plus text-gold font-bold mb-4 block">Join Our Table</span>
          <h2 className="text-6xl md:text-7xl text-cream font-serif font-bold mb-6 italic">Reservations</h2>
          <Ornament />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col gap-10"
          >
            <div>
              <p className="text-gold/60 uppercase tracking-widest text-[10px] mb-4">By Phone</p>
              <motion.a
                href="tel:+18132481326"
                whileHover={{ x: 8, color: "var(--color-cream)" }}
                className="text-4xl md:text-5xl font-serif text-gold transition-colors duration-300 inline-block"
              >
                +1 (813) 248-1326
              </motion.a>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <ClockIcon className="text-gold" />
                </div>
                <div>
                  <p className="text-cream font-medium tracking-tight">Thursday — Saturday</p>
                  <p className="text-cream/50 text-sm">Dinner service from 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <MapPinIcon className="text-gold" />
                </div>
                <div>
                  <p className="text-cream font-medium tracking-tight">1727 E 7th Avenue</p>
                  <p className="text-cream/50 text-sm">Ybor City, Tampa, FL 33605</p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-8 bg-gold/5 border border-gold/20 rounded-2xl">
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-3">Good to Know</p>
              <p className="text-cream/70 text-sm leading-relaxed italic">
                "We do not have a kids' menu or high chairs. Our dining room is intimate by design — perfect for adults seeking an elevated evening."
              </p>
            </div>
          </motion.div>

          {/* Right Column - Schedule Grid */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="bg-walnut/20 border border-gold/10 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <p className="text-gold/60 uppercase tracking-widest text-[10px] mb-8 text-center italic">This Week's Availability</p>
            <div className="flex flex-col gap-4 mb-10">
              {schedule.map((slot, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-gold/5 last:border-0">
                  <span className={`text-sm tracking-wide ${slot.dots ? "text-cream" : "text-cream/30"}`}>{slot.day}</span>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] uppercase font-bold tracking-widest ${slot.dots ? "text-gold" : "text-cream/20"}`}>
                      {slot.status}
                    </span>
                    {slot.dots && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,168,83,0.6)]" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-gold to-terracotta rounded-sm text-charcoal font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-terracotta/10"
            >
              <PhoneIcon className="w-4 h-4" />
              Call to Reserve
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
