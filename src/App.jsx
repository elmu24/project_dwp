// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComponentUI from './ComponentExercise/ComponentUI'; // Importiere die Hauptkomponente von ComponentExercise
import OpenData from './OpenData/OpenData'; // Importiere OpenData-Komponente

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/component-exercise">Component Exercise</Link></li>
            <li><Link to="/open-data">Open Data</Link></li>
          </ul>
        </nav>

        {/* Routing-Definitionen */}
        <Routes>
          <Route path="/component-exercise" element={<ComponentUI />} />
          <Route path="/open-data" element={<OpenData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
