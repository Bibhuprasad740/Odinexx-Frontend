import React, { useState, useEffect } from 'react';
import faqs from '../data/faq_data';
import { ChevronDown, ChevronUp, Zap } from 'lucide-react';

const FAQ = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [glitchText, setGlitchText] = useState("");

    // Generate glitch text effect when item is hovered
    useEffect(() => {
        if (hoverIndex !== null) {
            const originalText = faqs[hoverIndex].question;
            const chars = "!@#$%^&*()_+-=[]{}|;:,./<>?";

            let interval = setInterval(() => {
                let result = "";
                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() > 0.9) {
                        result += chars[Math.floor(Math.random() * chars.length)];
                    } else {
                        result += originalText[i];
                    }
                }
                setGlitchText(result);
            }, 100);

            return () => clearInterval(interval);
        }
    }, [hoverIndex]);

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 relative overflow-hidden">
            {/* Animated circuit background lines */}
            <div className="absolute inset-0 z-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-px bg-green-400"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: 0,
                            right: 0,
                            animation: `pulse ${2 + Math.random() * 3}s infinite alternate`
                        }}
                    />
                ))}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i + 20}
                        className="absolute w-px bg-green-400"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: 0,
                            bottom: 0,
                            animation: `pulse ${2 + Math.random() * 3}s infinite alternate`
                        }}
                    />
                ))}
            </div>

            {/* Hex Grid Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDI4IDQ5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGZmNjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTEzLjk5IDkuNzM3bDEyIDAuMDI2TDMyIDI0LjI2M2wtNi4wMSAxMC41aC0xMmwtNi0xMC41eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 z-0"></div>

            <div className="relative z-10">
                <h2 className="text-4xl font-black text-center mb-12 relative">
                    <span className="relative inline-block">
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 uppercase tracking-widest">
                            TERMINAL ACCESS: FAQ
                        </span>
                    </span>
                    <Zap className="inline-block ml-2 text-green-400 animate-pulse" />
                </h2>

                <div className="space-y-6 relative">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-300 ${openFaqIndex === index
                                ? 'bg-black/80 border-l-4 border-green-500'
                                : 'bg-black/50 border-l-4 border-blue-500/30 hover:border-green-500/50'
                                } backdrop-blur-sm rounded-r-md`}
                            style={{
                                boxShadow: openFaqIndex === index
                                    ? '0 0 20px rgba(16, 185, 129, 0.4)'
                                    : 'none',
                                transform: `translateX(${openFaqIndex === index ? '10px' : '0px'})`
                            }}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                                <div className="absolute inset-0 flex items-center">
                                    {[...Array(Math.ceil(faq.question.length / 3))].map((_, i) => (
                                        <span
                                            key={i}
                                            className="text-xs text-green-500 font-mono mx-px"
                                            style={{ opacity: Math.random() * 0.5 + 0.5 }}
                                        >
                                            {Math.random() > 0.7 ? '1' : '0'}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="w-full px-6 py-4 flex items-center justify-between text-left group"
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                            >
                                <div className="flex items-center">
                                    <span className="text-green-500 font-mono mr-3 opacity-70">[{(index + 1).toString().padStart(2, '0')}]</span>
                                    <span className="font-medium text-white text-lg tracking-wide font-mono">
                                        {hoverIndex === index ? glitchText : faq.question}
                                        <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse opacity-70"></span>
                                    </span>
                                </div>
                                <div className={`flex items-center justify-center p-2 rounded transition-all duration-300 ${openFaqIndex === index
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-blue-500/10 text-blue-400 group-hover:bg-green-500/10 group-hover:text-green-400'
                                    }`}>
                                    {openFaqIndex === index ? (
                                        <ChevronUp className="h-5 w-5" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5" />
                                    )}
                                </div>
                            </button>

                            {openFaqIndex === index && (
                                <div
                                    className="px-6 pb-5 pt-2 overflow-hidden"
                                    style={{
                                        animation: 'typewriter 0.5s steps(40, end)'
                                    }}
                                >
                                    <div className="border-t border-green-500/30 pt-4">
                                        <div className="font-mono text-green-300 leading-relaxed relative">
                                            <div className="absolute left-0 -ml-6 h-full w-1 bg-green-500/50 opacity-70"></div>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Decorative corner circuit elements */}
                            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                                <div className="absolute top-0 right-0 w-4 h-1 bg-blue-500/50"></div>
                                <div className="absolute top-0 right-0 w-1 h-4 bg-blue-500/50"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
                                <div className="absolute bottom-0 right-0 w-4 h-1 bg-blue-500/50"></div>
                                <div className="absolute bottom-0 right-0 w-1 h-4 bg-blue-500/50"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ambient glow effects */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
    );
};

export default FAQ;