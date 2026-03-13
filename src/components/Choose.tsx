// src/components/Choose.tsx

import { motion } from "framer-motion";
import { MapPin, Users, Eye, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MapPin,
    text: "Prime frontage on India’s widest expressway",
  },
  {
    icon: Users,
    text: "Located amidst high-income residential communities",
  },
  {
    icon: Eye,
    text: "Strong visibility and consistent footfall potential",
  },
  {
    icon: TrendingUp,
    text: "Modern infrastructure built for future growth",
  },
];

const Choose = () => {
  return (
    <section className="py-24 bg-gray-50" id="why-ocus">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-black">Why Choose </span>
            <span className="text-[#F77714]">Ocus Medley?</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover why OCUS Medley stands out as one of the most promising
            commercial investment destinations on Dwarka Expressway.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#F77714]/10 mb-6">
                  <Icon size={28} className="text-[#F77714]" />
                </div>

                <p className="text-gray-700 font-semibold leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Choose ;