import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import pastEvents from '../data/past_events_data';
import React from 'react';

const PastTournaments = () => {
    const [activeEventIndex, setActiveEventIndex] = React.useState(0);

    return (
        <div className="w-full mx-auto md:p-8 p-0 relative overflow-x-hidden">

            <div className="flex items-center justify-between mb-12 px-4 md:px-0">
                <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
                        PAST EVENTS
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-700 mt-2"></div>
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={() => setActiveEventIndex(Math.max(0, activeEventIndex - 1))}
                        className="p-2 rounded-lg hover:bg-cyan-900/50 transition-colors border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={activeEventIndex === 0}
                    >
                        <ChevronLeft className="h-6 w-6 text-cyan-400" />
                    </button>
                    <button
                        onClick={() => setActiveEventIndex(Math.min(pastEvents.length - 1, activeEventIndex + 1))}
                        className="p-2 rounded-lg hover:bg-cyan-900/50 transition-colors border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={activeEventIndex === pastEvents.length - 1}
                    >
                        <ChevronRight className="h-6 w-6 text-cyan-400" />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden md:px-0">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${activeEventIndex * 100}%)` }}
                >
                    {pastEvents.map((event) => (
                        <div key={event.id} className="min-w-full">
                            <Link to={`/events/${event.id}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.7)' }}
                                    className="relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm transition-all duration-300"
                                >
                                    {/* Accent corner elements */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

                                    <div
                                        className="h-64 bg-cover bg-center relative"
                                        style={{ backgroundImage: `url(${event.image})` }}
                                    >
                                        {/* Add overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

                                        {/* Event Year Badge */}
                                        <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-4 py-2 rounded text-lg font-bold border border-yellow-500/30 backdrop-blur-sm">
                                            {event.year}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">{event.name}</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div className="bg-cyan-900/30 p-4 rounded border border-cyan-500/30 text-center">
                                                <p className="text-sm text-cyan-300 mb-1">Prize Pool</p>
                                                <p className="text-lg font-semibold text-yellow-400 truncate whitespace-nowrap">
                                                    {event.prizePool}
                                                </p>
                                            </div>
                                            <div className="bg-cyan-900/30 p-4 rounded border border-cyan-500/30 text-center">
                                                <p className="text-sm text-cyan-300 mb-1">Year</p>
                                                <p className="text-lg font-semibold text-white">{event.year}</p>
                                            </div>
                                            <div className="bg-cyan-900/30 p-4 rounded border border-cyan-500/30 text-center">
                                                <p className="text-sm text-cyan-300 mb-1">Players</p>
                                                <p className="text-lg font-semibold text-white">{event.players}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PastTournaments;