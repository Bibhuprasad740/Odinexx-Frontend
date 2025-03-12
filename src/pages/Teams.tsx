import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Star, Shield, Gamepad, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold neon-text mb-4"
          >
            Professional Teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
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
              className="bg-card rounded-lg overflow-hidden neon-border"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{team.name}</h3>
                      <p className="text-muted-foreground">Rank: {team.rank}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Win/Loss</p>
                    <p className="text-lg font-semibold">{team.wins}/{team.losses}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Team Roster
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {team.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex items-center p-3 rounded-lg bg-background"
                      >
                        <Gamepad className="w-4 h-4 mr-2 text-primary" />
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
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