import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import ArchivePage from './pages/ArchivePage';
import Error404Page from './pages/Error404Page';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/archive' element={<ArchivePage />} />
        <Route path='/new' element={<AddPage />} />
        <Route path='/notes/:id' element={<DetailPage />} />
        <Route path='/*' element={<Error404Page />} />
      </Routes>
  );
}

export default App;
