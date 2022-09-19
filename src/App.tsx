import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import { NavBar } from './components/navbar';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to={"/home"} />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
