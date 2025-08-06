import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const counties = [
  {
    name: "Dallas County",
    towns: ["Dallas", "Irving", "Garland", "Mesquite", "Richardson", "Carrollton", "DeSoto", "Lancaster", "University Park", "Highland Park"]
  },
  {
    name: "Tarrant County", 
    towns: ["Fort Worth", "Arlington", "Grand Prairie", "Mansfield", "Euless", "Bedford", "Hurst", "Grapevine", "Southlake", "Colleyville"]
  },
  {
    name: "Collin County",
    towns: ["Plano", "Frisco", "McKinney", "Allen", "Wylie", "Murphy", "Lucas", "Fairview", "Parker", "Prosper"]
  },
  {
    name: "Denton County",
    towns: ["Denton", "Lewisville", "Flower Mound", "Coppell", "The Colony", "Little Elm", "Highland Village", "Lake Dallas", "Corinth", "Shallowwater"]
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
          {/* Map placeholder - would be replaced with actual map */}
          <div className={`h-96 bg-brand-gold/10 rounded-xl relative overflow-hidden mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-brand-lightGold opacity-30" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-center">Interactive Service Area Map</p>
            </div>
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
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                style={{ 
                  transitionDelay: `${countyIndex * 100}ms`,
                  animation: isVisible ? `fade-in 0.6s ease-out ${countyIndex * 100}ms both` : 'none' 
                }}
              >
                <h4 className="text-xl font-semibold text-brand-lightGold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {county.name}
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {county.towns.map((town, townIndex) => (
                    <div key={townIndex} className="text-white/80 text-sm">
                      {town}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}