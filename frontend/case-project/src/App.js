// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPersonPage from './pages/AddPersonPage';
import PersonListPage from './pages/PersonListPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPersonPage />} />
          <Route path="/list" element={<PersonListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
