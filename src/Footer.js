import styled from "styled-components"

export default function Footer({cards, listaRespondidas}) {
    return (
        <FooterConcluido>
            <h1 data-test="footer">{listaRespondidas.length}/{cards.length} Concluídos</h1>
        </FooterConcluido>
    )
}

const FooterConcluido = styled.div`

  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  .button{
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
`