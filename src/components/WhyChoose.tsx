// src/components/WhyChoose.tsx
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <motion.section
      id="why-choose"
      className="py-24 bg-background"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          OCUS MEDLEY{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Features
          </span>
        </h3>

        {/* Main Content Card */}
        <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14 border border-gray-100">

          {/* Bullet Points */}
          <div className="space-y-4">

            <p className="font-semibold text-lg text-gray-800">
              ✓ One of the Biggest Commercial on Dwarka Expressway
            </p>

            <p className="font-semibold text-lg text-gray-800">
              ✓ Outdoor Patio, Water bodies & Amphitheater area
            </p>

            <p className="font-semibold text-lg text-gray-800">
              ✓ High Speed Escalators and Elevators
            </p>

            <p className="font-semibold text-lg text-gray-800">
              ✓ Multi Level Car Parking & Ample Visitor Parking at Surface
            </p>

            <p className="font-semibold text-lg text-gray-800">
              ✓ 24*7 Security Surveillance
            </p>

            <p className="font-semibold text-lg text-gray-800">
              ✓ 100% Power Backup
            </p>

            <p className="font-semibold text-lg text-gray-800">
              ✓ Huge Atrium Area
            </p>

            <p className="font-semibold text-lg text-gray-800">
              ✓ Ample Surface and Basement Parking
            </p>

          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;