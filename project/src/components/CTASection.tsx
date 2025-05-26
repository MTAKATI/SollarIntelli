import { ArrowRight, Sun } from 'lucide-react';
import Button from './ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-yellow-500 relative overflow-hidden">
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Sun className="h-16 w-16 text-yellow-300" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Your Roof is Ready. Are You?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Start your solar journey today and discover how much you could save with clean, renewable energy.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="white" 
              size="lg"
              className="group"
            >
              Try the Calculator Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline-white" 
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </div>
          
          <p className="mt-8 text-white/80 text-sm">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;