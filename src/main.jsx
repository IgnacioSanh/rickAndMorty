import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import PeopleAPI from "./PeopleAPI";
import BetterPeopleAPI from "./BetterPeopleAPI";
import RickAndMortyView from "./views/RickAndMorty/RickAndMorty";
import CharacterView from "./views/CharacterView/CharacterView";
import Filtrar from "./views/Filtrar/Filtrar";
import "./index.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/api" element={<PeopleAPI />} />
      <Route path="/nueva-api" element={<BetterPeopleAPI />} />
      <Route path="/rick-morty" element={<RickAndMortyView />} />
      <Route path="/character/:characterId" element={<CharacterView />} />
      <Route path="/filtrar" element={<Filtrar />} />
    </Routes>
  </BrowserRouter>
);
