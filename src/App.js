import GlobalStyle from "./assets/css/GlobalStyle";
import styled from "styled-components";
import Logo from "./Logo"
import Cards from "./Cards";
import Footer from "./Footer"


export default function App() {
  return (
    <ScreenContainer>
      <GlobalStyle />
      <Logo />
      <Cards />
      <Footer />
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