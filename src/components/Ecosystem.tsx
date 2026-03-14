// src/components/Ecosystem.tsx

import { motion } from "framer-motion";
import {
  Theater,
  Utensils,
  School,
  Hospital,
} from "lucide-react";

import video from "@/assets/video.mp4";
import bgImage from "@/assets/patners/bg.png";

const retailFeatures = [
  "Ground & First Floor High-Street Retail",
  "Anchor Stores & Multiplex",
  "Family Entertainment Zone",
  "Clubhouse Provision",
  "Sky Swimming Pool & Sky Deck (5th & 6th Floor)",
  "Perfect for F&B, Restaurants, Cafés, Banks & Showrooms",
];

const institutions = [
  "AIIMS Jhajjar",
  "Signature Hospital",
  "SGT Medical College Hospital & Research Institute",
  "Sheetla Mata Medical College",
  "Delhi Public School",
  "HSV International School",
];

const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      className="py-24 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-black">A Complete </span>
            <span className="text-[#F77714]">Ecosystem</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            OCUS Medley brings together retail, workspaces and entertainment
            within one integrated commercial destination on Dwarka Expressway.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
<video
  src={video}
  controls
  preload="metadata"
  className="w-full h-[650px] object-cover rounded-2xl"
/>


          </motion.div>

          {/* Cards */}
          <div className="space-y-8">

            {/* Retail */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Theater className="text-[#F77714]" size={30} />
                <h3 className="text-xl font-bold">
                  Retail & Entertainment Hub
                </h3>
              </div>

              <ul className="space-y-3 text-gray-700">
                {retailFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Utensils size={18} className="text-[#F77714] mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Institutions */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Hospital className="text-[#F77714]" size={30} />
                <h3 className="text-xl font-bold">
                  Nearby Institutions
                </h3>
              </div>

              <ul className="space-y-3 text-gray-700">
                {institutions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <School size={18} className="text-[#F77714] mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Ecosystem;