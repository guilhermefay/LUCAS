import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Exercises from './pages/Exercises';
import Materials from './pages/Materials';
import Live from './pages/Live';
import Community from './pages/Community';
import Progress from './pages/Progress';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard setActivePage={setActivePage} />;
      case 'courses': return <Courses />;
      case 'exercises': return <Exercises />;
      case 'materials': return <Materials />;
      case 'live': return <Live />;
      case 'community': return <Community />;
      case 'progress': return <Progress />;
      default: return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-full"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
