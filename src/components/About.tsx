// src/components/About.tsx

import {
  MapPin,
  Landmark,
  TrendingUp,
  Building2,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from "framer-motion";
import artwork from '../assets/artwork.jpeg';

const About = () => {

  const highlights = [
    "Spacious 3 & 4 BHK + Study Layouts",
    "Dedicated servant room with basement & terrace space",
    "Premium finishes with modern architecture",
    "Families who prefer privacy over high rise density",
  ];

  const investmentUSPs = [
    {
      title: "Fully Developed Location",
      icon: MapPin,
      focus: "Sector 51, Gurugram",
      description:
        "One of Gurugram’s most established residential micro-markets with strong social infrastructure.",
      color: "bg-blue-50 border-blue-100 text-blue-700"
    },
    {
      title: "Strong Rental & Appreciation",
      icon: TrendingUp,
      focus: "High Investment Potential",
      description:
        "Premium sector with consistent capital growth and excellent rental demand.",
      color: "bg-orange-50 border-orange-100 text-orange-700"
    },
    {
      title: "Exclusive Independent Living",
      icon: Building2,
      focus: "Privacy & Luxury",
      description:
        "Independent floors designed for families who prefer exclusivity over high-rise crowding.",
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
              Premium Independent Floor Living
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 leading-tight">
  Orchid IVY,{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">
    Sector 51, Gurugram
  </span>
</h2>

          <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto">          Experience Premium Independent Living in one of Gurugram’s most established Residential Sectors 
          <br /> -- Designed for modern families who seek space, privacy and long-term value--
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
              A Lifestyle Upgrade in a Fully Developed Neighbourhood
            </h3>

            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Orchid IVY brings limited-edition Independent Floors at Sector 51 —
              surrounded by leading Hospitals, Schools and Business Hubs.
           <br />   This is not just a home — it’s a private lifestyle upgrade!
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

          {/* Right Image Section (Fixed for 1080x1080) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="relative z-10 p-4 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl">

              {/* Square Container for 1080x1080 */}
              <div className="rounded-[2rem] overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img
                  src={artwork}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  alt="Orchid IVY - Premium Independent Floors, Sector 51 Gurugram"
                />
              </div>

            </div>

            {/* Decorative Background */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-yellow-100 rounded-[2.5rem] -z-0"></div>

            <div className="absolute top-8 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">
                Premium Floors
              </p>
              <p className="text-xl font-black text-slate-900">
                Limited Inventory
              </p>
            </div>

          </motion.div>
        </div>

        {/* Investment USPs */}


      </div>
    </section>
  );
};

export default About;