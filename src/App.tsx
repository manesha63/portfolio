import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Personal from './pages/Personal';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-background text-text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="*" element={<NotFound />} />
          {/* Add other routes as they are implemented */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
