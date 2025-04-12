import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import features from '../data/features_data'

const Features = () => {
    return (
        <div className="w-full mx-auto relative py-16">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg md:opacity-20 opacity-15"
            >
                <source src="/assets/graphics6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Section header with matching design */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">Premium Experience</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Why Choose Us</h2>
                <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto"></div>
                <p className="text-gray-400 max-w-2xl mx-auto">Discover what makes our platform the best choice for competitive gamers</p>
            </motion.div>

            {/* Features grid with matching card style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-1 border border-gray-800"
                    >
                        {/* Feature icon with gradient background */}
                        <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Card content */}
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border border-cyan-500/20">
                                    <feature.icon className="h-6 w-6 text-cyan-400" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 mb-5">{feature.description}</p>

                            {/* Learn more link matching tournament cards */}
                            <Link
                                to={feature.link || '#'}
                                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
                            >
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Optional CTA matching tournaments component */}
            <div className="mt-12 text-center">
                <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                >
                    Join Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Features