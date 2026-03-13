import React from 'react';

const Projects = () => {
  return (
    <section className="py-24 bg-gray-50" id="projects">
      
      {/* Section Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-black">Exceptional </span>
          <span style={{ color: "#F77714" }}>Connectivity</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl">
          Strategically located on Dwarka Expressway ensuring seamless connectivity
          between Delhi and Gurugram.
        </p>

        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-5 rounded-full"></span>
      </div>

      {/* Center Layout */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 text-center">

          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Positioned directly on Dwarka Expressway — a 29 km signal-free corridor
            connecting Delhi and Gurugram — the project ensures excellent
            accessibility, strong visibility, and easy connectivity to major
            landmarks across the region.
          </p>

          {/* Connectivity Details */}
          <div className="space-y-4 mb-10 text-left">

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Indira Gandhi International Airport</span>
              <span className="font-medium">15–20 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">India International Convention & Expo Centre (IICC)</span>
              <span className="font-medium">10 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Diplomatic Enclave II</span>
              <span className="font-medium">12 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Dwarka Expressway</span>
              <span className="font-medium">Direct Access</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Gurgaon Railway Station</span>
              <span className="font-medium">10 Minutes</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">NH-48 (Delhi–Jaipur Highway)</span>
              <span className="font-medium">10 Minutes</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Central Peripheral Road</span>
              <span className="font-medium">12 Minutes</span>
            </div>

          </div>

          {/* CTA Button */}
          <div className="flex flex-col gap-4">

            <a
              href="tel:+919971809303"
              className="text-center bg-yellow-500 text-black py-4 text-lg font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300"
            >
              📞 Call Now – +91 9971809303
            </a>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Projects;