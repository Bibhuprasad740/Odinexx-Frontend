import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Settings, Bell } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Tournaments Played', value: '12', icon: Trophy },
    { label: 'Team Members', value: '5', icon: Users },
    { label: 'Upcoming Events', value: '3', icon: Calendar },
  ];

  const notifications = [
    { id: 1, title: 'New tournament invitation', time: '2 hours ago' },
    { id: 2, title: 'Team practice scheduled', time: '5 hours ago' },
    { id: 3, title: 'Tournament registration closing soon', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold neon-text">Dashboard</h1>
          <button className="p-2 rounded-full hover:bg-primary/20">
            <Settings className="h-6 w-6" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card neon-border"
            >
              <div className="flex items-center">
                <stat.icon className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="lg:col-span-2 bg-card rounded-lg p-6 neon-border">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 rounded-lg bg-background"
                >
                  <Calendar className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <h3 className="font-medium">Tournament #{index + 1}</h3>
                    <p className="text-sm text-muted-foreground">March {10 + index}, 2024</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card rounded-lg p-6 neon-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-background"
                >
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">{notification.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;