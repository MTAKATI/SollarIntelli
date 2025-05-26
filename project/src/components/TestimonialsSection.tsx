import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Shield, Award, CheckCircle } from 'lucide-react';
import { testimonials } from '../constants/testimonials';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            What Users Are Saying
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Savings. Real Confidence.
            <span className="block text-green-600">Real Solar.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners and solar professionals who trust SolarIntelli.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Trust Badges */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-4 -translate-y-full">
              <div className="bg-green-50 px-4 py-2 rounded-full flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Verified Users</span>
              </div>
              <div className="bg-yellow-50 px-4 py-2 rounded-full flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Top Rated</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">AI-Powered</span>
              </div>
            </div>

            {/* Testimonial Card */}
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 shadow-lg"
            >
              <div className="absolute -top-6 left-10">
                <Quote className="h-12 w-12 text-green-400 opacity-50" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-green-100">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-green-600 font-medium">{testimonials[activeIndex].title}</p>
                    {testimonials[activeIndex].location && (
                      <p className="text-gray-500 text-sm mt-1">{testimonials[activeIndex].location}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-green-600 transition-colors focus:outline-none hover:scale-110 transition-transform"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-green-600 transition-colors focus:outline-none hover:scale-110 transition-transform"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-green-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-12 bg-gradient-to-r from-gray-50 to-white rounded-xl px-8 flex items-center justify-center text-gray-600 font-semibold shadow-sm hover:shadow-md transition-all">
              GreenCape
            </div>
            <div className="h-12 bg-gradient-to-r from-gray-50 to-white rounded-xl px-8 flex items-center justify-center text-gray-600 font-semibold shadow-sm hover:shadow-md transition-all">
              SSEG
            </div>
            <div className="h-12 bg-gradient-to-r from-gray-50 to-white rounded-xl px-8 flex items-center justify-center text-gray-600 font-semibold shadow-sm hover:shadow-md transition-all">
              SolarTech
            </div>
            <div className="h-12 bg-gradient-to-r from-gray-50 to-white rounded-xl px-8 flex items-center justify-center text-gray-600 font-semibold shadow-sm hover:shadow-md transition-all">
              EcoEnergy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;