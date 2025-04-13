import { motion } from 'framer-motion';
import { Trophy, ChevronRight, Calendar, Award, Zap, Shield, Gamepad2, Image, FileText, Info, Users, MapPin } from 'lucide-react';
import tournament from '../data/tournament_data';

const CreateTournament = () => {
  return (
    <div className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden hero-pattern">
      {/* Background floating blurs */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-3"
            animate={{ rotateY: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <Trophy className="h-8 w-8 text-yellow-400" />
          </motion.div>
          <motion.span 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase py-1 px-3 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Tournament Manager
          </motion.span>
          <h2 className="text-4xl font-extrabold mt-4 mb-4 bg-gradient-to-r from-white via-cyan-100 to-white text-transparent bg-clip-text">
            Create New Tournament
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Set up your tournament bracket, customize settings, and invite teams to compete for glory.
          </p>
        </motion.div>

        {/* Tournament Details Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="backdrop-blur-lg bg-gray-800/40 rounded-xl border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Tournament Name */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Tournament Name</label>
              <div className="relative">
                <Zap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Odinexx Championship"
                  defaultValue={tournament.name}
                />
              </div>
            </div>

            {/* Tournament Dates */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Dates</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Select dates"
                  defaultValue={tournament.date}
                />
              </div>
            </div>

            {/* Prize Pool */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Prize Pool</label>
              <div className="relative">
                <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="$100,000"
                  defaultValue={tournament.prize}
                />
              </div>
            </div>

            {/* Game Name */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Game Name</label>
              <div className="relative">
                <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="e.g. Valorant, CSGO, Dota 2"
                />
              </div>
            </div>

            {/* Logo Upload */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Tournament Logo</label>
              <div className="relative">
                <Image className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="file"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-400 bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 file:bg-cyan-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:mr-3 file:cursor-pointer transition-all duration-300"
                />
              </div>
            </div>

            {/* Max Teams */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Max Teams</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="number"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="e.g. 16"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="e.g. Online / LAN Venue"
                />
              </div>
            </div>

            {/* Rules */}
            <div className="space-y-2 group md:col-span-3">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Rules</label>
              <div className="relative">
                <FileText className="absolute left-3 top-5 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <textarea
                  rows="3"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter tournament rules here..."
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-2 group md:col-span-3">
              <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">Instructions</label>
              <div className="relative">
                <Info className="absolute left-3 top-5 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <textarea
                  rows="3"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Extra instructions for players or organizers."
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bracket Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="backdrop-blur-lg bg-gray-800/40 rounded-xl border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 p-8"
        >
          <h3 className="text-xl font-bold mb-8 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tournament Bracket</span>
          </h3>
          
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 15px 2px rgba(8, 145, 178, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold transition-all duration-300 shadow-lg shadow-cyan-900/30 group"
          >
            Create Tournament
            <ChevronRight className="w-5 h-5 ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 15px 2px rgba(8, 145, 178, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl border-2 border-cyan-500/40 hover:border-cyan-400/70 bg-gray-800/30 backdrop-blur-sm text-cyan-300 hover:text-cyan-200 font-bold transition-all duration-300 shadow-lg shadow-cyan-900/10"
          >
            Save as Draft
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateTournament;
