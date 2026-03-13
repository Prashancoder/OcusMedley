import React from 'react';

const Projects = () => {
  return (
    <section className="py-24 bg-gray-50" id="projects">
      
      {/* Section Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-black">OCUS </span>
          <span style={{ color: "#F77714" }}>MEDLEY</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl">
        Exclusive Pre-Leased & Ready-to-Move Vacant Spaces Available
        </p>

        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-5 rounded-full"></span>
      </div>

      {/* Center Layout */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 text-center">

          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            BRINGING IT ALL TOGETHER - Retail Shops, 3 screen Multiplex,
            Food Court, Restaurants, Family Entertainment Zone,
            Office Space, Restaurants & Restrobars.
          </p>

          {/* Project Details */}
          <div className="space-y-4 mb-10 text-left">

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Units</span>
              <span className="font-medium">
                Pre Leased and self Use Lockable units
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Apartments Nearby</span>
              <span className="font-medium">
                Surrounded by more than 50000 Apartments
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Families Nearby</span>
              <span className="font-medium">
                Nearly 4 Lacs Families already Residing nearby
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Project Area</span>
              <span className="font-medium">
                Spread over Approx 4.14 Acres
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Anchor Spaces</span>
              <span className="font-medium">
                Dedicated Anchor spaces
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Maintenance</span>
              <span className="font-medium">
                Low maintenance module
              </span>
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