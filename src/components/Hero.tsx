import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero-image.jpg" 
          alt="Professional commercial cleaning services in Dallas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-brand-gold/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-60 h-60 bg-brand-gold/30 rounded-full opacity-60 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-brand-cream text-brand-gold rounded-full">
              #1 Commercial Cleaning in Dallas
            </span>
          </div>
          
          <h1 className="mb-6 font-heading font-bold animate-fade-in text-balance">
            Professional <span className="text-brand-gold">Commercial Cleaning</span> Services in Dallas, TX
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-75 text-balance">
            Experience pristine, healthy workspaces with our expert commercial cleaning solutions. Trusted by local Dallas businesses for reliability and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-100">
            <Button asChild size="lg" className="whitespace-nowrap">
              <a href="#contact" className="flex items-center">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="whitespace-nowrap">
              <a href="#services">
                Explore Services
              </a>
            </Button>
          </div>
          
          {/* Trusted By Section */}
          <div className="mt-16 animate-fade-in delay-150">
            <p className="text-sm text-muted-foreground mb-4">Trusted by Dallas businesses:</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Replace with actual logos */}
              <div className="h-8 w-24 bg-brand-gold/30 rounded animate-pulse-slow"></div>
              <div className="h-8 w-28 bg-brand-gold/30 rounded animate-pulse-slow"></div>
              <div className="h-8 w-20 bg-brand-gold/30 rounded animate-pulse-slow"></div>
              <div className="h-8 w-26 bg-brand-gold/30 rounded animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}