import { motion } from 'framer-motion';
import { useState } from 'react';
import tournament from '../data/tournament_data';
import { Trophy } from 'lucide-react';

const TournamentBrackets = () => {
  const [isHovered, setIsHovered] = useState(null);
  const getTeamById = (id) => tournament.teams.find((team) => team.id === id);

  // Helper function to get the position of a match in the next round
  const getNextMatchPosition = (currentRound, currentPosition) => {
    // For each match, determine which match in the next round it feeds into
    return Math.floor(currentPosition / 2);
  };

  return (
    <div className="flex min-w-max pb-8">
      {/* Dynamically render each round */}
      {tournament.matches.map((round, roundIndex) => {
        const isFinalRound = roundIndex === tournament.matches.length - 1;
        const isChampionship = isFinalRound && round.matches.length === 1;
        const roundNames = ["Quarterfinals", "Semifinals", "Finals", "Grand Finals"];
        
        // Calculate the height needed for this round based on number of matches
        const totalMatches = round.matches.length;
        const matchHeight = 120; // Approximate height of a match in pixels
        const roundHeight = totalMatches * matchHeight;

        return (
          <div
            key={`round-${roundIndex}`}
            className={`flex flex-col relative ${isFinalRound ? '' : 'pr-16'}`}
            style={{
              justifyContent: totalMatches === 1 ? 'center' : 'space-around',
              minHeight: roundHeight || 'auto'
            }}
          >
            {/* Round header */}
            <div className="flex justify-center mb-6">
              <motion.h4
                className={`text-sm font-bold uppercase tracking-wider py-2 px-4 rounded-full inline-block shadow-lg border ${
                  isChampionship
                    ? 'text-yellow-300 bg-gray-800/80 shadow-yellow-900/20 border-yellow-500/20'
                    : 'text-cyan-300 bg-gray-800/80 shadow-cyan-900/20 border-cyan-500/20'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {roundNames[roundIndex] || `Round ${roundIndex + 1}`}
              </motion.h4>
            </div>

            {/* Matches in this round */}
            {round.matches.map((match, matchIndex) => {
              const team1 = getTeamById(match.team1);
              const team2 = match.team2 ? getTeamById(match.team2) : null;
              const isWinner1 = match.winner === match.team1;
              const isWinner2 = team2 && match.winner === match.team2;
              
              // No bottom margin for last match in each round
              const spacingClass = matchIndex === round.matches.length - 1 ? '' : '';
              
              // Determine from which match in previous round this match gets its teams
              // Only needed for rounds after the first
              const prevRoundMatches = roundIndex > 0 ? tournament.matches[roundIndex - 1].matches.length : 0;
              const matchesPerNextRound = roundIndex < tournament.matches.length - 1 
                ? tournament.matches[roundIndex + 1].matches.length 
                : 0;
              
              return (
                <div
                  key={`match-${roundIndex}-${matchIndex}`}
                  className={`relative ${spacingClass} flex items-center justify-center m-2`}
                >
                  {/* Connector from previous round (for rounds after first) */}
                  {roundIndex > 0 && (
                    <>
                      {/* Connector lines from previous matches to this match */}
                      <div 
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16"
                        style={{ width: '50px', height: '3px', zIndex: 1 }}
                      >
                        <div className="w-full h-full bg-gradient-to-r from-transparent to-cyan-500"></div>
                      </div>
                      
                      {/* Two vertical lines that connect to previous matches */}
                      <div
                        className="absolute top-1/2 -translate-y-full -translate-x-16"
                        style={{
                          height: `${prevRoundMatches > 1 ? 40 : 0}px`,
                          width: '1px',
                          left: '0',
                          borderLeft: '3px solid',
                          borderImage: 'linear-gradient(to bottom, transparent, #22d3ee) 1',
                          borderImageSlice: 1,
                          zIndex: 1,
                          opacity: isHovered === match.id ? 0.8 : 0.5
                        }}
                      ></div>
                      
                      <div
                        className="absolute top-1/2 -translate-x-16"
                        style={{
                          height: `${prevRoundMatches > 1 ? 40 : 0}px`,
                          width: '1px',
                          left: '0',
                          borderLeft: '3px solid',
                          borderImage: 'linear-gradient(to top, transparent, #22d3ee) 1',
                          borderImageSlice: 1,
                          zIndex: 1,
                          opacity: isHovered === match.id ? 0.8 : 0.5
                        }}
                      ></div>
                    </>
                  )}

                  {/* Connector to next round (for all rounds except last) */}
                  {!isFinalRound && (
                    <div 
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full"
                      style={{ width: '16px', height: '2px', zIndex: 0 }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-transparent"></div>
                    </div>
                  )}

                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsHovered(match.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    {/* Match container */}
                    <div className="relative">
                      {isChampionship ? (
                        // Championship match styling
                        <motion.div
                          className={`p-6 rounded-lg border-2 ${
                            isWinner1
                              ? 'border-yellow-500 bg-gradient-to-br from-yellow-900/30 to-amber-900/20'
                              : 'border-gray-700 bg-gray-800/70'
                          } w-64 transition-all duration-300 ${
                            isHovered === match.id ? 'shadow-lg shadow-yellow-700/20' : ''
                          }`}
                          animate={{
                            boxShadow:
                              isHovered === match.id
                                ? '0 0 20px 2px rgba(234, 179, 8, 0.3)'
                                : '0 0 0px 0px rgba(234, 179, 8, 0)'
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex flex-col items-center">
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <Trophy className="h-10 w-10 mb-3 text-yellow-400" />
                            </motion.div>
                            <span
                              className={`font-bold text-center text-xl ${
                                isWinner1
                                  ? 'bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent'
                                  : 'text-white'
                              }`}
                            >
                              {team1.name}
                            </span>
                            <motion.span
                              className="text-xs text-yellow-300 font-bold mt-2 py-1 px-3 rounded-full border border-yellow-500/30 bg-yellow-900/20"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              CHAMPION
                            </motion.span>
                          </div>
                        </motion.div>
                      ) : (
                        // Regular match styling
                        <>
                          {/* Team 1 */}
                          <div
                            className={`p-2 md:p-4 rounded-t-lg border ${
                              isWinner1
                                ? 'border-cyan-500 bg-gradient-to-r from-cyan-900/30 to-blue-900/30'
                                : 'border-gray-700 bg-gray-800/70'
                            } w-56 transition-all duration-300 ${
                              isHovered === match.id ? 'shadow-md shadow-cyan-700/20' : ''
                            }`}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 text-sm font-bold">
                                {team1?.logo}
                              </div>
                              <span
                                className={`font-medium ${
                                  isWinner1 ? 'text-cyan-300 font-bold' : 'text-white'
                                }`}
                              >
                                {team1?.name}
                              </span>
                            </div>
                          </div>

                          {/* VS divider */}
                          {team2 && (
                            <div className="absolute left-1/2 -translate-x-1/2 py-1 px-3 bg-gray-800 rounded-full border border-gray-700 text-xs font-bold text-gray-400 z-10">
                              VS
                            </div>
                          )}

                          {/* Team 2 (if exists) */}
                          {team2 && (
                            <div
                              className={`p-2 md:p-4 rounded-b-lg border-t-0 border ${
                                isWinner2
                                  ? 'border-cyan-500 bg-gradient-to-r from-cyan-900/30 to-blue-900/30'
                                  : 'border-gray-700 bg-gray-800/70'
                              } w-56 transition-all duration-300 ${
                                isHovered === match.id ? 'shadow-md shadow-cyan-700/20' : ''
                              }`}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 text-sm font-bold">
                                  {team2.logo}
                                </div>
                                <span
                                  className={`font-medium ${
                                    isWinner2 ? 'text-cyan-300 font-bold' : 'text-white'
                                  }`}
                                >
                                  {team2.name}
                                </span>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* Score */}
                      {match.score && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm border border-cyan-500/30 font-mono shadow-lg shadow-cyan-900/10">
                          {match.score}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TournamentBrackets;