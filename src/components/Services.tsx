import { CheckCircle2, Building, Home, ShoppingCart, Clock, Star } from "lucide-react";
import { Button } from "./ui/Button";
import { useEffect, useRef, useState } from "react";

const servicesList = [
  {
    icon: <Building className="h-10 w-10 text-brand-gold" />,
    title: "Office Cleaning",
    description: "Comprehensive cleaning for offices of all sizes. Keep your workspace pristine and professional for employees and clients.",
    features: ["Daily or weekly schedules", "Disinfection of high-touch surfaces", "Restroom sanitization", "Trash removal and recycling"]
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-brand-gold" />,
    title: "Retail Cleaning",
    description: "Maintain a spotless retail environment that enhances customer experience and showcases your products.",
    features: ["Floor care and maintenance", "Window and glass cleaning", "Fitting room sanitization", "Display dusting and cleaning"]
  },
  {
    icon: <Home className="h-10 w-10 text-brand-gold" />,
    title: "Medical Facility Cleaning",
    description: "Specialized cleaning for healthcare facilities with strict adherence to medical-grade sanitization protocols.",
    features: ["OSHA compliant procedures", "Exam room disinfection", "Waiting area sanitization", "Biohazard waste management"]
  }
];

export default function Services() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1 && !visibleSections.includes(index)) {
            setVisibleSections(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSections]);

  return (
    <section id="services" className="py-20 bg-brand-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-brand-cream text-brand-gold rounded-full">
            Our Professional Services
          </span>
          <h2 className="mb-4 font-heading text-balance">
            Comprehensive Commercial Cleaning Solutions in Dallas
          </h2>
          <p className="text-muted-foreground text-balance">
            We provide tailored cleaning services to meet the unique needs of your business, ensuring a clean, healthy, and impressive environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              ref={el => (sectionRefs.current[index] = el)}
              className={`service-card bg-white ${visibleSections.includes(index) ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                <a href="#contact">Learn More</a>
              </Button>
            </div>
          ))}
        </div>
        
        {/* Why Choose Us */}
        <div 
          className="mt-20 grid md:grid-cols-2 gap-8 items-center"
          ref={el => (sectionRefs.current[3] = el)}
        >
          <div className={`space-y-6 ${visibleSections.includes(3) ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <span className="inline-block px-3 py-1 mb-2 text-sm font-medium bg-brand-cream text-brand-gold rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-balance">What Makes Dream Cleaned Services Different</h2>
            <p className="text-muted-foreground text-balance">
              We don't just clean spaces; we transform them. With over a decade of experience serving Dallas businesses, our attention to detail and commitment to excellence set us apart.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-brand-gold mr-2 shrink-0" />
                <div>
                  <h4 className="font-medium">Reliability</h4>
                  <p className="text-sm text-muted-foreground">On-time, every time</p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="h-6 w-6 text-brand-gold mr-2 shrink-0" />
                <div>
                  <h4 className="font-medium">Quality</h4>
                  <p className="text-sm text-muted-foreground">Exceptional results</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="h-6 w-6 text-brand-gold mr-2 shrink-0" />
                <div>
                  <h4 className="font-medium">Customization</h4>
                  <p className="text-sm text-muted-foreground">Tailored cleaning plans</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="mt-6 bg-brand-gold hover:bg-brand-gold/90">
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
          
          {/* Image placeholder - would be replaced with actual image */}
          <div className={`relative h-96 rounded-xl overflow-hidden ${visibleSections.includes(3) ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-brand-gold/5"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-5xl font-bold text-brand-gold mb-2">10+</span>
                <span className="block text-xl">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}