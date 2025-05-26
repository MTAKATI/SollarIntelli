import { CheckCircle, XCircle } from 'lucide-react';
import Button from './ui/Button';
import { pricingPlans } from '../constants/pricing';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose the Right Plan for You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From homeowners to solar professionals, we have options for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
                index === 1 ? 'border-2 border-green-500 relative' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-b-lg text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-6 ${index === 1 ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 h-12">{plan.description}</p>
                
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  {plan.period && <span className="text-gray-500">/{plan.period}</span>}
                </div>
                
                <Button 
                  variant={index === 1 ? "primary" : "secondary"} 
                  size="md" 
                  fullWidth
                >
                  {plan.buttonText}
                </Button>
              </div>
              
              <div className="border-t border-gray-100 p-6">
                <h4 className="font-semibold mb-4">Features include:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.nonFeatures && plan.nonFeatures.map((feature, idx) => (
                    <li key={`non-${idx}`} className="flex items-start text-gray-400">
                      <XCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">
            Need a custom solution for your business?
          </p>
          <a href="#contact" className="text-green-600 font-semibold hover:underline">
            Contact us for enterprise pricing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;