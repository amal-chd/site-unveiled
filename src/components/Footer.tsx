import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-chakra p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PRANA ROOTS</h3>
                <p className="text-xs uppercase tracking-wide opacity-80">
                  Ayurveda Clinic & Pharmacy
                </p>
              </div>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Healing at the root, naturally with Ayurveda. Your trusted partner 
              for holistic health and wellness.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-cream/80 hover:text-cream transition-colors">Home</a></li>
              <li><a href="#services" className="text-cream/80 hover:text-cream transition-colors">Services</a></li>
              <li><a href="#about" className="text-cream/80 hover:text-cream transition-colors">About</a></li>
              <li><a href="#treatments" className="text-cream/80 hover:text-cream transition-colors">Treatments</a></li>
              <li><a href="#contact" className="text-cream/80 hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-cream/80">Ayurvedic Consultation</span></li>
              <li><span className="text-cream/80">Panchakarma Therapy</span></li>
              <li><span className="text-cream/80">Herbal Medicine</span></li>
              <li><span className="text-cream/80">Lifestyle Counseling</span></li>
              <li><span className="text-cream/80">Beauty & Wellness</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-healing mt-1" />
                <div>
                  <p className="text-cream/80">Poweloom Metta</p>
                  <p className="text-cream/80">Mambaram - 670741</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-healing" />
                <p className="text-cream/80">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-healing" />
                <p className="text-cream/80">info@pranaroots.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Prana Roots Ayurveda Clinic & Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;