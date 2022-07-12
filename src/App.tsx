import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SpellDetail from './pages/SpellDetail';
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Different routes are linked to respected components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="spells/:index" element={<SpellDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
