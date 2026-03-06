import React from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="projects">
      
      {/* Section Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          OCUS MEDLEY – Premium Commercial Investment
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Sector 99, Dwarka Expressway, Gurugram
        </p>
        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-5 rounded-full"></span>
      </div>

      {/* Center Layout */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Next-Generation Commercial Destination
          </h3>

          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            OCUS MEDLEY is a premium mixed-use commercial development bringing
            together high street retail, food court, multiplex and premium
            office spaces under one iconic destination on Dwarka Expressway.
            Designed to deliver strong business growth and long-term
            investment potential.
          </p>

          {/* Project Details */}
          <div className="space-y-4 mb-10 text-left">

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Location</span>
              <span className="font-medium">
                Sector 99, Dwarka Expressway, Gurugram
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Configuration</span>
              <span className="font-medium">
                Retail Shops | Food Court | Multiplex | Office Spaces
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Project Type</span>
              <span className="font-medium">
                Mixed Use Commercial Development
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Floors</span>
              <span className="font-medium">
                G + 19 Floors
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Total Built-up Area</span>
              <span className="font-medium">
                4,72,799 Sq Ft
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Parking</span>
              <span className="font-medium text-red-600">
                669+ Car Parking Spaces
              </span>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">

            <a
              href="tel:919971809303"
              className="text-center bg-yellow-500 text-black py-4 text-lg font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300"
            >
              Flexible Investment Opportunities Available <br /><br />
              Early Booking Recommended <br /><br />
              📞 Call Now – 9971809303
            </a>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Projects;