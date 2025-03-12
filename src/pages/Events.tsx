import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, ArrowRight, MapPin, Gamepad } from 'lucide-react';

const Events = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Valorant Championship',
      game: 'Valorant',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
      date: 'April 15-17, 2025',
      prizePool: '$50,000 Prize Pool',
      participants: '32 Teams',
      location: 'Los Angeles, CA',
      registrationStatus: 'Open'
    },
    {
      id: 2,
      title: 'League Masters Tournament',
      game: 'League of Legends',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=1000',
      date: 'May 8-10, 2025',
      prizePool: '$75,000 Prize Pool',
      participants: '16 Teams',
      location: 'New York, NY',
      registrationStatus: 'Open'
    },
    {
      id: 3,
      title: 'CS:GO Elite Challenge',
      game: 'Counter-Strike 2',
      image: 'https://images.unsplash.com/photo-1594919127564-005c85bd74c3?auto=format&fit=crop&q=80&w=1000',
      date: 'June 22-24, 2025',
      prizePool: '$100,000 Prize Pool',
      participants: '24 Teams',
      location: 'Berlin, Germany',
      registrationStatus: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen w-[100vw] overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 bg-[radial-gradient(#3448ff33_1px,transparent_1px)] bg-[size:20px_20px] blur-[1px] -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] mb-4"
          >
            Upcoming Events
          </motion.h1>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-300"
          >
            Join the most exciting gaming tournaments
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(6,182,212,0.7)' }}
              className="relative border-2 border-cyan-500/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm transition-all duration-300"
            >
              {/* Accent corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${event.image})` }}>
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                
                {/* Event game positioned at bottom */}
                <div className="absolute bottom-3 left-3 bg-black/70 text-cyan-300 px-3 py-1 rounded text-sm border border-cyan-500/30 backdrop-blur-sm flex items-center">
                  <Gamepad className="h-3 w-3 mr-2" />
                  {event.game}
                </div>
                
                {/* Registration status */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded text-xs font-bold ${
                    event.registrationStatus === 'Open'
                      ? 'bg-green-900/50 text-green-400 border border-green-500/50'
                      : 'bg-blue-900/50 text-cyan-400 border border-cyan-500/50'
                  }`}>
                    {event.registrationStatus}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{event.title}</h3>

                <div className="space-y-3 mt-4">
                  <div className="flex items-center text-sm bg-cyan-900/20 p-2 rounded border border-cyan-500/20">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-300" />
                    <span className="text-gray-300">{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm bg-cyan-900/20 p-2 rounded border border-cyan-500/20">
                    <Trophy className="h-4 w-4 mr-2 text-yellow-400" />
                    <span className="text-yellow-300 font-bold">{event.prizePool}</span>
                  </div>
                  <div className="flex items-center text-sm bg-cyan-900/20 p-2 rounded border border-cyan-500/20">
                    <Users className="h-4 w-4 mr-2 text-cyan-300" />
                    <span className="text-gray-300">{event.participants}</span>
                  </div>
                  <div className="flex items-center text-sm bg-cyan-900/20 p-2 rounded border border-cyan-500/20">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-300" />
                    <span className="text-gray-300">{event.location}</span>
                  </div>
                </div>

                <button className="mt-6 w-full flex items-center justify-center px-4 py-3 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold tracking-wide transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] border border-cyan-500/50">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;