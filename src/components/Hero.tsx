import heroBg from '@/assets/desktopbanner1.jpeg';
import heroBgMobile from '@/assets/mobilebanner1.jpeg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-0">

        {/* Background Images */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="block md:hidden absolute inset-0">
          <img
            src={heroBgMobile}
            alt="OCUS Medley Galleria 99 Sector 99 Gurugram"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE CONTENT */}
            <div className="bg-gray-700/60 backdrop-blur-md p-8 rounded-xl border border-gray-500/30 shadow-2xl max-w-xl">

              <div className="inline-block px-4 py-1 mb-4 bg-orange-500 text-white text-sm font-bold rounded-full uppercase tracking-widest">
              The  Ultimate Retail & Business Landmark, <br />Bang on Dwarka Expressway
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                OCUS MEDLEY 
                <span className="block text-orange-400 text-lg mt-1">
                  Sector 99, Dwarka Expressway, Gurugram <br />Exclusive Pre-leased and Ready-to-Move Vacant Spaces
                </span>
              </h1>

              <p className="text-gray-200 mb-6 text-sm md:text-base">
              Welcome to Galleria 99 at Ocus Medley, an upscale high-street retail commercial development strategically positioned on Dwarka Expressway, Sector 99, Gurugram. 
              Crafted as a dynamic lifestyle destination, it harmoniously integrates shopping, dining, entertainment, and premium office spaces within one iconic address.
              </p>

              <span className="block text-orange-400 font-bold text-lg mt-1">
                  Most Successful High Street Destination <br /> at Prime Location with Exceptional Connectivity 
                </span>
<br />
                <span className="block text-orange-400 font-bold text-lg mt-1">
                   Growing Hotspots For Leading Brands !
                </span>
                <br />

{/* 
              <div className="space-y-2 text-gray-200 text-sm mb-6">

                <p>✓ •	1,00,000+ High Net-Worth Families</p>
                <p>✓ •	50+ Residential Developments </p>
                <p>✓ •	10+ Landmark Luxury Projects</p>
                <p>✓ •	Dense premium neighborhood</p>
                <p>✓ •	Excellent footfall from both New Gurgaon & established city zones</p>



              </div> */}

              <div className="flex flex-wrap gap-4">

                <a
                  href="tel:919971809303"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  📞 Call Now – 9971809303
                </a>



              </div>

 

            </div>


            {/* RIGHT SIDE FORM */}
            <div className="hidden md:flex justify-end items-start">
              <div className="w-full max-w-xs bg-white/90 p-3 rounded-lg shadow-lg">

                <LeadForm variant="compact" />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOBILE FORM */}
      <section className="block md:hidden bg-slate-50 py-10 px-4">
        <div className="max-w-md mx-auto text-center">

          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Book Your Site Visit
          </h2>

          <p className="text-slate-600 mb-6 text-sm">
            Share your details to receive pricing and investment details.
          </p>

          <LeadForm variant="compact" />

        </div>
      </section>
    </>
  );
};

export default Hero;