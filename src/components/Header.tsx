import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import Button from './ui/Button';

interface HeaderProps {
  scrolled: boolean;
  onLogin?: () => void;
  onSignUp?: () => void;
}

const Header = ({ scrolled, onLogin, onSignUp }: HeaderProps) => {
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
          <Link to="/" className="flex items-center">
            <Sun className="h-8 w-8 text-yellow-500 mr-2" />
            <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              SolarIntelli
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>
              Features
            </Link>
            <Link to="/#how-it-works" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>
              How It Works
            </Link>
            <Link to="/#pricing" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>
              Pricing
            </Link>
            <Button variant="secondary" size="sm" onClick={onLogin}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={onSignUp}>
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
              <Link
                to="/#features"
                className="text-gray-700 hover:text-yellow-500 px-4 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/#how-it-works"
                className="text-gray-700 hover:text-yellow-500 px-4 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/#pricing"
                className="text-gray-700 hover:text-yellow-500 px-4 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-2">
                <Button variant="secondary" size="sm" fullWidth onClick={onLogin}>
                  Sign In
                </Button>
                <Button variant="primary" size="sm" fullWidth onClick={onSignUp}>
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