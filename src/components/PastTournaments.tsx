import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import pastEvents from '../data/past_events_data';
import React from 'react';

const PastTournaments = () => {
    const [activeEventIndex, setActiveEventIndex] = React.useState(0);

    return (
        <div className="w-full mx-auto relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header with navigation controls */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">Tournament History</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">Past Events</h2>
                        <div className="h-1 w-20 bg-cyan-500 mb-6"></div>
                        <p className="text-gray-400 max-w-2xl md:mb-0 mb-6">Explore our previous tournaments and their champions</p>
                    </motion.div>

                    <div className="flex space-x-3">
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                setActiveEventIndex(Math.max(0, activeEventIndex - 1));
                            }}
                            className="p-3 rounded-full hover:bg-gray-800/30 transition-colors border border-gray-700 hover:border-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={activeEventIndex === 0}
                        >
                            <ChevronLeft className="h-5 w-5 text-cyan-400" />
                        </button>
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                setActiveEventIndex(Math.min(pastEvents.length - 1, activeEventIndex + 1));
                            }}
                            className="p-3 rounded-full hover:bg-gray-800/30 transition-colors border border-gray-700 hover:border-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={activeEventIndex === pastEvents.length - 1}
                        >
                            <ChevronRight className="h-5 w-5 text-cyan-400" />
                        </button>
                    </div>
                </div>

                {/* Carousel/Slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeEventIndex * 100}%)` }}
                    >
                        {pastEvents.map((event) => (
                            <div key={event.id} className="min-w-full">
                                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Event Image Section */}
                                        <div className="lg:w-1/2 relative overflow-hidden">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.6 }}
                                                className="h-64 lg:h-full w-full relative"
                                            >
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center"
                                                    style={{ backgroundImage: `url(${event.image})` }}
                                                ></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 opacity-80 lg:block hidden"></div>
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-80 lg:hidden"></div>

                                                {/* Year Badge */}
                                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-yellow-400 px-4 py-2 rounded-lg text-lg font-bold border border-yellow-500/30">
                                                    {event.year}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Event Details Section */}
                                        <div className="lg:w-1/2 p-6 lg:p-8">
                                            <h3 className="text-2xl font-bold mb-4 text-white">{event.name}</h3>

                                            {/* Event stats with icons */}
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                <div className="flex items-center">
                                                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Prize Pool</p>
                                                        <p className="font-medium text-yellow-400">{event.prizePool}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Year</p>
                                                        <p className="font-medium text-white">{event.year}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <Users className="w-5 h-5 mr-2 text-cyan-400" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Players</p>
                                                        <p className="font-medium text-white">{event.players}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Winner section */}
                                            {event.winner && (
                                                <div className="mb-6">
                                                    <p className="text-sm text-gray-400 mb-2">Champion</p>
                                                    <div className="flex items-center space-x-3">
                                                        {event.winnerImage && (
                                                            <div className="h-10 w-10 rounded-full overflow-hidden border border-cyan-500/30">
                                                                <img src={event.winnerImage} alt={event.winner} className="h-full w-full object-cover" />
                                                            </div>
                                                        )}
                                                        <p className="font-medium text-white">{event.winner}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* View details button */}
                                            <Link
                                                to={`/events/${event.id}`}
                                                className="inline-flex items-center px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                                            >
                                                View Event Details
                                                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {pastEvents.map((_, index) => (
                        <button
                            key={index}
                            onClick={(event) => {
                                event.stopPropagation();
                                setActiveEventIndex(index)
                            }}
                            className={`h-2 rounded-full transition-all ${activeEventIndex === index
                                ? 'w-8 bg-cyan-500'
                                : 'w-2 bg-gray-700 hover:bg-gray-600'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PastTournaments;