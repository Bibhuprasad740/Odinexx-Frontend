import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import streams from '../data/streams_data';
import React from 'react';

const LiveStreams = () => {
    const [activeStreamIndex, setActiveStreamIndex] = React.useState(0);

    return (
        <div className="w-full mx-auto relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header with navigation controls */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">Streaming Now</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">Live Streams</h2>
                        <div className="h-1 w-20 bg-cyan-500 mb-6"></div>
                        <p className="text-gray-400 max-w-2xl md:mb-0 mb-6">Watch your favorite players and tournaments in real-time</p>
                    </motion.div>

                    <div className="flex space-x-3">
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                setActiveStreamIndex(Math.max(0, activeStreamIndex - 1));
                            }}
                            className="p-3 rounded-full hover:bg-gray-800/30 transition-colors border border-gray-700 hover:border-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={activeStreamIndex === 0}
                        >
                            <ChevronLeft className="h-5 w-5 text-cyan-400" />
                        </button>
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                setActiveStreamIndex(Math.min(streams.length - 1, activeStreamIndex + 1));
                            }}
                            className="p-3 rounded-full hover:bg-gray-800/30 transition-colors border border-gray-700 hover:border-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={activeStreamIndex === streams.length - 1}
                        >
                            <ChevronRight className="h-5 w-5 text-cyan-400" />
                        </button>
                    </div>
                </div>

                {/* Carousel/Slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeStreamIndex * 100}%)` }}
                    >
                        {streams.map((stream) => (
                            <div key={stream.id} className="min-w-full">
                                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Stream Thumbnail Section */}
                                        <div className="lg:w-1/2 relative overflow-hidden">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.6 }}
                                                className="h-64 lg:h-full w-full relative"
                                            >
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center"
                                                    style={{ backgroundImage: `url(${stream.thumbnail})` }}
                                                ></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 opacity-80 lg:block hidden"></div>
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-80 lg:hidden"></div>

                                                {/* Live Badge */}
                                                <div className="absolute top-4 left-4 bg-red-500/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-lg font-bold border border-red-400/30 animate-pulse">
                                                    LIVE
                                                </div>
                                                
                                                {/* Play button overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-cyan-600/80 flex items-center justify-center shadow-lg border border-cyan-400/50 hover:bg-cyan-500/90 transition-all duration-300">
                                                        <Play className="h-8 w-8 text-white" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Stream Details Section */}
                                        <div className="lg:w-1/2 p-6 lg:p-8">
                                            <h3 className="text-2xl font-bold mb-4 text-white">{stream.name}</h3>

                                            {/* Stream stats with icons */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center">
                                                    <Users className="w-5 h-5 mr-2 text-cyan-400" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Viewers</p>
                                                        <p className="font-medium text-white">{stream.viewers}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 mr-2 bg-cyan-500 rounded-sm flex items-center justify-center">
                                                        <span className="text-xs font-bold text-black">G</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-400">Game</p>
                                                        <p className="font-medium text-white">{stream.game}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Duration info */}
                                            <div className="mb-6">
                                                <p className="text-sm text-gray-400 mb-2">Stream Duration</p>
                                                <div className="flex items-center space-x-3">
                                                    <p className="font-medium text-cyan-400">{stream.duration}</p>
                                                </div>
                                            </div>

                                            {/* Watch stream button */}
                                            <Link
                                                to={`/stream/${stream.id}`}
                                                className="inline-flex items-center px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                                            >
                                                Watch Stream
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
                    {streams.map((_, index) => (
                        <button
                            key={index}
                            onClick={(event) => { 
                                event.stopPropagation();
                                setActiveStreamIndex(index)
                            }}
                            className={`h-2 rounded-full transition-all ${activeStreamIndex === index
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

export default LiveStreams;