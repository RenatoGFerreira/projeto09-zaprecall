import GlobalStyle from "./assets/css/GlobalStyle";
import styled from "styled-components";
import Logo from "./Logo"
import Cards from "./Cards";
import Footer from "./Footer"
import PaginaInicial from "./PaginaInicial";
import cards from "./components/cards"
import coresBotoes from "./components/cores";
import { useState } from "react";


export default function App() {

  const [listaRespondidas, setListaRespondidas] = useState([])
  const [objetoUsado, setObjetoUsado] = useState()

  const [alteraPagina, setAlteraPagina] = useState(false)

  function iniciarZapRecall(){
    setAlteraPagina(true)
  }

  function zap() {
    const newArray = [...listaRespondidas, "zap"]
    setObjetoUsado("zap")
    setListaRespondidas(newArray)
  }

  function quaseLembrei() {
    const newArray = [...listaRespondidas, "quaseLembrei"]
    setObjetoUsado("quaseLembrei")
    setListaRespondidas(newArray)
  }

  function naoLembrei() {
    const newArray = [...listaRespondidas, "naoLembrei"]
    setObjetoUsado("naoLembrei")
    setListaRespondidas(newArray)
  }

  return (
    <ScreenContainer>
      <GlobalStyle />
      {
        !alteraPagina ?
          <PaginaInicial iniciarZapRecall={()=> iniciarZapRecall()} />
          :
          <>
            <Logo />
            <Cards
              cards={cards}
              coresBotoes={coresBotoes}
              zap={() => zap()}
              quaseLembrei={() => quaseLembrei()}
              naoLembrei={() => naoLembrei()}
              objetoUsado={objetoUsado}
            />
            <Footer cards={cards} listaRespondidas={listaRespondidas} />
          </>
      }
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`