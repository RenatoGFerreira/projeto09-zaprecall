import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeckCards from "./pages/DeckCards/DeckCards";
import InitialPage from "./pages/InitialPage/InitialPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useState } from "react";

export default function App() {
  const [selectDeck, setSelectDeck] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage selectDeck={selectDeck} setSelectDeck={setSelectDeck}/>}/>
        <Route path="/game" element={<DeckCards selectDeck={selectDeck}/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

