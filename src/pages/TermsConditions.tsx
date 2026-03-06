import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">

            <p>
              <strong>Effective Date:</strong> 3/2/2026
            </p>

            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Agreement to Terms
              </h2>
              <p>
                By accessing and using this website related to Orchid IVY, Sector 51, Gurugram,
                you agree to comply with and be bound by the following Terms and Conditions.
              </p>
            </section>

            {/* Independent Platform Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Independent Information Platform
              </h2>
              <p>
                This website is an independent property information platform created 
                for marketing and informational purposes only. It is not the official 
                website of the developer of Orchid IVY.
              </p>
            </section>

            {/* Project Information Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. Project Information Disclaimer
              </h2>
              <p>
                All information provided on this website including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Pricing</li>
                <li>Layouts</li>
                <li>Availability</li>
                <li>Specifications</li>
                <li>Location details</li>
                <li>Floor plans and brochures</li>
              </ul>
              <p className="mt-4">
                is subject to change without prior notice and is for informational 
                purposes only.
              </p>
            </section>

            {/* No Legal Offer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. No Legal Offer
              </h2>
              <p>
                The content on this website does not constitute a legal offer, 
                contract, booking confirmation, or guarantee of property sale. 
                Final terms shall be governed by official agreements issued by 
                the developer.
              </p>
            </section>

            {/* Pricing Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Pricing Disclaimer
              </h2>
              <p>
                Any pricing mentioned (e.g., ₹3.80 Cr onwards*) is indicative 
                and subject to availability, unit selection, and change at 
                the discretion of the developer.
              </p>
            </section>

            {/* Site Visit & Booking */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Site Visit & Booking
              </h2>
              <p>
                Site visits are subject to prior appointment confirmation. 
                Booking terms, payment plans, and official documentation 
                will be shared separately upon request.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Intellectual Property
              </h2>
              <p>
                All content including images, artwork, text, design, and layout 
                used on this website is for marketing representation purposes only 
                and may not be reproduced or distributed without permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Limitation of Liability
              </h2>
              <p>
                The website operator shall not be liable for any direct or indirect 
                loss arising from reliance on the information provided on this website.
              </p>
              <p className="mt-4">
                Prospective buyers are advised to conduct independent verification 
                and due diligence before making any property-related decisions.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                8. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with 
                the laws of India. Any disputes shall be subject to the jurisdiction 
                of courts in Gurugram, Haryana.
              </p>
            </section>

            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Contact Information
              </h2>
              <div className="bg-muted p-6 rounded-lg">
                <p><strong>Project Inquiry Desk</strong></p>
                <p>Orchid IVY, Sector 51, Gurugram</p>
                <p>Phone: 9971809303</p>
                <p>Email: lavneetdabas26@gmail.com</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
