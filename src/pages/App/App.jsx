import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PortfolioPage from '../PortfolioPage/PortfolioPage'

export default function App() {
  return (
    <main className="App">
      <PortfolioPage/>
    </main>
    
  );
}
