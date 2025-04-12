import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Award, ArrowRight } from 'lucide-react';
import featuredTournaments from '../data/featured_tournaments';

const FeatureTournaments = () => {
    return (
        <div className="w-full mx-auto relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center md:text-left"
                >
                    <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">Compete & Win</span>
                    <h2 className="text-3xl font-bold mt-2 mb-4">Featured Tournaments</h2>
                    <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto md:mx-0"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
                        Join our upcoming premium tournaments and compete for massive prize pools
                    </p>
                </motion.div>

                {/* Tournament cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredTournaments.map((tournament, index) => (
                        <motion.div
                            key={tournament.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
                        >
                            {/* Card image with overlay */}
                            <div className="relative h-52 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${tournament.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                                {/* Game badge */}
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-gray-700">
                                    {tournament.game}
                                </div>

                                {/* Status badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${tournament.registrationStatus === 'Open'
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                            : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                        }`}>
                                        {tournament.registrationStatus}
                                    </span>
                                </div>

                                {/* Tournament name */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-xl font-bold text-white tracking-wide">{tournament.name}</h3>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="p-6">
                                {/* Tournament details */}
                                <div className="flex flex-col space-y-4 mb-6">
                                    <div className="flex items-center text-sm text-gray-400">
                                        <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                                        <span>{tournament.date}</span>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-400">
                                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                                        <span className="font-medium text-yellow-400">{tournament.prizePool}</span>
                                    </div>
                                </div>

                                {/* Call to action */}
                                <Link
                                    to={`/tournaments/${tournament.id}`}
                                    className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                                >
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all tournaments link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 text-center"
                >
                    <Link 
                        to="/tournaments" 
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                    >
                        View All Tournaments 
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default FeatureTournaments;