import { motion } from 'framer-motion';
import { Users, Trophy, Globe, Shield, Gamepad2, ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const features = [
        {
            icon: <Trophy className="w-8 h-8 text-cyan-400" />,
            title: "Competitive Tournaments",
            description: "Join our professionally organized esports tournaments with cash prizes and global recognition."
        },
        {
            icon: <Globe className="w-8 h-8 text-cyan-400" />,
            title: "Global Community",
            description: "Connect with gamers from around the world in our thriving competitive community."
        },
        {
            icon: <Shield className="w-8 h-8 text-cyan-400" />,
            title: "Fair Play",
            description: "Our advanced anti-cheat systems ensure a level playing field for all competitors."
        },
        {
            icon: <Gamepad2 className="w-8 h-8 text-cyan-400" />,
            title: "Multiple Games",
            description: "We support tournaments across all major esports titles and genres."
        }
    ];

    const teamMembers = [
        {
            name: "Alex Chen",
            role: "Founder & CEO",
            avatar: "👨‍💻",
            bio: "Former professional esports player with 10+ years in the industry."
        },
        {
            name: "Sarah Johnson",
            role: "Tournament Director",
            avatar: "👩‍⚖️",
            bio: "Organized 50+ international esports events with prize pools over $5M."
        },
        {
            name: "Mike Rodriguez",
            role: "Community Manager",
            avatar: "🧑‍🤝‍🧑",
            bio: "Building gaming communities since 2015 with 500K+ members."
        },
        {
            name: "Lisa Wong",
            role: "Lead Developer",
            avatar: "👩‍💻",
            bio: "Created tournament systems used by millions of players worldwide."
        }
    ];

    const sponsors = [
        {
            name: "NVIDIA",
            tier: "Platinum",
            logo: "/assets/sponsors/nvidia.svg",
            description: "Global technology leader powering our tournament infrastructure."
        },
        {
            name: "Razer",
            tier: "Platinum",
            logo: "/assets/sponsors/razer.svg",
            description: "Premium gaming hardware for professional players."
        },
        {
            name: "Red Bull",
            tier: "Gold",
            logo: "/assets/sponsors/redbull.svg",
            description: "The official energy drink of Odinexx tournaments."
        },
        {
            name: "Intel",
            tier: "Gold",
            logo: "/assets/sponsors/intel.svg",
            description: "The official processor of Odinexx tournaments."
        },
        {
            name: "Logitech",
            tier: "Silver",
            logo: "/assets/sponsors/logitech.svg",
            description: "Providing us with the next generation computing power."
        },
        {
            name: "MSI",
            tier: "Silver",
            logo: "/assets/sponsors/msi.svg",
            description: "Creating next-gen tools for competitive gamers."
        }
    ];

    return (
        <div className="w-full mx-auto relative pt-16 pb-24 min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">

            <div className="max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/50 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">About Odinexx</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 mx-auto rounded-full"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Revolutionizing esports through cutting-edge tournament platforms and community-driven experiences.
                    </p>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-xl border border-gray-700 hover:border-cyan-500/50 p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-gray-800/60 inline-block">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Team Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/50 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">Meet The Team</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Our Esports Experts</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-xl border border-gray-700 hover:border-cyan-500/50 p-6 transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 mx-auto mb-4 shadow-lg shadow-cyan-600/20">
                                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-3xl">
                                        {member.avatar}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                                <p className="text-cyan-400 mb-3 font-medium">{member.role}</p>
                                <p className="text-gray-400 text-sm">{member.bio}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Government Support Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/50 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">National Support</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Government Backing</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 mx-auto rounded-full"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
                            Officially recognized and supported by the Government of India under the visionary leadership of Prime Minister Narendra Modi
                        </p>
                    </div>

                    <div className="relative">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 bg-orange-800 blur-3xl rounded-full -z-10 opacity-60"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-xl border border-gray-700 p-6 md:p-8 transition-all duration-300 shadow-lg"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                                {/* Government & BJP Logos */}
                                <div className="flex flex-col md:flex-row lg:flex-col items-center gap-6 flex-shrink-0">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                        <div className="w-40 h-40 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden relative flex items-center justify-center p-4">
                                            <img
                                                src="/assets/indian_govt_logo.jpeg"
                                                alt="Government of India"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <div className="w-40 h-40 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden relative flex items-center justify-center p-4">
                                            <img
                                                src="/assets/bjp_logo.png"
                                                alt="Bharatiya Janata Party"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* PM Modi Image and Content */}
                                <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
                                    <div className="relative group flex-shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-blue-500/30 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                        <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-800 rounded-xl border-2 border-orange-500/30 overflow-hidden relative">
                                            <img
                                                src="/assets/narendra_modi.png"
                                                alt="Prime Minister Narendra Modi"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <h4 className="text-white font-bold text-center">Shri Narendra Modi</h4>
                                                <p className="text-orange-300 text-sm text-center">Prime Minister of India</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                            Supported Under <span className="text-orange-400">BJP</span> Leadership
                                        </h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            Odinexx is proud to be recognized under the Digital India initiative by the
                                            Government of India. Our esports platform aligns with PM Modi's vision of
                                            youth empowerment through technology and innovation in the gaming sector.
                                        </p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                            <div className="px-4 py-2 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-300 text-sm font-medium">
                                                Digital India
                                            </div>
                                            <div className="px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm font-medium">
                                                Startup India
                                            </div>
                                            <div className="px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium">
                                                Youth Skill Development
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Sponsors Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/50 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">Our Partners</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Premium Sponsors</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 mx-auto rounded-full"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
                            Partnering with industry leaders to deliver world-class esports experiences.
                        </p>
                    </div>

                    {/* Sponsor Tiers */}
                    <div className="relative">
                        {/* Glowing Background Effects */}
                        <div className="absolute inset-0 bg-cyan-600/5 blur-3xl rounded-full -z-10"></div>
                        <div className="absolute right-20 bottom-20 w-64 h-64 bg-blue-600/5 blur-3xl rounded-full -z-10"></div>

                        {/* Platinum Tier */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mb-16"
                        >
                            <div className="flex items-center justify-center mb-8">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
                                <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-4 flex items-center">
                                    <Star className="w-5 h-5 text-white mr-2 fill-white" />
                                    <span className="font-bold text-white">PLATINUM PARTNERS</span>
                                </div>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {sponsors.filter(s => s.tier === "Platinum").map((sponsor, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-xl border border-cyan-500/30 p-8 transition-all duration-300 flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10"
                                    >
                                        <div className="relative flex-shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md opacity-70"></div>
                                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 relative">
                                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                                    <img src={sponsor.logo} alt={sponsor.name} className="w-16 h-16" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h3>
                                            <p className="text-gray-300 leading-relaxed">{sponsor.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gold Tier */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mb-16"
                        >
                            <div className="flex items-center justify-center mb-8">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500/50"></div>
                                <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full mx-4 flex items-center">
                                    <Award className="w-5 h-5 text-white mr-2" />
                                    <span className="font-bold text-white">GOLD PARTNERS</span>
                                </div>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {sponsors.filter(s => s.tier === "Gold").map((sponsor, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-xl border border-yellow-500/20 p-6 transition-all duration-300 flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-yellow-500/5 hover:shadow-yellow-500/10"
                                    >
                                        <div className="relative flex-shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-md opacity-50"></div>
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 p-1 relative">
                                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                                    <img src={sponsor.logo} alt={sponsor.name} className="w-14 h-14" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                                            <p className="text-gray-300 leading-relaxed">{sponsor.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Silver Tier */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="flex items-center justify-center mb-8">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-400/50"></div>
                                <div className="px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mx-4 flex items-center">
                                    <Shield className="w-5 h-5 text-white mr-2" />
                                    <span className="font-bold text-white">SILVER PARTNERS</span>
                                </div>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-400/50"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {sponsors.filter(s => s.tier === "Silver").map((sponsor, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-xl border border-gray-500/20 p-6 transition-all duration-300 flex flex-col md:flex-row items-center gap-4 shadow-lg"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 p-1 relative flex-shrink-0">
                                            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                                <img src={sponsor.logo} alt={sponsor.name} className="w-12 h-12" />
                                            </div>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h3 className="text-lg font-bold text-white mb-1">{sponsor.name}</h3>
                                            <p className="text-gray-300 text-sm">{sponsor.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md rounded-xl border border-gray-700 hover:border-cyan-500/30 p-10 transition-all duration-300 text-center relative overflow-hidden shadow-xl"
                >
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Ready to Join the Competition?</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                            Create your account today and start your journey in competitive gaming.
                        </p>
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium transition-all duration-300 group shadow-lg shadow-cyan-500/20"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default AboutUs;