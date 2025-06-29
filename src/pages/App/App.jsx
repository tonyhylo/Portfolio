import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import NavBar from "../../components/NavBar/NavBar";
import "../../fonts/Myfont-Regular.ttf";

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <PortfolioPage />
    </main>
  );
}
