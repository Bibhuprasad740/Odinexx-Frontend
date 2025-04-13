import { useState, useEffect } from 'react';
import { Gamepad2, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Events', path: '/events' },
    { name: 'Teams', path: '/teams' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Stream', path: '/stream' },
    { name: 'About Us', path: '/about' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className={`w-full fixed z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-gray-900/70 backdrop-blur-sm'}`}>
      {/* Decorative glow effects */}
      <div className="absolute -top-16 right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-8 left-16 w-24 h-24 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <div className="relative p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
              <Gamepad2 className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Odinexx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 text-sm font-medium uppercase tracking-wider group"
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-cyan-500 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
            <Link to='/register' className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 text-white text-sm font-medium uppercase tracking-wider hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20">
              Register
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-cyan-500/20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300 border-l-2 border-transparent hover:border-cyan-500"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full mt-2 px-4 py-3 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 text-white text-base font-medium uppercase tracking-wider hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;