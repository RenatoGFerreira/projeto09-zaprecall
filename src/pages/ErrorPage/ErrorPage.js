import styled from "styled-components"
export default function ErrorPage(){
    return(
        <ScreenContainer>
            <h1>Sorry! Doesn't exist this webpage.</h1>
        </ScreenContainer>
        
    )
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