import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";

const counties = [
  {
    name: "Dallas County",
    towns: ["Dallas", "Irving", "Garland", "Mesquite", "Richardson", "Carrollton", "DeSoto", "University Park", "Highland Park", "Coppell", "Cedar Hill", "Duncanville"]
  },
  {
    name: "Tarrant County", 
    towns: ["Fort Worth", "Arlington", "Grand Prairie", "Mansfield", "Euless", "Bedford", "Hurst", "Grapevine", "Southlake", "Colleyville", "North Richland Hills", "Keller"]
  },
  {
    name: "Collin County",
    towns: ["Plano", "Frisco", "McKinney", "Allen", "Wylie", "Murphy", "Fairview", "Prosper", "Celina", "Princeton", "Anna", "Melissa"]
  },
  {
    name: "Denton County",
    towns: ["Denton", "Lewisville", "Flower Mound", "The Colony", "Little Elm", "Highland Village", "Corinth", "Sanger", "Aubrey", "Pilot Point", "Roanoke", "Argyle"]
  }
];

export default function ServiceAreas() {
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
    <section id="areas" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-white/10 text-brand-lightGold rounded-full">
            Service Areas
          </span>
          <h2 className="mb-4 font-heading text-balance">
            Serving Businesses Throughout Dallas-Fort Worth
          </h2>
          <p className="text-white/70 text-balance">
            We provide top-quality commercial cleaning services across the Dallas-Fort Worth metroplex, ensuring pristine workspaces for businesses of all sizes.
          </p>
        </div>
        
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Interactive Google Maps Embed */}
          <div className={`rounded-xl relative overflow-hidden mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215366.72034611984!2d-97.21410278697009!3d32.49662250000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bf8861aec9e12ad%3A0x5cd9e3db68dea3ea!2sDream%20Cleaned!5e0!3m2!1sen!2sus!4v1708665998153!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Dream Cleaned Service Areas - Dallas Fort Worth"
            />
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">Counties We Service</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our team of cleaning professionals serves businesses throughout these Dallas-Fort Worth counties and their municipalities:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {counties.map((county, countyIndex) => (
              <div 
                key={countyIndex}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                style={{ 
                  transitionDelay: `${countyIndex * 100}ms`,
                  animation: isVisible ? `fade-in 0.6s ease-out ${countyIndex * 100}ms both` : 'none' 
                }}
              >
                <h4 className="text-xl font-semibold text-brand-lightGold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {county.name}
                </h4>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {county.towns.map((town, townIndex) => (
                    <a 
                      key={townIndex} 
                      href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-white/5 text-white/90 text-sm px-4 py-3 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-left flex items-center"
                    >
                      <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 flex-shrink-0"></span>
                      {town}
                    </a>
                  ))}
                </div>
                
                <div className="text-center">
                  <a 
                    href={`/${county.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-4 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white rounded-lg font-semibold transition-colors text-sm"
                  >
                    See Details
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Don't see your city listed? Contact us to check if we service your area. We're constantly expanding our reach throughout the DFW metroplex counties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}