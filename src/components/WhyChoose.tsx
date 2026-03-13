// src/components/WhyChoose.tsx

import { motion } from "framer-motion";
import {
  Plane,
  Building2,
  Globe,
  Route,
  Train,
  Map,
} from "lucide-react";

const features = [
  {
    icon: Plane,
    text: "Indira Gandhi International Airport – 15–20 Minutes",
  },
  {
    icon: Building2,
    text: "India International Convention & Expo Centre (IICC) – 10 Minutes",
  },
  {
    icon: Globe,
    text: "Diplomatic Enclave II – 12 Minutes",
  },
  {
    icon: Route,
    text: "Direct Access from Dwarka Expressway",
  },
  {
    icon: Train,
    text: "Gurgaon Railway Station – 10 Minutes",
  },
  {
    icon: Map,
    text: "NH-48 (Delhi–Jaipur Highway) – 10 Minutes",
  },
  {
    icon: Route,
    text: "Central Peripheral Road – 12 Minutes",
  },
];

const WhyChoose = () => {
  return (
    <motion.section
      id="why-choose"
      className="py-24 bg-gray-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-black">Exceptional </span>
            <span style={{ color: "#F77714" }}>Connectivity</span>
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Positioned directly on Dwarka Expressway — a 29 km signal-free
            corridor linking Delhi and Gurugram — ensuring excellent
            accessibility and connectivity to major landmarks.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F77714]/10 mb-4">
                  <Icon className="text-[#F77714]" size={26} />
                </div>

                <p className="text-gray-700 font-semibold leading-relaxed text-sm">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </motion.section>
  );
};

export default WhyChoose;