import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-subtle py-2.5" : "bg-white/95 backdrop-blur-sm py-3"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/dream-cleaned-logo.jpg" 
              alt="Dream Cleaned Services - Professional Commercial Cleaning in Dallas" 
              className="h-12 w-auto object-contain"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li><a href="#services" className="font-medium hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#about" className="font-medium hover:text-brand-gold transition-colors">About</a></li>
              <li><a href="#testimonials" className="font-medium hover:text-brand-gold transition-colors">Testimonials</a></li>
              <li><a href="/service-areas" className="font-medium hover:text-brand-gold transition-colors">Service Areas</a></li>
              <li><a href="#faq" className="font-medium hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="#contact" className="font-medium hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:8179939993" className="flex items-center text-sm hover:text-brand-gold transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>817-993-9993</span>
            </a>
            <Button asChild variant="default" size="sm" className="bg-brand-gold hover:bg-brand-gold/90">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 pt-16 pb-6 px-6 overflow-y-auto transition-transform duration-300 ease-in-out shadow-lg",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col h-full">
          <ul className="space-y-4 mb-8">
            <li><a href="#services" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#about" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#testimonials" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
            <li><a href="/service-areas" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Service Areas</a></li>
            <li><a href="#faq" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
            <li><a href="#contact" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          
          <div className="mt-auto space-y-4">
            <a href="tel:8179939993" className="flex items-center py-2">
              <Phone className="w-4 h-4 mr-2" />
              <span>817-993-9993</span>
            </a>
            <a href="mailto:hello@dcsdfw.com" className="flex items-center py-2">
              <Mail className="w-4 h-4 mr-2" />
              <span>hello@dcsdfw.com</span>
            </a>
            <Button asChild className="w-full bg-brand-gold hover:bg-brand-gold/90">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}