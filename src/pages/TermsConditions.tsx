import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">

            <p>
              <strong>Effective Date:</strong> 06/03/2026
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Agreement to Terms
              </h2>
              <p>
                By accessing and using this website related to OCUS MEDLEY,
                Sector 99, Dwarka Expressway, Gurugram, you agree to comply with
                and be bound by the following Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Independent Information Platform
              </h2>
              <p>
                This website is an independent property information platform
                created for marketing and informational purposes only.
                It is not the official website of the developer of
                OCUS MEDLEY.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. Project Information Disclaimer
              </h2>

              <p>
                All information provided on this website including but not
                limited to:
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Pricing</li>
                <li>Unit configurations</li>
                <li>Availability</li>
                <li>Specifications</li>
                <li>Location details</li>
                <li>Floor plans and brochures</li>
              </ul>

              <p className="mt-4">
                is subject to change without prior notice and is provided
                for informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. No Legal Offer
              </h2>

              <p>
                The content on this website does not constitute a legal
                offer, contract, booking confirmation, or guarantee of
                property sale. Final terms shall be governed by official
                agreements issued by the developer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Pricing Disclaimer
              </h2>

              <p>
                Any pricing mentioned on this website is indicative and
                subject to availability, unit selection and change at the
                discretion of the developer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Site Visit & Booking
              </h2>

              <p>
                Site visits are subject to prior appointment confirmation.
                Booking terms, payment plans and official documentation
                will be shared separately upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Intellectual Property
              </h2>

              <p>
                All content including images, artwork, text, design and
                layout used on this website is for marketing representation
                purposes only and may not be reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Limitation of Liability
              </h2>

              <p>
                The website operator shall not be liable for any direct or
                indirect loss arising from reliance on the information
                provided on this website.
              </p>

              <p className="mt-4">
                Prospective buyers or investors are advised to conduct
                independent verification before making any investment
                decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                8. Governing Law
              </h2>

              <p>
                These terms shall be governed by the laws of India.
                Any disputes shall fall under the jurisdiction of
                courts in Gurugram, Haryana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Contact Information
              </h2>

              <div className="bg-muted p-6 rounded-lg">
                <p><strong>Project Inquiry</strong></p>
                <p>OCUS MEDLEY, Sector 99, Dwarka Expressway, Gurugram</p>
                <p>Phone: 9971809303</p>
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