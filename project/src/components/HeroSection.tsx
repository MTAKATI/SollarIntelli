import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './ui/Button';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C1C2C] via-green-800 to-yellow-500 opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-green-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container relative mx-auto px-4 md:px-6 z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-green-400/20 text-green-300 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            Powered by Advanced AI Technology
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Solar Savings You Can Trust.
            <span className="block text-yellow-400">Personalized by AI.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Get precise solar ROI calculations and personalized panel recommendations — powered by AI, tailored to your home.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              variant="primary" 
              size="lg"
              className="group"
            >
              Calculate My Savings
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 pt-8 border-t border-white/20"
          >
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <p className="text-2xl font-bold text-white mb-1">98%</p>
              <p className="text-sm text-white/80">Accuracy Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <p className="text-2xl font-bold text-white mb-1">2,500+</p>
              <p className="text-sm text-white/80">Homes Analyzed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <p className="text-2xl font-bold text-white mb-1">$4M+</p>
              <p className="text-sm text-white/80">Savings Found</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <p className="text-2xl font-bold text-white mb-1">200+</p>
              <p className="text-sm text-white/80">Pro Installers</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;