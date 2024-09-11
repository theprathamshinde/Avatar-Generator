import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Thank } from './pages/thanks/thank';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Thank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
