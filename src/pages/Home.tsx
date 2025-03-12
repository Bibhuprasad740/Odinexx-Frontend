import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, ArrowRight, Play, ChevronRight, ChevronLeft, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const [activeEventIndex, setActiveEventIndex] = React.useState(0);
  const [activeStreamIndex, setActiveStreamIndex] = React.useState(0);
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const pastEvents = [
    {
      id: 1,
      name: "World Gaming Championship 2023",
      prizePool: "$1,000,000",
      year: 2023,
      players: 500,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940",
    },
    {
      id: 2,
      name: "Asian Games Tournament",
      prizePool: "$500,000",
      year: 2023,
      players: 300,
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=2940",
    },
    {
      id: 3,
      name: "European Masters Series",
      prizePool: "$750,000",
      year: 2023,
      players: 400,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2940",
    },
    {
      id: 4,
      name: "Americas Cup 2023",
      prizePool: "$600,000",
      year: 2023,
      players: 350,
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=2940",
    },
  ];

  const streams = [
    {
      id: 1,
      name: "VALORANT Championship Finals",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940",
      viewers: "125K",
    },
    {
      id: 2,
      name: "League of Legends World Series",
      thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=2940",
      viewers: "95K",
    },
    {
      id: 3,
      name: "CS:GO Major Tournament",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2940",
      viewers: "80K",
    },
    {
      id: 4,
      name: "Dota 2 International",
      thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=2940",
      viewers: "150K",
    },
  ];

  const faqs = [
    {
      question: "How do I register for tournaments?",
      answer: "To register for tournaments, create an account and visit the Events page. Select your desired tournament and follow the registration process. Make sure to read the tournament rules and requirements before registering."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and various cryptocurrency payments for tournament registrations and team subscriptions."
    },
    {
      question: "How do I create or join a team?",
      answer: "You can create your own team through the Teams section after logging in, or browse existing teams that are looking for players. Team leaders can send invites to players, and players can request to join teams."
    },
    {
      question: "What are the technical requirements for streaming?",
      answer: "For optimal streaming experience, we recommend a stable internet connection with at least 10Mbps upload speed. Make sure your hardware meets the minimum requirements for your game and streaming software."
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-20" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold neon-text mb-6"
          >
            Welcome to Odinexx
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-8"
          >
            Your Ultimate Gaming Tournament Platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/20 transition-colors"
            >
              Explore Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold neon-text">Past Events</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveEventIndex(Math.max(0, activeEventIndex - 1))}
                className="p-2 rounded-full hover:bg-primary/20"
                disabled={activeEventIndex === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setActiveEventIndex(Math.min(pastEvents.length - 1, activeEventIndex + 1))}
                className="p-2 rounded-full hover:bg-primary/20"
                disabled={activeEventIndex === pastEvents.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeEventIndex * 100}%)` }}
            >
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="min-w-full px-4"
                >
                  <Link to={`/events/${event.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card rounded-lg overflow-hidden neon-border"
                    >
                      <div
                        className="h-64 bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Prize Pool</p>
                            <p className="text-lg font-semibold">{event.prizePool}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Year</p>
                            <p className="text-lg font-semibold">{event.year}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Players</p>
                            <p className="text-lg font-semibold">{event.players}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Streams Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold neon-text">Live Streams</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveStreamIndex(Math.max(0, activeStreamIndex - 2))}
                className="p-2 rounded-full hover:bg-primary/20"
                disabled={activeStreamIndex === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setActiveStreamIndex(Math.min(streams.length - 2, activeStreamIndex + 2))}
                className="p-2 rounded-full hover:bg-primary/20"
                disabled={activeStreamIndex >= streams.length - 2}
              >
                <ChevronRight className="h-6 w-6" />
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
                  className="min-w-[50%] px-4"
                >
                  <Link to={`/stream/${stream.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card rounded-lg overflow-hidden neon-border"
                    >
                      <div className="relative">
                        <div
                          className="h-48 bg-cover bg-center"
                          style={{ backgroundImage: `url(${stream.thumbnail})` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                          LIVE
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{stream.name}</h3>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          {stream.viewers} viewers
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold neon-text text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg neon-border overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Why Choose Odinexx?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Professional Tournaments",
                description: "Compete in high-stakes tournaments with professional organization and substantial prize pools."
              },
              {
                icon: Users,
                title: "Team Building",
                description: "Form your dream team, manage rosters, and coordinate with players from around the world."
              },
              {
                icon: Calendar,
                title: "Regular Events",
                description: "Stay engaged with regular tournaments, practice matches, and community events."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg bg-card neon-border"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;