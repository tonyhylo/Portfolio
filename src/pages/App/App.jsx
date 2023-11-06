import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import NavBar from "../../components/NavBar/NavBar";
import Cursor from "../../components/Cursor/Cursor.jsx";
import { MouseContext } from "../../context/mouse-context";

export default function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <main className="App">
      <Cursor />
      <NavBar />
      <PortfolioPage />
    </main>
  );
}
