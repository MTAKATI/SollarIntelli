import { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import Button from './ui/Button';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-yellow-500 mr-2" />
            <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              SolarIntelli
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>
              Features
            </a>
            <a href="#how-it-works" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>
              How It Works
            </a>
            <a href="#pricing" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>
              Pricing
            </a>
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-4 shadow-lg py-4 px-2 absolute left-4 right-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-yellow-500 px-4 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-yellow-500 px-4 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-yellow-500 px-4 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-2">
                <Button variant="secondary" size="sm" fullWidth>
                  Sign In
                </Button>
                <Button variant="primary" size="sm" fullWidth>
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;