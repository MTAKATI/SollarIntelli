import { 
  Calculator, 
  Home, 
  Cloud, 
  FileText, 
  Brain,
  BarChart,
  Zap,
  Shield,
  Sun,
  LineChart,
  Map,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './ui/FeatureCard';

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
          >
            Intelligent Features
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            AI-Powered Solar Intelligence
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our advanced technology delivers accurate solar predictions and personalized recommendations.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<Calculator className="text-green-600" />}
              title="Smart ROI Calculator"
              description="Get precise calculations on solar panel cost, savings, and payback period based on your specific location and usage patterns."
              highlight="Up to 98% accuracy"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<Map className="text-green-600" />}
              title="Local Irradiance Mapping"
              description="Advanced satellite data and local weather patterns analyze your roof's solar potential with pinpoint accuracy."
              highlight="Real-time data"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<LineChart className="text-green-600" />}
              title="20-Year Projections"
              description="View detailed financial forecasts showing your energy savings, ROI, and carbon offset over two decades."
              highlight="Long-term insights"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<Award className="text-green-600" />}
              title="Panel Matching AI"
              description="Our AI recommends the perfect solar panel system based on your roof, budget, and energy goals."
              highlight="Personalized picks"
            />
          </motion.div>
        </motion.div>

        <div className="mt-20">
          <motion.div 
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              The SolarIntelli Advantage
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Experience the future of solar planning with our cutting-edge technology.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 text-center group hover:bg-gradient-to-br hover:from-green-50 hover:to-yellow-50"
            >
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="h-7 w-7 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Machine Learning</h4>
              <p className="text-gray-600">Self-improving algorithms for better accuracy over time</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 text-center group hover:bg-gradient-to-br hover:from-green-50 hover:to-yellow-50"
            >
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sun className="h-7 w-7 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Energy Analytics</h4>
              <p className="text-gray-600">Advanced monitoring and performance tracking</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 text-center group hover:bg-gradient-to-br hover:from-green-50 hover:to-yellow-50"
            >
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-7 w-7 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Instant Analysis</h4>
              <p className="text-gray-600">Get results in seconds, not days or weeks</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 text-center group hover:bg-gradient-to-br hover:from-green-50 hover:to-yellow-50"
            >
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Data Security</h4>
              <p className="text-gray-600">Enterprise-grade protection for your information</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;