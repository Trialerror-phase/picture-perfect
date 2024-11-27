import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Navbar';
import Introduction from "../src/Introduction";
import PhotoGallery from "../src/PhotoGallery";
import Blog from "../src/Blog";
import Contact from './Contact';
import '../src/App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/blog" element={<Blog />} />
		  <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
