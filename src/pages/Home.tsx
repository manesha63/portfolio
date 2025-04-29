import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import starryBackground from '../assets/starry-background.jpg';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 12, 16, 0.8), rgba(31, 41, 55, 0.8)), url(${starryBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Cosmic overlay effects */}
      <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-button/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

        <div className="section-container text-center relative z-10 pt-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/30 mx-auto mb-16 
                     shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-accent/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                     transition-all duration-500"
        >
          <img
              src="/profile.jpg"
            alt="Manisha's Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 mb-24"
        >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-button">
              CS Student | 21 | CCSF ➔ SFSU
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-12"
        >
            <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary">
            How would you like to know me?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <Link
              to="/professional"
                className="bg-button hover:bg-button-hover text-white font-bold text-xl px-10 py-4 rounded-lg 
                         transition-all duration-300 w-full md:w-auto hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]"
            >
              Professionally
            </Link>
            <Link
              to="/personal"
                className="bg-transparent border-2 border-accent/50 text-text-primary hover:border-accent hover:bg-accent/10 
                         font-bold text-xl px-10 py-4 rounded-lg transition-all duration-300 w-full md:w-auto 
                         hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Just for Fun
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Home; 