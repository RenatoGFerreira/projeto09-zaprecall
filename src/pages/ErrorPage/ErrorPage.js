import { ScreenContainer } from "../../assets/css/ScreenContainer"
import sad from "../../assets/img/sad.png"

export default function ErrorPage(){
    return(
        <ScreenContainer>
            <img src={sad} alt="icone bad"/>
            <h1>Sorry! Doesn't exist this webpage.</h1>
        </ScreenContainer>
        
    )
}