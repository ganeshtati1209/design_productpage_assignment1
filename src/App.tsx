import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/index';   // Home page you redesigned
import AboutPage from './views/about/AboutPage';
import FAQPage from './views/faq/FAQPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />          {/* Home page */}
      <Route path="/about" element={<AboutPage />} /> {/* About page */}
      <Route path="/faq" element={<FAQPage />} />     {/* FAQ page */}
    </Routes>
  );
};

export default App;
