/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Ornament } from './Icons';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory = ({ title, items }: MenuCategoryProps) => (
  <div className="flex flex-col gap-8">
    <h3 className="text-2xl font-serif text-gold border-b border-gold/20 pb-3 uppercase tracking-[0.15em]">{title}</h3>
    <div className="flex flex-col gap-8">
      {items.map((item, idx) => (
        <div key={idx} className="group">
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-lg font-medium text-cream group-hover:text-gold transition-colors duration-300">{item.name}</span>
            <div className="flex-1 border-b border-gold/5 mx-4 border-dotted" />
            <span className="font-serif text-gold">{item.price}</span>
          </div>
          <p className="text-xs text-cream/40 font-sans tracking-wide">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const menuData = {
    antipasti: [
      { name: "Bruschetta Rustica", price: "$14", description: "Grilled ciabatta, vine-ripened tomatoes, fresh basil, garlic, extra-virgin olive oil" },
      { name: "Antipasto Vegetale", price: "$18", description: "Roasted peppers, artichoke hearts, olives, sun-dried tomatoes, aged cheeses" },
      { name: "Prosciutto & Burrata", price: "$22", description: "San Daniele prosciutto, creamy burrata, arugula, aged balsamic" },
      { name: "Cozze al Pomodoro", price: "$19", description: "Fresh mussels in San Marzano tomato broth, garlic, white wine, herbs" },
    ],
    pastaFresca: [
      { name: "Ravioli al Pomodoro", price: "$26", description: "Handmade tomato-burrata ravioli, fresh basil, brown butter sage" },
      { name: "Fettuccine Bolognese", price: "$28", description: "Wide ribbon pasta, slow-cooked beef & pork ragù, parmigiano-reggiano" },
      { name: "Linguine al Pesto", price: "$25", description: "Fresh basil pesto, pinenuts, garlic, parmesan, Ligurian olive oil" },
      { name: "Agnolotti di Aragosta", price: "$34", description: "Lobster & crab stuffed pasta, light cream sauce, shrimp, asparagus" },
    ],
    secondi: [
      { name: "Branzino Siciliana", price: "$42", description: "Whole grilled Mediterranean sea bass, lemon, capers, herbs, roasted potatoes" },
      { name: "Scaloppine Piccata", price: "$38", description: "Veal cutlets, capers, lemon, white wine butter sauce, saffron risotto" },
      { name: "Chicken Parmigiana", price: "$29", description: "Pan-roasted chicken breast, San Marzano tomato sauce, melted mozzarella" },
      { name: "Osso Buco", price: "$44", description: "Braised veal shank, gremolata, saffron polenta, rich braising jus" },
    ],
    dolci: [
      { name: "Tiramisu della Casa", price: "$12", description: "Classic Italian layers, mascarpone, espresso-soaked savoiardi, cocoa" },
      { name: "Cannoli Siciliani", price: "$11", description: "Crisp pastry shells, sweet ricotta, pistachios, chocolate chips" },
      { name: "Ricotta Cheesecake", price: "$12", description: "" },
      { name: "Chocolate Mousse", price: "$10", description: "" },
    ]
  };

  return (
    <section id="menu" className="py-24 relative bg-charcoal overflow-hidden">
      {/* Texture Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=1200")',
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
           className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest-plus text-gold font-bold mb-4 block">Our Kitchen</span>
          <h2 className="text-6xl md:text-7xl text-cream font-serif font-bold mb-6 italic tracking-tight">Nostra Cucina</h2>
          <Ornament />
          <p className="mt-8 text-cream/50 uppercase tracking-widest-max text-[10px]">Handcrafted & Served Fresh Every Evening</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          <MenuCategory title="Antipasti" items={menuData.antipasti} />
          <MenuCategory title="Pasta Fresca" items={menuData.pastaFresca} />
          <MenuCategory title="Secondi" items={menuData.secondi} />
          <MenuCategory title="Dolci" items={menuData.dolci} />
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ delay: 0.8 }}
           className="mt-20 pt-16 border-t border-gold/10 flex flex-col items-center gap-6"
        >
          <p className="text-cream/40 text-sm italic tracking-widest">"View Full Menu In-Restaurant · Prices Per Person"</p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "var(--color-gold)", color: "var(--color-charcoal)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border border-gold rounded-sm text-gold font-bold uppercase tracking-widest text-[11px] transition-all"
          >
            Make a Reservation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
