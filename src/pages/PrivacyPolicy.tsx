import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">

            <p>
              <strong>Effective Date:</strong> 06/03/2026
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Introduction
              </h2>

              <p>
                This website is an independent property information platform
                created for marketing and informational purposes related to
                OCUS MEDLEY, Sector 99, Dwarka Expressway, Gurugram.
              </p>

              <p className="mt-4">
                We respect your privacy and are committed to protecting any
                personal information you provide while using this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Information We Collect
              </h2>

              <p>When you fill out the inquiry form, we may collect:</p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Preferred Visit Date</li>
                <li>Any information voluntarily provided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. How We Use Your Information
              </h2>

              <p>Your information may be used to:</p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiry</li>
                <li>Share project brochures, pricing and availability</li>
                <li>Schedule site visits</li>
                <li>Provide project updates</li>
                <li>Improve marketing and customer service</li>
              </ul>

              <p className="mt-4">
                We do not sell your personal data. Your information may be
                shared with real estate consultants or developer
                representatives only to respond to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Data Security
              </h2>

              <p>
                Reasonable technical measures are implemented to protect
                your data from unauthorized access or misuse.
                However, no online transmission is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Third-Party Services
              </h2>

              <p>We may use third-party services such as:</p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>CRM systems</li>
                <li>WhatsApp and phone communication</li>
                <li>Advertising platforms (Google Ads, Meta Ads)</li>
              </ul>

              <p className="mt-4">
                These services may process data according to their
                respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Consent & Communication
              </h2>

              <p>
                By submitting your details on this website you authorize
                us to contact you via phone, SMS, WhatsApp or email
                regarding this project even if your number is registered
                under DND / NDNC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Project Disclaimer
              </h2>

              <p>
                This website is not the official website of the developer
                of OCUS MEDLEY. All project information including pricing,
                availability, specifications and visuals are subject to
                change without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Contact Information
              </h2>

              <div className="bg-muted p-6 rounded-lg">
                <p><strong>Project Inquiry Desk</strong></p>
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

export default PrivacyPolicy;