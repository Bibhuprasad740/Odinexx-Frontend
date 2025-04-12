import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, ArrowRight, MapPin, Gamepad } from 'lucide-react';
import events from '../data/events_data';

const Events = () => {
  return (
    <div className="w-full mx-auto relative py-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full top-0 left-0 object-cover filter blur-lg opacity-10"
      >
        <source src="/assets/graphics1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="text-cyan-500 text-sm font-medium tracking-wider uppercase">Compete & Win</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Upcoming Events</h2>
          <div className="h-1 w-20 bg-cyan-500 mb-6 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Join our upcoming premium tournaments and compete for massive prize pools</p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-gray-800 hover:border-cyan-500/40"
            >
              {/* Event image with overlay */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

                {/* Game badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-gray-700 flex items-center">
                  <Gamepad className="h-3 w-3 mr-2" />
                  {event.game}
                </div>

                {/* Registration status */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.registrationStatus === 'Open'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}>
                    {event.registrationStatus}
                  </span>
                </div>

                {/* Event title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white tracking-wide">{event.title}</h3>
                </div>
              </div>

              {/* Event details */}
              <div className="p-6">
                <div className="space-y-3 mb-5">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                    <span className="font-medium text-yellow-400">{event.prizePool}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2 text-cyan-500" />
                    <span>{event.participants}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Register button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300 group"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;