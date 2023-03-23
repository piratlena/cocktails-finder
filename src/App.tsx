import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import Cocktail from "./pages/Coctail/Cocktail";
import Random from "./pages/Random/Random";
import List from "./pages/List/List";
import Bar from "./pages/Bar/Bar";

import "./styles/main.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/search" element={<SearchResults />} />

        <Route path="/:cocktail" element={<Cocktail />} />
        <Route path="/random" element={<Random />} />
        <Route path="/list" element={<List />} />
        <Route path="/bar" element={<Bar />} />
      </Routes>
    </div>
  );
}

export default App;
