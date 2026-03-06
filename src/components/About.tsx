// src/components/About.tsx

import {
  MapPin,
  TrendingUp,
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion } from "framer-motion";
import artwork from '../assets/artwork.jpeg';

const About = () => {

  const highlights = [
    "Premium Retail Shops & High-Street Retail Experience",
    "Multiplex, Food Court & Entertainment Zones",
    "Premium Office Spaces for Modern Businesses",
    "Strategically located on Dwarka Expressway growth corridor",
  ];

  const investmentUSPs = [
    {
      title: "Prime Commercial Location",
      icon: MapPin,
      focus: "Sector 99, Dwarka Expressway",
      description:
        "Located on the fast-growing Dwarka Expressway surrounded by large residential catchments and upcoming infrastructure.",
      color: "bg-blue-50 border-blue-100 text-blue-700"
    },
    {
      title: "High Investment Potential",
      icon: TrendingUp,
      focus: "Strong Footfall & Demand",
      description:
        "Surrounded by 50+ residential projects and over 1 lakh families ensuring consistent retail and commercial demand.",
      color: "bg-orange-50 border-orange-100 text-orange-700"
    },
    {
      title: "Retail + Entertainment Hub",
      icon: Building2,
      focus: "Business Destination",
      description:
        "A modern commercial hub combining retail, restaurants, multiplex and office spaces under one iconic destination.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-700"
    }
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
              Premium Commercial Destination
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 leading-tight">
            OCUS MEDLEY,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">
              Sector 99, Gurugram
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto">
            Experience a next-generation commercial development designed for
            retail brands, businesses and investors looking for long-term growth.
            <br />
            Strategically located on Dwarka Expressway, OCUS Medley brings together
            high street retail, entertainment zones, multiplex, restaurants and
            premium office spaces under one iconic address.
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
              A Landmark Commercial Hub on Dwarka Expressway
            </h3>

            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              OCUS MEDLEY is a premium commercial development designed to
              redefine retail and business experiences in Gurugram.
              <br />
              Developed by OCUS Group, known for delivering landmark commercial
              projects across NCR.
              <br />
              This is not just a commercial project —
              it’s a complete lifestyle and business destination.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 mt-1">
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
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="relative z-10 p-4 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl">

              <div className="rounded-[2rem] overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img
                  src={artwork}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  alt="OCUS MEDLEY - Premium Commercial Project Sector 99 Dwarka Expressway Gurugram"
                />
              </div>

            </div>

            <div className="absolute -top-6 -right-6 w-full h-full bg-yellow-100 rounded-[2.5rem] -z-0"></div>

            <div className="absolute top-8 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">
                Commercial Hub
              </p>
              <p className="text-xl font-black text-slate-900">
                High Investment Potential
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;