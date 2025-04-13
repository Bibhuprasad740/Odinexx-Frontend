import { motion } from 'framer-motion';
import { MessageCircle, Users, Star, Share2, Trophy, Clock, Calendar, ArrowRight } from 'lucide-react';
import TournamentBrackets from '../components/TournamentBrackets';

const Stream = () => {
  return (
    <div className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-700/20 to-purple-900/20 backdrop-blur-sm text-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative">
        {/* Header section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">
            Live Event
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Odinexx Championship Finals</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch the top teams battle for glory in this championship finale
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stream player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="aspect-video">
                <iframe
                  src={"/static/graphics3.gif"}
                  title="Live Stream"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center px-3 py-1 rounded-lg bg-cyan-900/30 border border-cyan-500/30 text-cyan-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">24.5K watching</span>
                    </div>
                    <div className="flex items-center px-3 py-1 rounded-lg bg-green-900/30 border border-green-500/30 text-green-400">
                      <span className="text-sm font-bold">LIVE</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 hover:bg-gray-800/70 transition-all">
                      <Share2 className="h-5 w-5 text-cyan-300" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 hover:bg-gray-800/70 transition-all">
                      <Star className="h-5 w-5 text-cyan-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chat section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col"
          >
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center text-cyan-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </h3>
                <div className="text-sm text-cyan-400">24.5K online</div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center">
                    <Users className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cyan-300">Player_{index + 1}</p>
                    <p className="text-sm text-gray-300">
                      {index % 3 === 0 ? "GG! That play was insane! 🔥" :
                        index % 3 === 1 ? "Team Alpha is dominating! 🏆" :
                          "What a comeback! 🎮"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-800">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="overflow-x-auto md:px-8 py-20">
          <TournamentBrackets />
        </div>

        {/* Tournament info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center text-cyan-300">
              <Trophy className="w-5 h-5 mr-2" />
              Tournament Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-400 mb-6">
                  Welcome to the Odinexx Championship Finals! Watch as the top teams battle it out for the grand prize and glory.
                  Don't forget to follow our channel for more exciting tournaments and events.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center px-3 py-2 rounded-lg bg-cyan-900/30 border border-cyan-500/30 text-cyan-300">
                    <Trophy className="w-4 h-4 mr-2" />
                    <span className="font-medium">$100,000 Prize Pool</span>
                  </div>
                  <div className="flex items-center px-3 py-2 rounded-lg bg-cyan-900/30 border border-cyan-500/30 text-cyan-300">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">16 Teams</span>
                  </div>
                  <div className="flex items-center px-3 py-2 rounded-lg bg-cyan-900/30 border border-cyan-500/30 text-cyan-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">March 13-15, 2025</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center text-cyan-300">
                  <Clock className="w-5 h-5 mr-2" />
                  Event Schedule
                </h4>
                <div className="space-y-3">
                  {[
                    { time: "2:00 PM EST", stage: "Quarter Finals", status: "Completed" },
                    { time: "4:00 PM EST", stage: "Semi Finals", status: "Completed" },
                    { time: "6:00 PM EST", stage: "Finals", status: "Live Now" },
                    { time: "8:00 PM EST", stage: "Awards Ceremony", status: "Upcoming" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 transition-all">
                      <div className="flex items-center">
                        <div className="w-2 h-6 bg-cyan-500 mr-3 rounded-full"></div>
                        <span className="font-medium">{item.stage}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">{item.time}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${item.status === 'Live Now' ? 'bg-green-900/30 text-green-400 border border-green-500/30' :
                          item.status === 'Completed' ? 'bg-gray-800/30 text-gray-400 border border-gray-600/30' :
                            'bg-cyan-900/30 text-cyan-400 border border-cyan-500/30'
                          }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
          >
            Join Next Tournament
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Stream;