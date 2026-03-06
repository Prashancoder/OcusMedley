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
          Why Choose{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            OCUS MEDLEY?
          </span>
        </h3>

        {/* Main Content Card */}
        <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14 border border-gray-100">

          {/* Bullet Points */}
          <div className="space-y-4 mb-12">
            <p className="font-semibold text-lg text-gray-800">
              ✓ Prime Location on Dwarka Expressway
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Surrounded by 50+ Residential Projects
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Catchment of 1,00,000+ Affluent Families
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ High Footfall Retail & Entertainment Hub
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Multiplex, Restaurants & Family Entertainment
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Grade A Office Spaces for Businesses
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Excellent Rental & Capital Appreciation Potential
            </p>
          </div>

          {/* Location Advantage Section */}
          <div className="border-t pt-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Strategic Location Advantage
            </h4>

            <p className="text-gray-600 mb-6 leading-relaxed">
              OCUS MEDLEY enjoys a strategic position on Dwarka Expressway,
              one of NCR’s fastest growing commercial corridors.
            </p>

            <ul className="space-y-3 text-gray-700 font-medium mb-8">
              <li>🚗 Located on 29 KM Signal-Free Dwarka Expressway</li>
              <li>🏙 Surrounded by 50+ Premium Residential Projects</li>
              <li>👨‍👩‍👧‍👦 Catchment of 1 Lakh+ High-Income Families</li>
              <li>✈️ Excellent connectivity to IGI Airport & Delhi</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-6">
              The project is positioned to attract strong retail demand,
              entertainment footfall and office occupancy from the rapidly
              developing Dwarka Expressway micro-market.
            </p>

            <p className="text-gray-700 font-semibold leading-relaxed">
              With growing residential density and infrastructure development,
              OCUS MEDLEY offers an exceptional opportunity for retail brands,
              businesses and investors seeking long-term value.
            </p>

            <p className="mt-4 text-yellow-600 font-bold">
              Limited commercial investment opportunities available.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;