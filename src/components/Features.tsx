import { motion } from 'framer-motion';
import features from '../data/features_data';

const Features = () => {
    return (
        <div className="min-h-screen flex items-center justify-center md:p-8 p-0 text-white relative">

            

            <div className="w-[90vw] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] mb-12 text-center"
                >
                    Why Choose Odinexx?
                </motion.h2>
                <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-cyan-500 mx-auto mt-2 mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5, boxShadow: '0 0 30px rgba(6,182,212,0.7)' }}
                            className="p-6 rounded-lg bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 relative"
                        >
                            {/* Accent corner elements */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

                            <feature.icon className="h-12 w-12 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                            <p className="text-cyan-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;