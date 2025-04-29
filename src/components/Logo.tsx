import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="/star-logo.png"
        alt="Manisha Chand Logo"
        className="h-8 w-8 md:h-10 md:w-10"
      />
      <span className="text-xl font-bold text-text-primary">Manisha Chand</span>
    </Link>
  );
};

export default Logo; 