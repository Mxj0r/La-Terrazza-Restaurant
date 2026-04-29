/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { StarIcon } from './Icons';

interface Review {
  quote: string;
  author: string;
  role: string;
  initials: string;
  gradient: string;
}

const reviews: Review[] = [
  {
    quote: "The food transported me straight to Italy. Every bite was a revelation — the flavors, the textures, the love that goes into each dish. This is the real thing.",
    author: "Kyle Dowling",
    role: "Local Guide · 193 reviews",
    initials: "KD",
    gradient: "from-amber-600 to-orange-700"
  },
  {
    quote: "I can say without hesitation this is the best Italian restaurant in Tampa. The homemade pasta alone is worth the trip. Reservations are an absolute must.",
    author: "William Davis",
    role: "Local Guide · 13 reviews",
    initials: "WD",
    gradient: "from-rose-700 to-red-900"
  },
  {
    quote: "Luigi treated us like family from the moment we walked in. The fettuccine bolognese was extraordinary — rich, silky, perfect. We'll be back every week.",
    author: "Drs. T & N Weeks",
    role: "Weekly Regulars",
    initials: "TW",
    gradient: "from-violet-700 to-purple-900"
  },
  {
    quote: "Best Italian I've had since leaving Rome. The lobster ravioli was extraordinary — light, delicate, extraordinary. This is authentic Northern Italian at its finest.",
    author: "Beki Imbeault",
    role: "Local Guide · 96 reviews",
    initials: "BI",
    gradient: "from-emerald-700 to-green-900"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-charcoal to-espresso border-t border-gold/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Guest Experiences</span>
          <h2 className="text-5xl font-serif text-cream italic">Words from Our Guests</h2>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -4, borderColor: "rgba(212, 168, 83, 0.4)" }}
              className="relative p-10 bg-cream/5 backdrop-blur-sm border border-gold/10 rounded-2xl transition-colors duration-500"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-8 text-gold opacity-10 select-none">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.899 15.011 15 16.495 15C17.24 15 17.8 15.42 18.064 16C18.411 16.762 18.232 17.653 17.781 18.33C17.433 18.847 16.924 19.143 16.417 19.143C15.867 19.143 15.419 18.857 15.118 18.423M14.017 21C12.877 21 12.017 20.1 12.017 19C12.017 17.5 13.517 15 16.017 15C16.017 13.5 14.517 12 12.017 12V3H21V12C21 16.5 18 21 14.017 21ZM5.017 21L5.017 18C5.017 16.899 6.011 15 7.495 15C8.24 15 8.8 15.42 9.064 16C9.411 16.762 9.232 17.653 8.781 18.33C8.433 18.847 7.924 19.143 7.417 19.143C6.867 19.143 6.419 18.857 6.118 18.423M5.017 21C3.877 21 3.017 20.1 3.017 19C3.017 17.5 4.517 15 7.017 15C7.017 13.5 5.517 12 3.017 12V3H12V12C12 16.5 9 21 5.017 21Z" />
                </svg>
              </div>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-3 h-3 text-gold" />)}
              </div>

              <p className="font-serif italic text-cream/70 text-lg leading-relaxed mb-8">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-cream font-bold text-sm shadow-inner`}>
                  {review.initials}
                </div>
                <div>
                  <p className="text-cream font-medium tracking-tight">{review.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold/60 font-sans">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
