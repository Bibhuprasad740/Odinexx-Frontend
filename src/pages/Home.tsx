import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, ArrowRight, Twitch, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import LiveStreams from '../components/LiveStreams';
import FeatureTournaments from '../components/FeatureTournaments';
import PastTournaments from '../components/PastTournaments';

const Home = () => {

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Gaming Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-blue-900/40 to-black"></div>
      </div>

      {/* Animated Neon Grid Background */}
      <div className="fixed inset-0 z-0 opacity-0">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
          {Array(144).fill(null).map((_, i) => (
            <motion.div
              key={i}
              className="bg-background/80 rounded-md"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                boxShadow: [
                  '0 0 5px rgba(80, 70, 230, 0.3)',
                  '0 0 20px rgba(80, 70, 230, 0.8)',
                  '0 0 5px rgba(80, 70, 230, 0.3)'
                ]
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
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
              className="w-full h-64 object-cover rounded-lg shadow-[0_0_15px_rgba(105,39,209,0.5)]"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_10px_rgba(80,70,230,0.8)]"
          >
            Welcome to Odinexx
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
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
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_0_15px_rgba(80,70,230,0.5)] hover:shadow-[0_0_25px_rgba(80,70,230,0.8)]"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-900/20 transition-all shadow-[0_0_10px_rgba(80,70,230,0.3)] hover:shadow-[0_0_15px_rgba(80,70,230,0.5)]"
            >
              Explore Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-primary/20 backdrop-blur-sm">
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
                className="p-6 rounded-lg bg-gradient-to-b from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-blue-500/30 shadow-[0_0_15px_rgba(80,70,230,0.3)]"
              >
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-blue-400" />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-blue-300">{stat.label}</p>
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
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <LiveStreams />
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <FAQ />
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-[90vw] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_10px_rgba(80,70,230,0.5)]">Why Choose Odinexx?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Professional Tournaments",
                description: "Compete in high-stakes tournaments with professional organization and substantial prize pools."
              },
              {
                icon: Users,
                title: "Team Building",
                description: "Form your dream team, manage rosters, and coordinate with players from around the world."
              },
              {
                icon: Calendar,
                title: "Regular Events",
                description: "Stay engaged with regular tournaments, practice matches, and community events."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, boxShadow: '0 0 25px rgba(80, 70, 230, 0.8)' }}
                className="p-6 rounded-lg bg-gradient-to-b from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-blue-500/30 shadow-[0_0_15px_rgba(80,70,230,0.3)] transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_10px_rgba(80,70,230,0.5)]"
          >
            Ready to Begin Your Esports Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto"
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
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_0_15px_rgba(80,70,230,0.5)] hover:shadow-[0_0_25px_rgba(80,70,230,0.8)]"
            >
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-900/20 transition-all shadow-[0_0_10px_rgba(80,70,230,0.3)] hover:shadow-[0_0_15px_rgba(80,70,230,0.5)]"
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