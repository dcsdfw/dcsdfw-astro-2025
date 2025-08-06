import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for contacting Dream Cleaned Services. We'll get back to you within 24 hours.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        serviceType: "",
        message: "",
      });
    }, 1500);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-brand-cream text-brand-gold rounded-full">
            Get In Touch
          </span>
          <h2 className="mb-4 font-heading text-balance">
            Request a Free Quote for Your Commercial Cleaning Needs
          </h2>
          <p className="text-muted-foreground text-balance">
            Contact Dream Cleaned Services today to discuss your unique cleaning requirements. Our team is ready to create a customized solution for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className={`md:col-span-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-brand-gold text-white rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:8179939993" className="text-white/80 hover:text-white transition-colors">
                      817-993-9993
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:hello@dcsdfw.com" className="text-white/80 hover:text-white transition-colors">
                      hello@dcsdfw.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Office Location</h4>
                    <address className="text-white/80 not-italic">
                      3838 Oak Lawn Avenue<br />
                      Suite 1000<br />
                      Dallas, TX 75219
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-medium mb-4">Why Choose Dream Cleaned Services?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    Licensed & Insured
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    10+ Years Experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    Eco-Friendly Products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    24/7 Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`md:col-span-3 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request a Free Quote</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="office">Office Cleaning</option>
                  <option value="retail">Retail Cleaning</option>
                  <option value="daycare">Daycare Facilities</option>
                  <option value="medical">Medical Facilities</option>
                  <option value="religious">Religious Facilities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}