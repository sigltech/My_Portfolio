import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Blog, BugTrackerPage } from './pages';
import Layout from './Layout/Layout.jsx';
import { LoadingPage } from './components'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Layout menuOpen={menuOpen}
        setMenuOpen={setMenuOpen} />} >
        <Route path="/" element={<Homepage menuOpen={menuOpen}
          setMenuOpen={setMenuOpen} />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/" element={<LoadingPage />} />
        <Route path="/bugtracker-project" element={<LoadingPage />} />
        <Route path="*" element={<h1>404 NOT FOUND :D</h1>} />
      </Route>
      <Route path="/blog" element={<h1>404 NOT FOUND :D</h1>} />
    </Routes>
  );
}

export default App;
