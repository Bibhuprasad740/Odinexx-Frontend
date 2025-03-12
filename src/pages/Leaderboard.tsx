import { motion } from 'framer-motion';
import { Trophy, Medal, Star, TrendingUp } from 'lucide-react';
import players from '../data/players_data';

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Medal className="h-6 w-6 text-amber-700" />;
    return <span className="text-lg font-bold">{rank}</span>;
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Diamond': return 'text-cyan-400';
      case 'Platinum': return 'text-purple-400';
      case 'Gold': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen w-[100vw] overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 bg-[radial-gradient(#3448ff33_1px,transparent_1px)] bg-[size:20px_20px] blur-[1px] -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] mb-4"
          >
            Global Leaderboard
          </motion.h1>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-300"
          >
            Top players competing for glory
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm"
        >
          {/* Accent corner elements */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-500/30">
                  <th className="px-6 py-4 text-left text-cyan-300">Rank</th>
                  <th className="px-6 py-4 text-left text-cyan-300">Player</th>
                  <th className="px-6 py-4 text-left text-cyan-300">Score</th>
                  <th className="px-6 py-4 text-left text-cyan-300">Wins</th>
                  <th className="px-6 py-4 text-left text-cyan-300">Win Rate</th>
                  <th className="px-6 py-4 text-left text-cyan-300">Tier</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-cyan-500/20 hover:bg-cyan-900/10 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center w-8 h-8">
                        {getRankIcon(player.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{player.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-cyan-300" />
                        <span className="text-white">{player.score}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white">{player.wins}</td>
                    <td className="px-6 py-4 text-white">{player.winRate}</td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center ${getTierColor(player.tier)}`}>
                        <Star className="h-4 w-4 mr-1" />
                        <span className="text-white">{player.tier}</span>
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;