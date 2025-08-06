import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <span className="text-2xl font-bold">
                  Dream<span className="text-brand-lightGold">Cleaned</span>
                </span>
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Professional commercial cleaning services throughout the Dallas-Fort Worth metroplex. Delivering excellence, one space at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-brand-lightGold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-lightGold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-lightGold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-lightGold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-brand-lightGold transition-colors">Office Cleaning</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand-lightGold transition-colors">Medical Facility Cleaning</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand-lightGold transition-colors">Retail Cleaning</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand-lightGold transition-colors">Floor Care</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand-lightGold transition-colors">Window Cleaning</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand-lightGold transition-colors">Carpet Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3 grid grid-cols-2">
              <li><a href="#areas" className="text-white/70 hover:text-brand-lightGold transition-colors">Dallas</a></li>
              <li><a href="#areas" className="text-white/70 hover:text-brand-lightGold transition-colors">Fort Worth</a></li>
              <li><a href="#areas" className="text-white/70 hover:text-brand-lightGold transition-colors">Plano</a></li>
              <li><a href="#areas" className="text-white/70 hover:text-brand-lightGold transition-colors">Irving</a></li>
              <li><a href="#areas" className="text-white/70 hover:text-brand-lightGold transition-colors">Arlington</a></li>
              <li><a href="#areas" className="text-white/70 hover:text-brand-lightGold transition-colors">Frisco</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-brand-lightGold" />
                <a href="tel:8179939993" className="text-white/70 hover:text-white transition-colors">
                  817-993-9993
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-brand-lightGold" />
                <a href="mailto:hello@dcsdfw.com" className="text-white/70 hover:text-white transition-colors">
                  hello@dcsdfw.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-brand-lightGold" />
                <address className="text-white/70 not-italic">
                  3838 Oak Lawn Avenue, <br />
                  Ste 1000, <br />
                  Dallas, TX 75219
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} Dream Cleaned Services. All rights reserved.
            </p>
            <div className="md:text-right space-x-4 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}