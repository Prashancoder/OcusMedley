// src/components/Ecosystem.tsx
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Theater,
  Utensils,
  School,
  Hospital,
  Volume2,
  VolumeX,
} from "lucide-react";

import videoSource from "@/assets/video.mp4";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });
  
  // State to manage volume
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((err) => console.log("Playback error:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  // Function to toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
          
          {/* Video Section with Mute/Unmute Toggle */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl bg-black group"
          >
            <video
              ref={videoRef}
              src={videoSource}
              muted={isMuted} // Control mute via state
              loop
              playsInline
              preload="auto"
              className="w-full h-[400px] md:h-[650px] object-cover rounded-2xl"
            />
            
            {/* Custom Mute Button Overlay */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 p-3 bg-black/60 hover:bg-[#F77714] text-white rounded-full transition-all duration-300 backdrop-blur-sm"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
          </motion.div>

          {/* Cards */}
          <div className="space-y-8">
            {/* Retail Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Theater className="text-[#F77714]" size={30} />
                <h3 className="text-xl font-bold">Retail & Entertainment Hub</h3>
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

            {/* Institutions Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Hospital className="text-[#F77714]" size={30} />
                <h3 className="text-xl font-bold">Nearby Institutions</h3>
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