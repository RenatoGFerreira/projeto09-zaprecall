import styled from "styled-components";
import {VERDE, VERMELHO, AMARELO, CINZA} from "../../constants/cores"

export const ClosedQuestion = styled.div`
    width: 300px;
    height: 35px;
    backdrop-filter: blur(7px) saturate(200%);
    -webkit-backdrop-filter: blur(7px) saturate(200%);
    background-color: rgba(255, 255, 255, 0.59);
    margin: 12px;
    padding: 15px;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
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
        color: ${props => {
            switch(props.status){
                case "correct":
                    return VERDE
                case "wrong":
                    return VERMELHO
                case "almost":
                    return AMARELO
                default:
                    return CINZA    
            }
        }}
    }
`

export const OpenedQuestion = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    backdrop-filter: blur(7px) saturate(200%);
    -webkit-backdrop-filter: blur(7px) saturate(200%);
    background-color: rgba(255, 255, 255, 0.59);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
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

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button{
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
        background: blue;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
    }
`