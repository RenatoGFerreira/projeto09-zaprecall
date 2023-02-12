import styled from "styled-components";

export const ScreenItens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img{
            width: 136px;
            height: 160px;
        }
        h1{
            font-family: 'Righteous', cursive;
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

        select{
            width: 246px;
            height: 40PX;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;

            text-align: center;
            line-height: normal;
            color: #D70900;
            background: #fff;
            border-radius: 5px;
            border: 1px solid black;
            padding:5px;
            margin-bottom: 10px;
        }
        
`