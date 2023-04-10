import './App.css';
import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage';
import Menu from './components/Menu';

function App() {
  return (
    <div>
     
       <Menu />
       <div className="page">
       <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/drift' element={<DriftPage />} />
           <Route path='/timeattack' element={<TimeAttackPage />} />
           <Route path='/forza' element={<ForzaPage />} />
           
       </Routes>
       </div>
    </div>
  );
}

export default App;
