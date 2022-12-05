import GlobalStyle from "./assets/css/GlobalStyle";
import styled from "styled-components";
import Logo from "./Logo"
import Cards from "./Cards";
import Footer from "./Footer"
import cards from "./components/cards"
import coresBotoes from "./components/cores";
import { useState } from "react";
//import { useState } from "react";


export default function App() {

  const [listaRespondidas, setListaRespondidas] = useState([])
  console.log(listaRespondidas)

  function zap(){
    const newArray = [...listaRespondidas, {status:"zap"}]
    setListaRespondidas(newArray)
    console.log("zap")
  }

  function quaseLembrei(){
    const newArray = [...listaRespondidas, {status:"quaseLembrei"}]
    setListaRespondidas(newArray)
    console.log("quaseLembrei")
  }

  function naoLembrei(){
    const newArray = [...listaRespondidas, {status:"naoLembrei"}]
    setListaRespondidas(newArray)
    console.log("nãoLembrei")
  }

  return (
    <ScreenContainer>
      <GlobalStyle />
      <Logo />
      <Cards 
        cards={cards} 
        coresBotoes={coresBotoes} 
        zap={() => zap()}
        quaseLembrei={() => quaseLembrei()}
        naoLembrei={() => naoLembrei()}
      />
      <Footer cards={cards} listaRespondidas={listaRespondidas} />
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