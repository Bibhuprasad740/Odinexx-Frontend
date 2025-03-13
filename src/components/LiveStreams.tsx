import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import streams from '../data/streams_data'
import React from 'react'

const LiveStreams = () => {
    const [activeStreamIndex, setActiveStreamIndex] = React.useState(0);
    return (
        <div className="w-full mx-auto md:p-8 p-0 relative">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-black md:bg-opacity-20 bg-opacity-0 bg-[radial-gradient(#3448ff33_1px,transparent_1px)] bg-[size:20px_20px] blur-[1px] -z-10"></div>

            {/* Decorative elements */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>

            <div className="flex items-center justify-between mb-12">
                <div className="relative">
                    <h2 className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">LIVE STREAMS</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-700 mt-2"></div>
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={() => setActiveStreamIndex(Math.max(0, activeStreamIndex - 2))}
                        className="p-2 rounded-lg hover:bg-cyan-900/50 transition-colors border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={activeStreamIndex === 0}
                    >
                        <ChevronLeft className="h-6 w-6 text-cyan-400" />
                    </button>
                    <button
                        onClick={() => setActiveStreamIndex(Math.min(streams.length - 2, activeStreamIndex + 2))}
                        className="p-2 rounded-lg hover:bg-cyan-900/50 transition-colors border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={activeStreamIndex >= streams.length - 2}
                    >
                        <ChevronRight className="h-6 w-6 text-cyan-400" />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${activeStreamIndex * 50}%)` }}
                >
                    {streams.map((stream) => (
                        <div
                            key={stream.id}
                            className="sm:min-w-[50%] min-w-full px-4"
                        >
                            <Link to={`/stream/${stream.id}`}>
                                <motion.div
                                    whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(6, 182, 212, 0.7)' }}
                                    className="relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm transition-all duration-300"
                                >
                                    {/* Accent corner elements */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

                                    <div className="relative">
                                        <div
                                            className="h-48 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${stream.thumbnail})` }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-cyan-600/80 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.8)] border border-cyan-400/50">
                                                <Play className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold animate-pulse border border-red-400/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                            LIVE
                                        </div>
                                        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm border border-gray-500/30 backdrop-blur-sm">
                                            {stream.game}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-3 text-white tracking-wide">{stream.name}</h3>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded border border-cyan-500/30">
                                                <Users className="h-4 w-4 mr-2" />
                                                {stream.viewers} viewers
                                            </div>
                                            <span className="text-cyan-300 text-sm bg-cyan-900/30 px-3 py-1 rounded border border-cyan-500/30">{stream.duration}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LiveStreams