import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Star, Share2 } from 'lucide-react';

const Stream = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stream Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-lg overflow-hidden neon-border"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                  title="Live Stream"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold neon-text">Odinexx Championship Finals</h1>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-primary/20">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-primary/20">
                      <Star className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-5 w-5 mr-2" />
                  <span>24.5K watching</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chat Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-lg neon-border h-[600px] flex flex-col"
          >
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Live Chat</h2>
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Chat messages would go here */}
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">User_{index + 1}</p>
                      <p className="text-sm text-muted-foreground">
                        Amazing play! GG! 🎮
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-border">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/90">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stream Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-card rounded-lg p-6 neon-border"
        >
          <h2 className="text-xl font-semibold mb-4">Stream Information</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Welcome to the Odinexx Championship Finals! Watch as the top teams battle it out for the grand prize and glory. 
              Don't forget to follow our channel for more exciting tournaments and events.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Tournament Schedule</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Quarter Finals - 2:00 PM EST</li>
                <li>Semi Finals - 4:00 PM EST</li>
                <li>Finals - 6:00 PM EST</li>
                <li>Awards Ceremony - 8:00 PM EST</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stream;