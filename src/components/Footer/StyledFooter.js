import styled from "styled-components";

export const FooterConcluido = styled.div`
    width: 100%;
    min-height: 50px;
    backdrop-filter: blur(7px) saturate(200%);
    -webkit-backdrop-filter: blur(7px) saturate(200%);
    background-color: rgba(255, 255, 255, 0.59);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #444;
    padding: 10px;

    .button{
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }
`