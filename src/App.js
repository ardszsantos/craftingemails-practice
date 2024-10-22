import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/firstPage';
import CoverPage from './pages/coverPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full items-center justify-center">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/cover" element={<CoverPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
