import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-900/80 to-gray-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">
            Join the Community
          </span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ready to Begin Your Esports Journey?
          </motion.h2>
          <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto"></div>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of players worldwide. Register now and take your first step toward esports glory.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/register"
            className="group inline-flex items-center justify-center px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Register Now
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300 hover:bg-cyan-900/20"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
      
      {/* Optional decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default CallToAction;