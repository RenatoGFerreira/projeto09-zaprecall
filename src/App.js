import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeckCards from "./pages/DeckCards/DeckCards";
import InitialPage from "./pages/InitialPage/InitialPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
        <Route path="/game" element={<DeckCards/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

