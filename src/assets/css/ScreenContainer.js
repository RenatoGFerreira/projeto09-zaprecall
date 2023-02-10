import styled from "styled-components"


export const ScreenContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: #50E3C2;
    background-image: 
        radial-gradient(at 47% 33%, hsl(162.29, 97%, 58%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(197.88, 100%, 50%) 0, transparent 55%);
    width: 100vw;
    min-height: 100vh;
`

export const BodyContainer = styled.div`
    margin-top: 112px;
    margin-bottom: 70px;
`