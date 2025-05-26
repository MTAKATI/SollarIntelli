import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { LineChart, BarChart3, PieChart, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const DashboardPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Smart Analytics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Solar Investment, Visualized
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make data-driven decisions with our AI-powered analytics dashboard. Track savings, ROI, and system performance in real-time.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* ROI Chart */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">ROI Projection</h3>
                  <LineChart className="h-5 w-5 text-green-600" />
                </div>
                <div className="h-40 bg-gradient-to-t from-green-100 to-green-50 rounded-lg flex items-end p-4">
                  <div className="w-4 h-20 bg-green-500 rounded"></div>
                  <div className="w-4 h-24 bg-green-500 rounded mx-2"></div>
                  <div className="w-4 h-32 bg-green-500 rounded"></div>
                  <div className="w-4 h-28 bg-green-500 rounded mx-2"></div>
                  <div className="w-4 h-36 bg-green-500 rounded"></div>
                </div>
              </div>

              {/* Energy Production */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Energy Production</h3>
                  <BarChart3 className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="h-40 bg-gradient-to-t from-yellow-100 to-yellow-50 rounded-lg flex items-end justify-around p-4">
                  {[35, 45, 60, 50, 70, 55, 40].map((height, index) => (
                    <div
                      key={index}
                      className="w-3 bg-yellow-500 rounded"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* System Efficiency */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">System Efficiency</h3>
                  <PieChart className="h-5 w-5 text-blue-600" />
                </div>
                <div className="h-40 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-full h-full">
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-blue-100"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="377"
                        strokeDashoffset="94.25"
                        className="text-blue-500"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-2xl font-bold text-gray-800">75%</span>
                      <span className="block text-sm text-gray-500">Optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">$24,500</p>
                  <p className="text-sm text-gray-600">Projected Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-500">5.2 yrs</p>
                  <p className="text-sm text-gray-600">Payback Period</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">12.4 kW</p>
                  <p className="text-sm text-gray-600">System Size</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">98%</p>
                  <p className="text-sm text-gray-600">Energy Offset</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
              >
                Get Your Custom Report
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-400 to-green-200 rounded-full opacity-20 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;