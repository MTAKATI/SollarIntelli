import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

const FeatureCard = ({ icon, title, description, highlight }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:bg-gradient-to-br hover:from-green-50 hover:to-yellow-50">
      <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <div className="h-8 w-8">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {highlight && (
        <div className="inline-block py-1 px-3 bg-green-100 text-green-800 text-sm font-medium rounded-full">
          {highlight}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;