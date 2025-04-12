import { motion } from 'framer-motion';
import { Star, Trophy, Twitch, Users } from 'lucide-react';

const StatsCounter = () => {
    const stats = [
        { label: "Active Players", value: "25,000+", icon: Users },
        { label: "Tournaments", value: "500+", icon: Trophy },
        { label: "Prize Money", value: "$2.5M+", icon: Star },
        { label: "Live Streams", value: "200+", icon: Twitch }
    ];

    return (
        <div className="w-full mx-auto relative py-16">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">By The Numbers</span>
                <h2 className="text-3xl font-bold mt-2 mb-4 text-white">Our Growing Community</h2>
                <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto"></div>
                <p className="text-gray-400 max-w-2xl mx-auto">Join thousands of players competing in our tournaments and events</p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="group relative bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
                    >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>

                        <div className="relative p-8">
                            <div className="mb-6 flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                                    <stat.icon className="h-7 w-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                    {stat.value}
                                </p>
                                <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -z-5"></div>
            <div className="absolute bottom-1/4 -right-16 w-40 h-40 bg-cyan-600/10 rounded-full blur-3xl -z-5"></div>
        </div>
    );
};

export default StatsCounter;