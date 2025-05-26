import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Download, 
  Share2, 
  ChevronDown, 
  Sun, 
  Home, 
  Battery, 
  DollarSign,
  ArrowLeft
} from 'lucide-react';

const ReportViewer = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('property');

  const tabs = [
    { id: 'property', label: 'Property Summary', icon: Home },
    { id: 'potential', label: 'Solar Potential', icon: Sun },
    { id: 'financial', label: 'Financial Analysis', icon: DollarSign },
    { id: 'setup', label: 'Recommended Setup', icon: Battery },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-500" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Cape Town Home Report</h1>
                <p className="text-sm text-gray-500">Generated June 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </motion.button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-8 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-green-600 border-green-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm">
          {activeTab === 'property' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <p className="mt-1 text-gray-900">123 Solar Street, Cape Town</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Roof Size</h3>
                  <p className="mt-1 text-gray-900">120 m²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Roof Orientation</h3>
                  <p className="mt-1 text-gray-900">North-facing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Current Energy Bill</h3>
                  <p className="mt-1 text-gray-900">R2,500/month</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'potential' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Solar Generation Potential</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Annual Solar Irradiance</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900">2,100 kWh/m²</p>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Excellent solar potential</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Estimated Monthly Generation</h3>
                  <div className="mt-4 h-40 flex items-end justify-between">
                    {[65, 80, 90, 70, 60, 50, 55, 65, 75, 85, 70, 60].map((height, index) => (
                      <div
                        key={index}
                        className="w-8 bg-green-500 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'financial' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Financial Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Initial Investment</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900">R85,000</p>
                  <p className="mt-1 text-sm text-gray-500">Including installation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Monthly Savings</h3>
                  <p className="mt-1 text-2xl font-bold text-green-600">R850</p>
                  <p className="mt-1 text-sm text-gray-500">Average</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">Payback Period</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900">4.3 years</p>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500">20-Year ROI</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900">128%</p>
                  <p className="mt-1 text-sm text-green-600">Above average returns</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'setup' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Recommended System Setup</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">SunPower Maxeon</h3>
                      <p className="text-sm text-gray-500 mt-1">Premium Solar Panels</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      AI Pick
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Efficiency</p>
                      <p className="font-medium">22.8%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Warranty</p>
                      <p className="font-medium">25 years</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Number of Panels</p>
                      <p className="font-medium">24 panels</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Total Power</p>
                      <p className="font-medium">8.4 kW</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-medium text-gray-900">Installation Details</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="ml-2 text-sm text-gray-600">North-facing orientation for optimal sun exposure</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="ml-2 text-sm text-gray-600">30° tilt angle for maximum efficiency</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="ml-2 text-sm text-gray-600">Micro-inverter system for better performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;