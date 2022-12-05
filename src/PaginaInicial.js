import logo from "./assets/img/logo.png"
import styled from "styled-components"
export default function PaginaInicial({ iniciarZapRecall }) {
    return (
        <ScreenContainer>
            <img src={logo} alt="logo do projeto" />
            <h1>ZapRecall</h1>
            <button onClick={iniciarZapRecall}>Iniciar Recall!</button>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
margin: auto;
    img{
        width: 136px;
        height: 161px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin: 30px 0;
    }
    button{
        width: 246px;
        height: 54PX;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #D70900;
        background: #fff;
        border-radius: 5px;
        padding:5px;
    }
`
