import play from "./assets/img/seta_play.png"
import styled from "styled-components"
import virar from "./assets/img/seta_virar.png"
import { useState } from "react"
import coresBotoes from "./components/cores"




export default function Card({ indice, abriuCarta, abrirCarta, cards }) {

    const {VERDE, AMARELO, VERMELHO} = coresBotoes
    const {question, answer} = cards
    const [CartaVirada, setCartaVirada] = useState(false)

    return (
        <>
            {
                abriuCarta ?
                    (
                        <CardAberto>
                            {
                                !CartaVirada ?
                                    (
                                        <>
                                            <p>{question}</p>
                                            <img src={virar} alt="seta virar" onClick={()=>(setCartaVirada(true))}/>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <p>{answer}</p>
                                            <ContainerBotoes>
                                                <BotoesStyle corBotao={VERMELHO}>Não Lembrei</BotoesStyle>
                                                <BotoesStyle corBotao={AMARELO}>Quase Lembrei</BotoesStyle>
                                                <BotoesStyle corBotao={VERDE}>Zap</BotoesStyle>

                                            </ContainerBotoes>
                                        </>
                                    )
                            }
                        </CardAberto>
                    )
                    :
                    (
                        <CardFechado onClick={abrirCarta}>
                            <h1>Pergunta {indice + 1}</h1>
                            <img src={play} alt="play" />
                        </CardFechado>
                    )
            }


        </>
    )
}

const CardFechado = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const CardAberto = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const BotoesStyle = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.corBotao};
    border-radius: 5px;
    border: 1px solid ${props => props.corBotao};
    padding:5px;
`

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/