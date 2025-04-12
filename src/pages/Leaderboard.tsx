import { motion } from 'framer-motion';
import { Trophy, Medal, Star, TrendingUp } from 'lucide-react';
import players from '../data/players_data';

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-400" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-300" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-500" />;
    return <span className="text-sm font-medium">{rank}</span>;
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
    <div className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      
      <div className="max-w-7xl mt-8 mx-auto relative">
        {/* Header section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">
            Competitive Rankings
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Global Leaderboard</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Top players competing for esports glory
          </p>
        </motion.div>

        {/* Leaderboard table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Player</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Wins</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Win Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {players.map((player, index) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center w-6 h-6">
                        {getRankIcon(player.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-800 border border-cyan-500/30 flex items-center justify-center mr-3">
                          <span className="text-cyan-300 font-medium text-sm">
                            {player.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{player.name}</div>
                          <div className="text-xs text-cyan-400">#{player.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-cyan-300" />
                        <span className="text-white">{player.score}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{player.wins}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{player.winRate}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center ${getTierColor(player.tier)}`}>
                        <Star className="h-4 w-4 mr-1" />
                        <span className="text-white">{player.tier}</span>
                      </div>
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