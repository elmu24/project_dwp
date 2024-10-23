
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; /*necessary import after installing routing*/
import ComponentUI from './ComponentExercise/ComponentUI'; 
import OpenData from './OpenData/OpenData'; 
/* Importing the components of the other exercises*/

function App() {
  return (
    <Router>
      <div>
        {/* Navigation and the Linking */}
        <nav>
          <ul>
            <li><Link to="/component-exercise">Component Exercise</Link></li>
            <li><Link to="/open-data">Open Data</Link></li>
          </ul>
        </nav>

        {/* Routing-Definition */}
        <Routes>
          <Route path="/component-exercise" element={<ComponentUI />} />
          <Route path="/open-data" element={<OpenData />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
