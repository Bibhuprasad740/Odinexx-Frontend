import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Linkedin, Instagram, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: MessageSquare, href: 'https://discord.com', label: 'Discord' },
  ];

  const quickLinks = ['About Us', 'Events', 'Teams', 'Leaderboard', 'Stream'];
  const supportLinks = ['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy'];

  return (
    <footer className="w-full mx-auto relative bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
      {/* Subtle background effects matching tournaments */}
      <div className="absolute inset-0 bg-[radial-gradient(#0891b220_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold text-white flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 w-1 h-6 mr-2 rounded-full"></span>
            About Odinexx
          </h3>
          <p className="text-gray-400 text-sm">
            Your ultimate destination for competitive gaming tournaments, live streams, and community events.
          </p>
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label={social.label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold text-white flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 w-1 h-6 mr-2 rounded-full"></span>
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold text-white flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 w-1 h-6 mr-2 rounded-full"></span>
            Support
          </h3>
          <ul className="space-y-3">
            {supportLinks.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold text-white flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 w-1 h-6 mr-2 rounded-full"></span>
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start text-gray-400">
              <Mail size={16} className="text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
              <span>support@odinexx.com</span>
            </li>
            <li className="flex items-start text-gray-400">
              <Phone size={16} className="text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start text-gray-400">
              <MapPin size={16} className="text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
              <span>123 Gaming Street, E-sports City</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400 pb-6"
      >
        <p>&copy; {new Date().getFullYear()} Odinexx. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;