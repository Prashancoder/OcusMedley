import React from "react";
import videoSource from "@/assets/video.mp4";

const Projects = () => {
  return (
    <section className="py-24 bg-gray-50" id="projects">

      {/* Section Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-black">Location </span>
          <span style={{ color: "#F77714" }}>Advantage!</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl">
          Discover the strategic location benefits and connectivity that make
          OCUS Medley a prime commercial destination in Gurugram.
        </p>

        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-5 rounded-full"></span>
      </div>

      {/* 3 Column Layout */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* 1️⃣ VIDEO REEL */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">

          <video
            src={videoSource}
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />

        </div>


        {/* 2️⃣ Prime Location */}
        <div className="bg-white shadow-2xl rounded-3xl p-8">

          <h3 className="text-xl font-bold mb-4">
            Prime Location in a{" "}
            <span style={{ color: "#F77714" }}>Thriving Catchment</span>
          </h3>

          <p className="text-gray-600 mb-6 text-sm">
            Located in one of Gurugram’s fastest-evolving growth corridors,
            Galleria 99 is surrounded by a strong and affluent residential
            ecosystem.
          </p>

          <div className="space-y-3 text-sm">

            <div className="flex gap-2">
              <span className="text-green-600">✔</span>
              <p>1,00,000+ High Net-Worth Families</p>
            </div>

            <div className="flex gap-2">
              <span className="text-green-600">✔</span>
              <p>50+ Residential Developments</p>
            </div>

            <div className="flex gap-2">
              <span className="text-green-600">✔</span>
              <p>10+ Landmark Luxury Projects</p>
            </div>

            <div className="flex gap-2">
              <span className="text-green-600">✔</span>
              <p>Dense Premium Neighborhood</p>
            </div>

          </div>

        </div>


        {/* 3️⃣ Connectivity */}
        <div className="bg-white shadow-2xl rounded-3xl p-8">

          <h3 className="text-xl font-bold mb-4">
            Exceptional <span style={{ color: "#F77714" }}>Connectivity</span>
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between border-b pb-2">
              <span>IGI Airport</span>
              <span>15–20 Min</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Convention Centre</span>
              <span>10 Min</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Diplomatic Enclave II</span>
              <span>12 Min</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Dwarka Expressway</span>
              <span>Direct</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Gurgaon Railway</span>
              <span>10 Min</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;