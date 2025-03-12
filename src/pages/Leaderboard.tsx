import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, TrendingUp } from 'lucide-react';

const Leaderboard = () => {
  const players = [
    {
      rank: 1,
      name: "BlazeMaster",
      score: 2850,
      wins: 145,
      winRate: "78%",
      tier: "Diamond",
    },
    {
      rank: 2,
      name: "ShadowNinja",
      score: 2780,
      wins: 138,
      winRate: "75%",
      tier: "Diamond",
    },
    {
      rank: 3,
      name: "QuantumWarrior",
      score: 2700,
      wins: 132,
      winRate: "73%",
      tier: "Diamond",
    },
    {
      rank: 4,
      name: "CyberPhoenix",
      score: 2650,
      wins: 128,
      winRate: "71%",
      tier: "Platinum",
    },
    {
      rank: 5,
      name: "StormRider",
      score: 2600,
      wins: 125,
      winRate: "70%",
      tier: "Platinum",
    },
    {
      rank: 6,
      name: "DragonSlayer",
      score: 2550,
      wins: 120,
      winRate: "68%",
      tier: "Platinum",
    },
    {
      rank: 7,
      name: "NeonBlade",
      score: 2500,
      wins: 118,
      winRate: "67%",
      tier: "Gold",
    },
    {
      rank: 8,
      name: "VoidWalker",
      score: 2450,
      wins: 115,
      winRate: "65%",
      tier: "Gold",
    },
    {
      rank: 9,
      name: "FrostBite",
      score: 2400,
      wins: 112,
      winRate: "64%",
      tier: "Gold",
    },
    {
      rank: 10,
      name: "ThunderBolt",
      score: 2350,
      wins: 110,
      winRate: "63%",
      tier: "Gold",
    },
  ];

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
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold neon-text mb-4"
          >
            Global Leaderboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Top players competing for glory
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-lg overflow-hidden neon-border"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left">Rank</th>
                  <th className="px-6 py-4 text-left">Player</th>
                  <th className="px-6 py-4 text-left">Score</th>
                  <th className="px-6 py-4 text-left">Wins</th>
                  <th className="px-6 py-4 text-left">Win Rate</th>
                  <th className="px-6 py-4 text-left">Tier</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border hover:bg-background/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center w-8 h-8">
                        {getRankIcon(player.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">{player.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        {player.score}
                      </div>
                    </td>
                    <td className="px-6 py-4">{player.wins}</td>
                    <td className="px-6 py-4">{player.winRate}</td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center ${getTierColor(player.tier)}`}>
                        <Star className="h-4 w-4 mr-1" />
                        {player.tier}
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