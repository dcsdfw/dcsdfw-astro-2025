import { useEffect, useRef, useState } from "react";
import { Check, Award, Clock, Users } from "lucide-react";
import { Button } from "./ui/Button";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Professional office building image */}
          <div 
            ref={sectionRef}
            className={`relative rounded-xl overflow-hidden h-96 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <img 
              src="/about-hero.jpg" 
              alt="Professional commercial cleaning services - pristine office building"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark/80 to-transparent">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center relative">
                  <img 
                    src="/excellence-image.jpg" 
                    alt="10+ Years of Excellence in Commercial Cleaning"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 rounded"
                  />
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-white mb-1">10+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-white/80">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-brand-cream text-brand-gold rounded-full">
              About Dream Cleaned Services
            </span>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
              Dallas's Premier Commercial Cleaning Company
            </h2>
            
            <p className="text-muted-foreground mb-6 text-balance">
              Dream Cleaned Services has been providing exceptional commercial cleaning solutions to businesses throughout the Dallas-Fort Worth area for over a decade. Our mission is to create healthier, cleaner environments where businesses can thrive.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 h-6 w-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-medium">Licensed & Insured Professionals</h4>
                  <p className="text-sm text-muted-foreground">All our cleaning specialists are fully trained, background-checked, and insured.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-6 w-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-medium">Eco-Friendly Practices</h4>
                  <p className="text-sm text-muted-foreground">We use green cleaning products and sustainable methods to protect your health and the environment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-6 w-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-medium">Customized Cleaning Plans</h4>
                  <p className="text-sm text-muted-foreground">Every business is unique. We develop tailored cleaning solutions to meet your specific needs.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90">
                <a href="#contact">Schedule a Consultation</a>
              </Button>
              <Button asChild variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                <a href="#testimonials">Read Client Testimonials</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-brand-gold" />
                </div>
                <span className="text-sm text-center">Award-Winning Service</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-brand-gold" />
                </div>
                <span className="text-sm text-center">Reliable & Punctual</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-brand-gold" />
                </div>
                <span className="text-sm text-center">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}