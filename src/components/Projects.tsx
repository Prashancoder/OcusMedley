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
          Orchid IVY – Premium Independent Floors
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          3 & 4 BHK + Study | Sector 51, Gurugram
        </p>
        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-5 rounded-full"></span>
      </div>

      {/* Center Layout */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Experience Premium Independent Living
          </h3>

          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Spacious 3 & 4 BHK + Study Layouts with dedicated servant room,
            basement area and exclusive terrace space. Designed for families who prefer
            privacy, exclusivity and strong long-term appreciation in one of
            Gurugram’s most established residential sectors.
          </p>

          {/* Property Details */}
          <div className="space-y-4 mb-10 text-left">

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Starting Price</span>
              <span className="font-bold text-yellow-600 text-lg">
                ₹3.80 Cr onwards*
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Location</span>
              <span className="font-medium">
                Sector 51, Gurugram
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-gray-700">Configuration</span>
              <span className="font-medium">
                3 & 4 BHK + Study
              </span>
            </div>
            

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Availability</span>
              <span className="font-medium text-red-600">
                Limited Premium Units
              </span>
            </div>

            

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">



            <a
              href="tel:919971809303"
              className="text-center bg-yellow-500 text-black py-4 text-lg font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 rounded-xl"
            >
               Flexible Payment Plans Available, Early Booking Recommended <br /> <br /> 📞 Call Now – 9971809303
            </a>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Projects;