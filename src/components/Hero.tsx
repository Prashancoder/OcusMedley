import heroBg from '@/assets/desktopbanner1.jpeg';
import heroBgMobile from '@/assets/mobilebanner1.jpeg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-0">

        {/* Background Images */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="block md:hidden absolute inset-0">
          <img
            src={heroBgMobile}
            alt="OCUS Medley Dwarka Expressway Gurugram"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side Content */}
            <div>

              <div className="inline-block px-4 py-1 mb-4 bg-orange-500 text-white text-sm font-bold rounded-full uppercase tracking-widest">
                Mega Mixed Commercial High Street Retail
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                OCUS MEDLEY <br />
                <span className="text-orange-400">
                  Dwarka Expressway, Gurugram
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-xl">
              BRINGING IT ALL TOGETHER - Retail Shops, 3 screen Multiplex, Food Court, Restaurants, Family Entertainment Zone, Office Space ,Restaurants & Restrobars.
              </p>

              <div className="space-y-2 text-gray-200 text-sm md:text-base mb-6">
                <p>✓ - Pre Leased and self Use Lockable units</p>
                <p>✓ Surrounded by 50,000+ Apartments</p>
                <p>✓ Nearly 4 Lacs Families already Residing nearby</p>
                <p>✓ One of the Biggest Commercial on Dwarka Expressway</p>
                <p>✓ Outdoor Patio, Water bodies & Amphitheater area </p>   
                <p>✓ Huge Atrium Area</p>
                <p>✓ Ample Surface and Basement Parking </p>



              </div>

              <div className="flex flex-wrap gap-4 items-center">

                <a
                  href="tel:918527133220"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all"
                >
                  📞 Call Now – 8527133220
                </a>

                <a
                  href="https://maps.app.goo.gl/Vx85SkdjysCYXBTL8"
                  target="_blank"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/40 backdrop-blur transition-all"
                >
                  View Location
                </a>

              </div>

              <p className="mt-4 text-sm text-gray-200">
                YouTube Channel : 
                <a 
                  href="https://youtube.com/@ocusindia?si=-5bPBnR-OK9cnZla" 
                  target="_blank"
                  className="text-orange-400 ml-1 underline"
                >
                  OCUS India
                </a>
              </p>

            </div>

            {/* Right Side – Lead Form */}
            <div className="hidden md:flex justify-center md:justify-end">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">

                <LeadForm variant="compact" transparent />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Form Section */}
      <section className="block md:hidden bg-slate-50 py-10 px-4">
        <div className="max-w-md mx-auto text-center">

          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Book Your Site Visit
          </h2>

          <p className="text-slate-600 mb-6 text-sm">
            Share your details to receive pricing, availability and investment details.
          </p>

          <LeadForm variant="compact" />

        </div>
      </section>
    </>
  );
};

export default Hero;