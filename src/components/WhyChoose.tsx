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
            Orchid IVY?
          </span>
        </h3>

        {/* Main Content Card */}
        <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14 border border-gray-100">

          {/* Bullet Points */}
          <div className="space-y-4 mb-12">
            <p className="font-semibold text-lg text-gray-800">
              ✓ Premium Independent Floor Living
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Located in Fully Developed Sector 51
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Excellent Rental & Appreciation Potential
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Ideal for End-Users & Investors
            </p>
            <p className="font-semibold text-lg text-gray-800">
              ✓ Limited Inventory Available
            </p>
          </div>

          {/* Prime Location Section */}
          <div className="border-t pt-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Prime Location Advantage
            </h4>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Strategically located for effortless connectivity:
            </p>

            <ul className="space-y-3 text-gray-700 font-medium mb-8">
              <li>🏥 Just 3 km from Medanta</li>
              <li>🏫 Only 500 m from Amity International School</li>
              <li>💼 3 km from Unitech Cyber Park</li>
              <li>🚇 3 km from Upcoming Metro Station – Sector 40</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-6">
              Live close to top healthcare, reputed schools, business hubs,
              and future infrastructure growth.
            </p>

            <p className="text-gray-700 font-semibold leading-relaxed">
              Sector 51 is a fully developed micro-market with strong capital
              appreciation trends, making Orchid IVY a compelling lifestyle
              and investment asset for buyers.
            </p>

            <p className="mt-4 text-yellow-600 font-bold">
              Limited inventory. Select ownership.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;