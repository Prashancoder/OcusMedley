import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">

            <p>
              <strong>Effective Date:</strong> 03/02/2026
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Introduction
              </h2>
              <p>
                This website is an independent property information platform created 
                for marketing and informational purposes related to Orchid IVY, 
                Sector 51, Gurugram.
              </p>
              <p className="mt-4">
                We respect your privacy and are committed to protecting any personal 
                information you provide while using this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Information We Collect
              </h2>
              <p>When you fill out the inquiry form or contact us, we may collect:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Preferred Visit Date</li>
                <li>Any information you voluntarily provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. How We Use Your Information
              </h2>
              <p>Your information may be used to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries</li>
                <li>Share project details, brochures, pricing and availability</li>
                <li>Schedule site visits</li>
                <li>Provide project updates</li>
                <li>Improve our marketing and customer support services</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information. Your details may be shared 
                with RERA-registered real estate professionals or developers solely 
                for responding to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Data Security
              </h2>
              <p>
                Reasonable technical and organizational measures are implemented 
                to protect your data from unauthorized access, misuse, alteration, 
                or disclosure. However, no internet transmission is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Third-Party Services
              </h2>
              <p>We may use third-party services such as:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>CRM systems for lead management</li>
                <li>WhatsApp and phone communication services</li>
                <li>Advertising platforms (Meta, Google Ads, etc.)</li>
              </ul>
              <p className="mt-4">
                These platforms may process data in accordance with their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Consent & Communication
              </h2>
              <p>
                By submitting your details on this website, you authorize us to contact 
                you via call, SMS, WhatsApp, or email regarding this project, even if 
                your number is registered under DND/NDNC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Project Disclaimer
              </h2>
              <p>
                This website is not the official website of the developer of Orchid IVY. 
                All project information including pricing, availability, floor plans, 
                specifications and offers are subject to change without prior notice. 
                Images and visuals are for representation purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Contact Information
              </h2>
              <div className="bg-muted p-6 rounded-lg">
                <p><strong>Project Inquiry Desk</strong></p>
                <p>Orchid IVY, Sector 51, Gurugram</p>
                <p>Phone: 9971809303</p>
                <p>Email: lavneetdabas26@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Updates to This Policy
              </h2>
              <p>
                This Privacy Policy may be updated from time to time. Any changes 
                will be reflected on this page with an updated effective date.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
