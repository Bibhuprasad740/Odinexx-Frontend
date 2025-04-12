import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Teams from './pages/Teams';
import Leaderboard from './pages/Leaderboard';
import Stream from './pages/Stream';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
// import { useRegisterSW } from 'virtual:pwa-register/react';

function App() {
  // Register service worker for PWA
  // const {
  //   offlineReady: [offlineReady, setOfflineReady],
  //   needRefresh: [needRefresh, setNeedRefresh],
  //   updateServiceWorker,
  // } = useRegisterSW({
  //   onRegistered(r) {
  //     console.log('SW Registered:', r);
  //   },
  //   onRegisterError(error) {
  //     console.log('SW registration error', error);
  //   },
  // });

  // useEffect(() => {
  //   const handleAllEvents = (e) => {
  //     e.stopPropagation();
  //     e.preventDefault(); 
  //   };

  //   // Apply to common event types
  //   const events = ['click', 'touchstart', 'touchend', 'touchmove', 'mousedown', 'mouseup'];

  //   events.forEach(event => {
  //     document.addEventListener(event, handleAllEvents, {
  //       capture: true, // Important for catching events in capture phase
  //       passive: false // Needed to allow preventDefault()
  //     });
  //   });

  //   return () => {
  //     events.forEach(event => {
  //       document.removeEventListener(event, handleAllEvents, { capture: true });
  //     });
  //   };
  // }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;