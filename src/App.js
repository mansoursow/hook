import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
