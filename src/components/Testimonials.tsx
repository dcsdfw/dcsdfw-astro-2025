import { useEffect, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "./ui/Button";

const testimonials = [
  {
    name: "Michael Johnson",
    company: "Johnson & Associates",
    image: "", // Would be replaced with actual image
    rating: 5,
    text: "Dream Cleaned Services has transformed our office space. Their attention to detail and consistency are unmatched. Our team loves coming to a pristine workspace every morning."
  },
  {
    name: "Sarah Williams",
    company: "Williams Medical Center",
    image: "", // Would be replaced with actual image
    rating: 5,
    text: "As a medical facility, cleanliness is paramount. Dream Cleaned understands our strict requirements and delivers exceptional results. They've been an invaluable partner for years."
  },
  {
    name: "Robert Chen",
    company: "Chen Retail Group",
    image: "", // Would be replaced with actual image
    rating: 5,
    text: "Customer experience is everything in retail. Dream Cleaned ensures our stores are spotless, which directly impacts our sales. Highly recommend their services to any retail business in Dallas."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const next = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((current + 1) % testimonials.length);
      setVisible(true);
    }, 300);
  };
  
  const prev = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((current - 1 + testimonials.length) % testimonials.length);
      setVisible(true);
    }, 300);
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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef} 
          className={`text-center max-w-3xl mx-auto mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-brand-cream text-brand-gold rounded-full">
            Client Testimonials
          </span>
          <h2 className="mb-4 font-heading text-balance">
            What Dallas Businesses Say About Us
          </h2>
          <p className="text-muted-foreground text-balance">
            Don't just take our word for it. Hear from businesses across Dallas who trust Dream Cleaned Services with their commercial cleaning needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-card">
            <Quote className="absolute -top-6 -left-6 h-12 w-12 text-brand-gold/20" />
            
            <div className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-brand-gold">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[current].name}</h3>
                  <p className="text-muted-foreground">{testimonials[current].company}</p>
                </div>
              </div>
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg leading-relaxed text-muted-foreground mb-8">
                "{testimonials[current].text}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={prev} className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        current === index ? 'bg-brand-gold' : 'bg-brand-gold/30'
                      }`}
                      onClick={() => {
                        setVisible(false);
                        setTimeout(() => {
                          setCurrent(index);
                          setVisible(true);
                        }, 300);
                      }}
                    />
                  ))}
                </div>
                
                <Button variant="outline" onClick={next} className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}