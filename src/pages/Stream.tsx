import { motion } from 'framer-motion';
import { MessageCircle, Users, Star, Share2, Trophy, Clock, Calendar } from 'lucide-react';

const Stream = () => {
  return (
    <div className="min-h-screen w-[100vw] overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative">

      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
            ODINEXX CHAMPIONSHIP FINALS
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-cyan-700 mx-auto mt-2 mb-2"></div>
          <p className="text-cyan-300">LIVE NOW - TOP TEAMS BATTLE FOR GLORY</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stream Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg overflow-hidden border-2 border-cyan-500/50 bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] relative"
            >
              {/* Accent corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/live/r-SzVQ9luHk?si=pzkYYCPJVaruK0pU"
                  title="Live Stream"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-cyan-900/30 px-3 py-1 rounded border border-cyan-500/30 text-cyan-300 flex items-center mr-4">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="font-medium">24.5K watching</span>
                    </div>
                    <div className="bg-green-900/50 text-green-400 border border-green-500/50 px-3 py-1 rounded text-sm font-bold">
                      LIVE
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 hover:bg-cyan-800/50 transition-all">
                      <Share2 className="h-5 w-5 text-cyan-300" />
                    </button>
                    <button className="p-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 hover:bg-cyan-800/50 transition-all">
                      <Star className="h-5 w-5 text-cyan-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chat Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative border-2 border-cyan-500/50 rounded-lg bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] h-64 lg:h-full flex flex-col"
          >
            {/* Accent corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

            <div className="p-4 border-b border-cyan-500/30">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">LIVE CHAT</h2>
                <MessageCircle className="h-5 w-5 text-cyan-400" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Chat messages */}
              <div className="space-y-4">
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
            </div>

            <div className="p-4 border-t border-cyan-500/30">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="w-full px-4 py-2 rounded-md bg-gray-800/80 border border-cyan-500/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tournament Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        >
          {/* Accent corner elements */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700 mb-4">TOURNAMENT DETAILS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 mb-4">
                  Welcome to the Odinexx Championship Finals! Watch as the top teams battle it out for the grand prize and glory.
                  Don't forget to follow our channel for more exciting tournaments and events.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="bg-cyan-900/30 px-3 py-2 rounded border border-cyan-500/30 text-cyan-300 flex items-center">
                    <Trophy className="h-4 w-4 mr-2" />
                    <span className="font-bold text-yellow-300">$100,000 PRIZE POOL</span>
                  </div>
                  <div className="bg-cyan-900/30 px-3 py-2 rounded border border-cyan-500/30 text-cyan-300 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>16 Teams</span>
                  </div>
                  <div className="bg-cyan-900/30 px-3 py-2 rounded border border-cyan-500/30 text-cyan-300 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 13-15, 2025</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-cyan-300 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Tournament Schedule
                </h3>
                <div className="space-y-2">
                  {[
                    { time: "2:00 PM EST", stage: "Quarter Finals", status: "Completed" },
                    { time: "4:00 PM EST", stage: "Semi Finals", status: "Completed" },
                    { time: "6:00 PM EST", stage: "Finals", status: "Live Now" },
                    { time: "8:00 PM EST", stage: "Awards Ceremony", status: "Upcoming" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border border-cyan-500/20 rounded bg-cyan-900/10">
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-cyan-500 mr-3"></div>
                        <span>{item.stage}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400">{item.time}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.status === 'Live Now'
                            ? 'bg-green-900/50 text-green-400 border border-green-500/50'
                            : item.status === 'Completed'
                              ? 'bg-gray-900/50 text-gray-400 border border-gray-500/50'
                              : 'bg-cyan-700/50 text-cyan-400 border border-cyan-500/50'
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <button className="px-8 py-3 rounded-md bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-500/50 uppercase">
            Join Next Tournament
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Stream;