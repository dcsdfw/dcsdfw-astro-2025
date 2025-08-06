import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What commercial cleaning services do you offer in Dallas?",
    answer: "Dream Cleaned Services provides comprehensive commercial cleaning solutions for Dallas businesses, including office cleaning, medical facility sanitization, retail space maintenance, floor care, window cleaning, restroom sanitization, and specialized services tailored to your business needs."
  },
  {
    question: "How often do you recommend cleaning services for office spaces?",
    answer: "The optimal cleaning frequency depends on your office size, foot traffic, and specific needs. Most offices benefit from daily cleaning of high-touch surfaces and restrooms, with more comprehensive cleaning 2-3 times per week. We'll work with you to create a customized schedule that fits your requirements and budget."
  },
  {
    question: "Do you provide cleaning supplies and equipment?",
    answer: "Yes, Dream Cleaned Services provides all commercial-grade cleaning supplies, equipment, and eco-friendly products as part of our service. Our team comes fully equipped with everything needed to maintain your space to the highest standards of cleanliness."
  },
  {
    question: "Are your cleaning services environmentally friendly?",
    answer: "Absolutely. We prioritize eco-friendly cleaning practices and use green-certified products whenever possible. Our approach balances effective sanitization with environmental responsibility, creating healthier indoor environments for your staff and customers."
  },
  {
    question: "How do you ensure quality control for your cleaning services?",
    answer: "Quality assurance is built into every aspect of our operation. We implement regular inspections, detailed checklists, and follow-up reviews. Our supervisors conduct regular site visits, and we welcome client feedback to continuously improve our services."
  },
  {
    question: "Can you accommodate cleaning outside of business hours?",
    answer: "Yes, we specialize in after-hours and weekend cleaning to minimize disruption to your operations. Our flexible scheduling ensures your business activities remain uninterrupted while maintaining a pristine environment for your staff and customers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <section id="faq" className="py-20 bg-brand-cream/20">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-brand-cream text-brand-gold rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="mb-4 font-heading text-balance">
            Answers to Common Questions About Our Commercial Cleaning Services
          </h2>
          <p className="text-muted-foreground text-balance">
            Get quick answers to the most common questions about our commercial cleaning services in Dallas. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-brand-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand-gold flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Questions Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-4">
              Have more questions about our commercial cleaning services?
            </p>
            <a 
              href="#contact" 
              className="text-brand-gold hover:text-brand-gold/80 transition-colors text-lg font-medium inline-flex items-center"
            >
              Contact our team for personalized answers
              <ChevronDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}