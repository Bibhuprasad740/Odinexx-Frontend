import React from 'react';
import faqs from '../data/faq_data';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

const FAQ = () => {
    const [openFaqIndex, setOpenFaqIndex] = React.useState(null);
    
    return (
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
                FREQUENTLY ASKED QUESTIONS
            </h2>
            
            <div className="space-y-6 relative">
                {/* Background grid effect */}
                <div className="absolute inset-0 bg-black bg-opacity-30 bg-[radial-gradient(#3448ff33_1px,transparent_1px)] bg-[size:20px_20px] blur-[1px] -z-10"></div>
                
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(105,39,209,0.4)] backdrop-blur-sm"
                    >
                        {/* Accent corner elements */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>
                        
                        <button
                            className="w-full px-6 py-5 flex items-center justify-between text-left"
                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        >
                            <span className="font-medium text-white text-lg tracking-wide">{faq.question}</span>
                            <div className="flex items-center justify-center w-8 h-8 rounded bg-cyan-900/50 border border-cyan-500/50">
                                {openFaqIndex === index ? (
                                    <Minus className="h-4 w-4 text-cyan-400" />
                                ) : (
                                    <Plus className="h-4 w-4 text-cyan-400" />
                                )}
                            </div>
                        </button>
                        
                        {openFaqIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="px-6 pb-5 pt-2"
                            >
                                <div className="border-t border-cyan-700/50 pt-4">
                                    <p className="text-cyan-100 leading-relaxed">{faq.answer}</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
    );
};

export default FAQ;