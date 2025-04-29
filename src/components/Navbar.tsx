import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-text-primary hover:text-accent transition-colors bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-button">
              Manisha Chand
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 