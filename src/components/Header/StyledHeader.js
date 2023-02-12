import styled from "styled-components";

export const LogoContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0px 0 20px 0;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 90px;
    margin-bottom: 10px;
    z-index: 1;
    background-image: linear-gradient(to top, transparent, #50E3C2 50%, #50E3C2 30%);
        a{
            text-decoration: none;
            display: flex;
            align-items: center;
        }

        img {
            width: 52px;
        }

        h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
        }
`