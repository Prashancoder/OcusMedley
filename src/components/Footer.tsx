import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side - Info */}
          <div className="space-y-4 text-center md:text-left">

            <h3 className="text-2xl font-bold">
              OCUS MEDLEY
            </h3>

            <div className="flex items-center gap-2 justify-center md:justify-start text-gray-300 text-sm">
              <Phone size={16} />
              <span>9971809303</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start text-gray-300 text-sm">
              <Mail size={16} />
              <span>lavneetdabas26@gmail.com</span>
            </div>

            <div className="text-gray-500 text-xs">
              RERA No: ________
            </div>

          </div>

          {/* Right Side - Google Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54300.74207006621!2d77.00196480478911!3d28.46870132416329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1701500ae343%3A0x5917b5ea25ecc617!2sOcus%20Medley!5e1!3m2!1sen!2sin!4v1773038182708!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ocus Medley Location"
            ></iframe>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-gray-400 space-y-3">

          <div>
            © {currentYear} | OCUS MEDLEY | All Rights Reserved.
          </div>

          <div className="flex justify-center gap-4">
            <a href="/privacy-policy" className="hover:text-gray-200">
              Privacy Policy
            </a>
            <span className="opacity-40">|</span>
            <a href="/terms-conditions" className="hover:text-gray-200">
              Terms & Conditions
            </a>
          </div>

          <div className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
            This website is an independent property information platform and is not the official website of the developer. The content provided is for informational purposes only and does not constitute any legal offer or contract. All prices, specifications and availability are subject to change without prior notice. Images used on this website are for illustrative purposes only.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;