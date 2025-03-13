import { motion } from 'framer-motion';
import { Trophy, Users, ArrowRight, Twitch, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import LiveStreams from '../components/LiveStreams';
import FeatureTournaments from '../components/FeatureTournaments';
import PastTournaments from '../components/PastTournaments';
import Features from '../components/Features';

const Home = () => {

  return (
    <div className="relative bg-black text-white overflow-hidden hero-pattern">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Gaming Background"
          className="w-full h-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-cyan-700/20 to-black"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            {/* rgb(105,39,209) */}
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Esports Arena"
              className="w-full h-64 object-cover rounded-lg shadow-[0_0_15px_rgba(6,82,212,0.5)]"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 drop-shadow-[0_0_10px_rgba(80,70,230,0.8)]"
          >
            Welcome to Odinexx
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto"
          >
            Your Ultimate Gaming Tournament Platform. Compete, Stream, and Dominate the Digital Battlefield.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-600 text-white hover:from-cyan-700 hover:to-cyan-700 transition-all shadow-[0_0_15px_rgba(80,70,230,0.5)] hover:shadow-[0_0_25px_rgba(6, 82, 212,0.8)]"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-700/20 transition-all shadow-[0_0_10px_rgba(80,70,230,0.3)] hover:shadow-[0_0_15px_rgba(80,70,230,0.5)]"
            >
              Explore Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-cyan-500/10 backdrop-blur-sm">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Active Players", value: "25,000+", icon: Users },
              { label: "Tournaments", value: "500+", icon: Trophy },
              { label: "Prize Money", value: "$2.5M+", icon: Star },
              { label: "Live Streams", value: "200+", icon: Twitch }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-b from-cyan-500/30 to-cyan-900/40 backdrop-blur-md border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-cyan-400" />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-cyan-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <FeatureTournaments />
      </section>

      {/* Past Events Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <PastTournaments />
      </section>

      {/* Live Streams Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-700/20 to-purple-900/20 backdrop-blur-sm">
        <LiveStreams />
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 sm:px-6 lg:px-8">
        <FAQ />
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-4 px-4 sm:px-6 lg:px-8">
        <Features />
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-cyan-500/10 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(80,70,230,0.5)]"
          >
            Ready to Begin Your Esports Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of players worldwide. Register now and take your first step toward esports glory.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-600 text-white hover:from-cyan-700 hover:to-cayn-700 transition-all shadow-[0_0_15px_rgba(80,70,230,0.5)] hover:shadow-[0_0_25px_rgba(80,70,230,0.8)]"
            >
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-700/20 transition-all shadow-[0_0_10px_rgba(80,70,230,0.3)] hover:shadow-[0_0_15px_rgba(80,70,230,0.5)]"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* space */}
      <div className='py-32'></div>
    </div>
  );
};

export default Home;