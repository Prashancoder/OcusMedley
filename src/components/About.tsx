// src/components/About.tsx

import {
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion } from "framer-motion";
import artwork from '../assets/artwork.jpeg';

const About = () => {

  const highlights = [
    "Mega Mixed Commercial High Street Retail (Ready to Move)",
    "Retail Shops, 3 screen Multiplex, Food Court, Restaurants, Family Entertainment Zone, Office Space, Restaurants & Restrobars",
    "Pre Leased and self Use Lockable units",
    "Surrounded by more than 50000 Apartments",
    "Nearly 4 Lacs Families already Residing nearby",
    "Spread over Approx 4.14 Acres",
    "Dedicated Anchor spaces",
    "Low maintenance module",
  ];

  return (
    <section id="about" className="relative pt-24 pb-20 bg-[#f8fafc] overflow-hidden">

      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-yellow-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-yellow-600 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              OCUS MEDLEY
            </span>
          </div>

          {/* Improved Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            <span className="text-slate-900">Mega Mixed </span>
            <span style={{ color: "#EA7910" }}>
              Commercial High Street Retail
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto">
            Retail Shops, 3 screen Multiplex, Food Court, Restaurants,
            Family Entertainment Zone, Office Space, Restaurants & Restrobars.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6 text-slate-900">
              Project Highlights
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#EA7910] flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

{/* Right Image Section */}
<motion.div
  className="relative flex justify-center"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <div className="relative z-10 p-4 rounded-[2rem] bg-white border border-slate-200 shadow-2xl max-w-lg w-full">

    <div className="rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <img
        src={artwork}
        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
        alt="OCUS MEDLEY Dwarka Expressway Gurugram"
      />
    </div>

  </div>

  <div className="absolute -top-6 -right-6 w-[420px] h-[420px] bg-yellow-100 rounded-[2rem] -z-0"></div>

</motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;