import React, { useState, useEffect } from 'react';
import { GamepadIcon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Events', path: '/events' },
    { name: 'Teams', path: '/teams' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Stream', path: '/stream' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className={`fixed w-full z-50 border-b transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 border-cyan-500/30' : 'bg-gray-900/50 border-cyan-500/20'
    } backdrop-blur-md`}>
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 bg-[radial-gradient(#3448ff33_1px,transparent_1px)] bg-[size:20px_20px] blur-[1px] -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-16 right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-8 left-16 w-24 h-24 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <GamepadIcon className="h-8 w-8 text-cyan-300 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-50 group-hover:opacity-70 transition-all duration-300 -z-10"></div>
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              Odinexx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-3 py-2 text-sm font-medium uppercase tracking-wider"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <span className={`relative z-10 transition-all duration-300 ${
                  activeItem === index ? 'text-white' : 'text-cyan-300 hover:text-white'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-600 transform scale-x-0 ${
                  activeItem === index ? 'scale-x-100' : ''
                } transition-transform duration-300 origin-left rounded shadow-[0_0_10px_rgba(6,182,212,0.4)]`}></span>
                <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-cyan-700 transform scale-x-0 ${
                  activeItem === null ? 'hover:scale-x-100' : ''
                } transition-transform duration-300 origin-left shadow-[0_0_5px_rgba(6,182,212,0.6)]`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-300 hover:text-cyan-400 hover:bg-cyan-900/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300 shadow-[0_0_5px_rgba(6,182,212,0.3)]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden  transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-cyan-500/30 bg-gradient-to-b from-gray-900/90 to-gray-800/90">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-3 rounded text-base font-medium text-cyan-300 hover:bg-cyan-900/20 hover:border-cyan-500/30 hover:text-white transition-all duration-300 border border-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              <span className="border-l-2 border-cyan-500 pl-2">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Accent corner elements */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
    </nav>
  );
};

export default NavBar;