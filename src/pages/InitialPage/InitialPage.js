import { ScreenItens } from "./StyledInitialPage"
import { ScreenContainer } from "../../assets/css/ScreenContainer"
import logo from "../../assets/img/logo.png"
import { Navigate, useNavigate } from "react-router-dom"
export default function InitialPage() {
    const navigate = useNavigate()

    function letsGo() {
        navigate("/game")
    }

    return (
        <ScreenContainer>
            <ScreenItens>
                <img src={logo} alt="logo do projeto" />
                <h1>ZapRecall</h1>
                <button onClick={letsGo}>Lets Go!</button>
            </ScreenItens>
        </ScreenContainer>
    )
}