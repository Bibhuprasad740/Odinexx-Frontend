import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase authentication
    toast.info('Login functionality coming soon!');
  };

  return (
    <div className="min-h-screen w-[100vw] overflow-hidden flex items-center justify-center px-4 bg-gray-900 text-white relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 bg-[radial-gradient(#3448ff33_1px,transparent_1px)] bg-[size:20px_20px] blur-[1px] -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 relative z-10"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] mb-4"
          >
            Welcome Back
          </motion.h2>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-300"
          >
            Sign in to your account
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm p-8"
        >
          {/* Accent corner elements */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-300">
                Email address
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-300" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full pl-10 pr-3 py-2 border border-cyan-500/30 rounded-md bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-cyan-300">
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-300" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="block w-full pl-10 pr-3 py-2 border border-cyan-500/30 rounded-md bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            >
              Sign in
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-cyan-300">Don't have an account? </span>
            <Link to="/register" className="text-cyan-400 hover:text-cyan-300">
              Register now
            </Link>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;