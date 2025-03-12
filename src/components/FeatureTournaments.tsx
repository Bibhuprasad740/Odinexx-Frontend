import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import featuredTournaments from '../data/featured_tournaments'

const FeatureTournaments = () => {
    return (
        <div className="w-full mx-auto p-8 relative">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 bg-[radial-gradient(#3448ff33_1px,transparent_1px)] bg-[size:20px_20px] blur-[1px] -z-10"></div>

            {/* Decorative elements */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">FEATURED TOURNAMENTS</h2>
                <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 mb-6"></div>
                <p className="text-cyan-300 max-w-2xl mx-auto">Join our upcoming premium tournaments and compete for massive prize pools</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredTournaments.map((tournament, index) => (
                    <motion.div
                        key={tournament.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: '0 0 30px rgba(6,182,212,0.7)' }}
                        className="relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm transition-all duration-300"
                    >
                        {/* Accent corner elements */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

                        <div
                            className="h-48 bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${tournament.image})` }}
                        >
                            {/* Overlay gradient for better text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

                            {/* Tournament game positioned at bottom for better visibility */}
                            <div className="absolute bottom-3 left-3 bg-black/70 text-cyan-300 px-3 py-1 rounded text-sm border border-cyan-500/30 backdrop-blur-sm">
                                {tournament.game}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white tracking-wide">{tournament.name}</h3>
                                <span className={`px-3 py-1 rounded text-xs font-bold ${tournament.registrationStatus === 'Open'
                                        ? 'bg-green-900/50 text-green-400 border border-green-500/50'
                                        : 'bg-blue-900/50 text-cyan-400 border border-cyan-500/50'
                                    }`}>
                                    {tournament.registrationStatus}
                                </span>
                            </div>

                            <div className="flex justify-between text-sm mb-6 mt-4">
                                <div className="bg-cyan-900/30 px-3 py-2 rounded border border-cyan-500/30 text-cyan-300">
                                    {tournament.date}
                                </div>
                                <div className="bg-cyan-900/30 px-3 py-2 rounded border border-cyan-500/30 font-bold text-yellow-300">
                                    {tournament.prizePool}
                                </div>
                            </div>

                            <Link
                                to={`/tournaments/${tournament.id}`}
                                className="w-full block text-center py-3 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold tracking-wide transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] border border-cyan-500/50"
                            >
                                VIEW DETAILS
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FeatureTournaments