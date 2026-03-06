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
            alt="OCUS MEDLEY Sector 99 Dwarka Expressway Gurugram"
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
                Experience Premium Commercial Investment Opportunity
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                OCUS MEDLEY <br />
                <span className="text-orange-400">
                  Sector 99, Dwarka Expressway, Gurugram
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-xl">
                Premium Retail Shops, Food Court, Multiplex & Office Spaces 
                in a high-growth commercial hub on Dwarka Expressway.
              </p>

              <div className="space-y-2 text-gray-200 text-sm md:text-base mb-6">
                <p>✓ Located on 29 KM Signal-Free Dwarka Expressway</p>
                <p>✓ Surrounded by 50+ Residential Projects & 1 Lakh+ HNI Families</p>
                <p>✓ Retail + Entertainment + Office Spaces Under One Roof</p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="tel:919971809303"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all"
                >
                  📞 Call Now – 9971809303
                </a>

                <button
                  onClick={() => {
                    const section = document.getElementById('contact');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/40 backdrop-blur transition-all"
                >
                  Book Site Visit
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-200">
                Starting Investment at <span className="font-bold text-2xl">Attractive Pricing*</span>
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
            Share your details to receive pricing, availability & investment details.
          </p>
          <LeadForm variant="compact" />
        </div>
      </section>
    </>
  );
};

export default Hero;