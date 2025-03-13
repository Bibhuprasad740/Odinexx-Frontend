import { motion } from 'framer-motion';
import { Users, Shield, Gamepad, ArrowRight } from 'lucide-react';

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: 'Phoenix Elite',
      logo: 'https://images.unsplash.com/photo-1594919127564-005c85bd74c3?auto=format&fit=crop&q=80&w=1000',
      rank: '#1',
      wins: 28,
      losses: 4,
      members: [
        { name: 'Alex "Blaze" Chen', role: 'Captain' },
        { name: 'Sarah "Viper" Kim', role: 'Support' },
        { name: 'Mike "Thunder" Johnson', role: 'Entry' },
        { name: 'Lisa "Storm" Garcia', role: 'Controller' },
        { name: 'Tom "Flash" Wilson', role: 'Initiator' },
      ],
    },
    {
      id: 2,
      name: 'Dragon Warriors',
      logo: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=1000',
      rank: '#2',
      wins: 25,
      losses: 7,
      members: [
        { name: 'James "Dragon" Lee', role: 'Captain' },
        { name: 'Emma "Fire" Brown', role: 'Support' },
        { name: 'David "Blade" Taylor', role: 'Entry' },
        { name: 'Anna "Ice" Martinez', role: 'Controller' },
        { name: 'Chris "Shadow" Anderson', role: 'Initiator' },
      ],
    },
    {
      id: 3,
      name: 'Cyber Knights',
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
      rank: '#3',
      wins: 22,
      losses: 10,
      members: [
        { name: 'Ryan "Knight" Miller', role: 'Captain' },
        { name: 'Sophie "Queen" Davis', role: 'Support' },
        { name: 'Jack "Bishop" White', role: 'Entry' },
        { name: 'Maya "Rook" Thompson', role: 'Controller' },
        { name: 'Kevin "Pawn" Moore', role: 'Initiator' },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-[100vw] overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative hero-pattern">
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
            Professional Teams
          </motion.h1>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-cyan-700 mx-auto mt-2 mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-300"
          >
            Meet the top competitive gaming teams
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(6,182,212,0.7)' }}
              className="relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm transition-all duration-300"
            >
              {/* Accent corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-cyan-900/30 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                      <Shield className="w-8 h-8 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">{team.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="px-2 py-1 rounded bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm">
                          Rank: {team.rank}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-cyan-900/30 px-3 py-2 rounded border border-cyan-500/30 text-center">
                    <p className="text-sm text-cyan-300">Win/Loss</p>
                    <p className="text-lg font-bold">
                      <span className="text-green-400">{team.wins}</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-red-400">{team.losses}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center text-cyan-300">
                    <Users className="w-5 h-5 mr-2 text-cyan-300" />
                    Team Roster
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {team.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex items-center p-3 rounded-lg bg-cyan-900/10 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-900/20 transition-all"
                      >
                        <Gamepad className="w-4 h-4 mr-2 text-cyan-300" />
                        <div>
                          <p className="font-medium text-white">{member.name}</p>
                          <p className="text-sm text-cyan-300">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full flex items-center justify-center px-4 py-3 rounded-md bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold tracking-wide transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] border border-cyan-500/50">
                  View Team Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;