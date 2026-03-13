import React from "react";

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

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - Prime Location */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-12">

          <h3 className="text-2xl font-bold mb-6">
            Prime Location in a{" "}
            <span style={{ color: "#F77714" }}>Thriving Catchment</span>
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Located in one of Gurugram’s fastest-evolving growth corridors,
            Galleria 99 is surrounded by a strong and affluent residential
            ecosystem.
          </p>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <p>1,00,000+ High Net-Worth Families</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <p>50+ Residential Developments</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <p>10+ Landmark Luxury Projects</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <p>Dense Premium Neighborhood</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <p>Excellent Footfall from New Gurgaon & Established City Zones</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE - Connectivity */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-12">

          <h3 className="text-2xl font-bold mb-6">
            Exceptional <span style={{ color: "#F77714" }}>Connectivity</span>
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Positioned directly on Dwarka Expressway — a 29 km signal-free
            corridor connecting Delhi and Gurugram — ensuring excellent
            accessibility and visibility.
          </p>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">
                Indira Gandhi International Airport
              </span>
              <span className="font-medium">15–20 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">
                India International Convention & Expo Centre
              </span>
              <span className="font-medium">10 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">
                Diplomatic Enclave II
              </span>
              <span className="font-medium">12 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">
                Dwarka Expressway
              </span>
              <span className="font-medium">Direct Access</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">
                Gurgaon Railway Station
              </span>
              <span className="font-medium">10 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">
                NH-48 (Delhi–Jaipur Highway)
              </span>
              <span className="font-medium">10 Minutes</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">
                Central Peripheral Road
              </span>
              <span className="font-medium">12 Minutes</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;