import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, BugTrackerPage } from './pages';
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
        <Route path="/" element={<LoadingPage />} />
        <Route path="/bugtracker-project" element={<BugTrackerPage menuOpen={menuOpen}
          setMenuOpen={setMenuOpen} />} />
        <Route path="*" element={<h1>404 NOT FOUND :D</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
