import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import CharactersScreen from "./views/CharactersScreen/CharactersScreen";
import SingleCharacterView from "./views/SingleCharacterScreen/SingleCharacterScreen";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<CharactersScreen />} />
      <Route path="characters/:page" element={<CharactersScreen />} />
      <Route path="character/:characterId" element={<SingleCharacterView />} />
    </Routes>
  </BrowserRouter>
);
