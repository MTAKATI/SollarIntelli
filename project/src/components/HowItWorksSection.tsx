import { MapPin, LineChart, FileCheck } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SolarIntelli Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your personalized solar savings report in just three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0">
            <div className="absolute left-0 top-0 bottom-0 right-1/2 bg-green-500"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                1
              </div>
              <div className="text-center pt-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enter Your Details</h3>
                <p className="text-gray-600">
                  Provide your location, roof details, and typical energy usage. We use satellite imagery to analyze your roof.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                2
              </div>
              <div className="text-center pt-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LineChart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Analyzes Your Data</h3>
                <p className="text-gray-600">
                  Our AI processes your information along with weather patterns, utility rates, and installation costs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                3
              </div>
              <div className="text-center pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Get Your Custom Report</h3>
                <p className="text-gray-600">
                  Receive a detailed report with savings calculations, system recommendations, and ROI projections.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to see your solar potential?</h3>
            <p className="text-gray-600 mb-6">
              Most users save between $10,000 - $30,000 over the lifetime of their solar system. 
              Find out how much you could save today.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              Start My Free Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;