import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Gamepad } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
            {/* Background gif */}
            <img
                src={"/static/graphics1.gif"}
                className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg md:opacity-10 opacity-20"
            >
            </img>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left side content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">The Ultimate Gaming Experience</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                                <span className="text-white">Welcome to </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Odinexx</span>
                            </h1>
                            <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto md:mx-0"></div>
                            <p className="text-lg text-gray-300 mb-8 max-w-lg">
                                Your ultimate gaming tournament platform. Compete, stream, and dominate the digital battlefield with players from around the world.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/register"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                                >
                                    Get Started
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/events"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-500/40 hover:bg-gray-800/30 text-gray-300 font-medium transition-all duration-300"
                                >
                                    Explore Events
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side featured card */}
                    <div className="w-full md:w-1/2 max-w-md">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
                        >
                            <div className="relative">
                                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 bg-cyan-600/90 text-white px-3 py-1 rounded text-sm font-bold">
                                    FEATURED
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">Cyberstorm Tournament 2025</h3>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center">
                                        <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                                        <div>
                                            <p className="text-xs text-gray-400">Prize Pool</p>
                                            <p className="font-medium text-yellow-400">$50,000</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Gamepad className="w-5 h-5 mr-2 text-cyan-500" />
                                        <div>
                                            <p className="text-xs text-gray-400">Game</p>
                                            <p className="font-medium text-white">CyberRift 2</p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/tournament/cyberstorm-2025"
                                    className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                                >
                                    Register Now
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
                >
                    <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-400 mb-2">10,000+</p>
                        <p className="text-gray-400">Active Players</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-400 mb-2">250+</p>
                        <p className="text-gray-400">Tournaments Hosted</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-400 mb-2">$2M+</p>
                        <p className="text-gray-400">Prize Money Awarded</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;