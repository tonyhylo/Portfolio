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
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <h1>Hover over me</h1>
        </div>
      </div>
      <div className="container" style={{ background: "peachpuff" }}></div>
      <NavBar />
      <PortfolioPage />
    </main>
  );
}
