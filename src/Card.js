import play from "./assets/img/seta_play.png"
import styled from "styled-components"

export default function Card(props){
    return(
        <CardFechado>
            <h1>Pergunta {props.indice + 1}</h1>
            <img src={play} alt="play" />
        </CardFechado>
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
`