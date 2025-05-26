import { useState } from 'react';
import { 
  Sun, 
  Clock, 
  TrendingUp, 
  Download, 
  Eye, 
  RefreshCw,
  User,
  LogOut,
  Settings,
  ChevronRight,
  ChevronDown,
  Bell,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleRecalculate = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Show success toast
      showToast('Calculations updated successfully!');
    }, 2000);
  };

  const showToast = (message: string) => {
    // Implementation for toast notification
    console.log(message);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">SolarIntelli</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <HelpCircle className="h-5 w-5" />
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2"
                    >
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Monthly Savings</h3>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">R850</p>
              <p className="text-sm text-gray-500 mt-1">per month</p>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Payback Period</h3>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">4.3</p>
              <p className="text-sm text-gray-500 mt-1">years</p>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">20-Year ROI</h3>
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">128%</p>
              <p className="text-sm text-gray-500 mt-1">return on investment</p>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </motion.div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Saved Reports */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Your Reports</h2>
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((report) => (
                    <motion.div 
                      key={report}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">Home Analysis #{report}</h3>
                        <p className="text-sm text-gray-500">Generated on March {report}, 2024</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-white transition-colors">
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-white transition-colors">
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recalculate Form */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Update Your Data</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Energy Bill (R)
                    </label>
                    <input 
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      Roof Orientation
                      <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                    >
                      <option>North</option>
                      <option>South</option>
                      <option>East</option>
                      <option>West</option>
                    </select>
                  </div>
                  <motion.button
                    type="button"
                    onClick={handleRecalculate}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <RefreshCw className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Recalculate Savings
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Recommendations */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended Panels</h2>
                <div className="space-y-4">
                  {[
                    {
                      name: "SunPower Maxeon",
                      efficiency: "22.8%",
                      warranty: "25 years",
                      cost: "R4.50",
                      tag: "AI Pick"
                    },
                    {
                      name: "LG NeON 2",
                      efficiency: "21.7%",
                      warranty: "25 years",
                      cost: "R4.20",
                      tag: "Best Value"
                    }
                  ].map((panel, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 border border-gray-200 rounded-xl hover:border-green-500 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-gray-900">{panel.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {panel.tag}
                        </span>
                      </div>
                      <div className="mt-2 space-y-1 text-sm text-gray-500">
                        <p>Efficiency: {panel.efficiency}</p>
                        <p>Warranty: {panel.warranty}</p>
                        <p>Cost per Watt: {panel.cost}</p>
                      </div>
                      <button className="mt-3 text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                        Why this match?
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Profile Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
                      value="john@example.com"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      defaultValue="John Doe"
                    />
                  </div>
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Reset Password
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;