import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, User, Gamepad2 } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginType, setLoginType] = useState<'user' | 'player'>('user');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase authentication with loginType
    // toast.info(`Logging in as ${loginType}...`);
    navigate(loginType === 'user' ? '/dashboard' : '/player-dashboard');
  };

  return (
    <div className="w-full mx-auto relative py-16 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gif */}
      <img
        src={"/static/graphics4.gif"}
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg md:opacity-10 opacity-30"
      >
      </img>
      <div className="max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Left Side - Welcome Message */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">Welcome Back</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Sign In to Odinexx <span className="text-cyan-400">{loginType === 'user' ? 'User' : 'Player'}</span>
              </h2>
              <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto md:mx-0"></div>
              <p className="text-gray-400 max-w-md">
                {loginType === 'user'
                  ? "Access your account to manage tournaments, view analytics, and organize events."
                  : "Join tournaments, track your progress, and connect with other gamers."}
              </p>
            </motion.div>
          </div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 p-8 space-y-6"
            >
              {/* Login Type Toggle */}
              <div className="flex justify-center space-x-4 mb-4">
                <motion.button
                  type="button"
                  onClick={() => setLoginType('user')}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${loginType === 'user' ? 'bg-cyan-600/80 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70'}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <User className="w-4 h-4 mr-2" />
                  User Login
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setLoginType('player')}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${loginType === 'player' ? 'bg-cyan-600/80 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70'}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  Player Login
                </motion.button>
              </div>

              <div className="space-y-4">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-cyan-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center py-3 px-6 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
              >
                Sign In as {loginType === 'user' ? 'User' : 'Player'}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              {/* Footer Links */}
              <div className="text-center text-sm text-gray-400">
                <Link
                  to="/forgot-password"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Forgot password?
                </Link>
                <span className="mx-2">•</span>
                <span className="text-cyan-300">Don't have an account? </span>
                <Link
                  to="/register"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Register now
                </Link>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;