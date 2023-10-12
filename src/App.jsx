import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPageWrapper from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <h1>Hello, React</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<AddPage />} />
        <Route path="/notes/:id" element={<DetailPageWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
