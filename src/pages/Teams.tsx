import { motion } from 'framer-motion';
import { Users, Gamepad, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8  text-white relative overflow-hidden">

      <div className="max-w-7xl  mt-8 mx-auto relative">
        {/* Header section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">
            Competitive Teams
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Top Esports Organizations</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the elite teams dominating the competitive gaming scene
          </p>
        </motion.div>

        {/* Teams grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="p-6">
                {/* Team header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/50">
                      <img 
                        src={team.logo} 
                        alt={team.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{team.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="px-2 py-1 text-xs font-medium bg-cyan-900/30 text-cyan-300 rounded">
                          {team.rank} Rank
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-cyan-300">Record</p>
                    <p className="text-lg font-bold">
                      <span className="text-green-400">{team.wins}W</span>
                      <span className="text-gray-400 mx-1">/</span>
                      <span className="text-red-400">{team.losses}L</span>
                    </p>
                  </div>
                </div>

                {/* Team roster */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold flex items-center text-cyan-300 mb-4">
                    <Users className="w-5 h-5 mr-2" />
                    Team Roster
                  </h4>
                  <div className="space-y-3">
                    {team.members.map((member, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 transition-all"
                      >
                        <Gamepad className="w-4 h-4 mr-3 text-cyan-400" />
                        <div>
                          <p className="font-medium text-white">{member.name}</p>
                          <p className="text-xs text-cyan-400">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View team button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center py-3 px-6 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                >
                  View Team
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;