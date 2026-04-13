import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Cursor from './Components/Cursor'; 
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

import './assets/style/cursor.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cursor />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="skills"><Skills /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
            </>
          } />

          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;