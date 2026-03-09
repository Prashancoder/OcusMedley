// src/components/WhyChoose.tsx

import { motion } from "framer-motion";
import {
  Building2,
  ParkingCircle,
  ShieldCheck,
  Zap,
  Landmark,
  Theater,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    text: "One of the Biggest Commercial on Dwarka Expressway",
  },
  {
    icon: Theater,
    text: "Outdoor Patio, Water bodies & Amphitheater area",
  },
  {
    icon: Zap,
    text: "High Speed Escalators and Elevators",
  },
  {
    icon: ParkingCircle,
    text: "Multi Level Car Parking & Ample Visitor Parking at Surface",
  },
  {
    icon: ShieldCheck,
    text: "24*7 Security Surveillance",
  },
  {
    icon: Zap,
    text: "100% Power Backup",
  },
  {
    icon: Landmark,
    text: "Huge Atrium Area",
  },
  {
    icon: ParkingCircle,
    text: "Ample Surface and Basement Parking",
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
            <span className="text-black">OCUS </span>
            <span style={{ color: "#F77714" }}>MEDLEY</span>{" "}
            <span className="text-slate-900">Features</span>
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore the premium features and facilities offered at OCUS MEDLEY,
            designed to create a vibrant commercial destination.
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