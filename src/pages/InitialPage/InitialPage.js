import { ScreenItens } from "./StyledInitialPage"
import { ScreenContainer } from "../../assets/css/ScreenContainer"
import { StyledForm } from "../../assets/css/StyledForm"
import logo from "../../assets/img/logo.png"
import { useNavigate } from "react-router-dom"

export default function InitialPage({selectDeck, setSelectDeck}) {
    const navigate = useNavigate()

    function letsGo(e) {
        e.preventDefault()
        if (selectDeck !== undefined) {
            navigate("/game")
        }else{
            alert("Você precisa selecionar um deck!")
        }
    }

    return (
        <ScreenContainer>
            <ScreenItens>
                <img src={logo} alt="logo do projeto" />
                <h1>ZapRecall</h1>
                <StyledForm onSubmit={letsGo}>
                    <select name="deck" value={selectDeck} onChange={deck => setSelectDeck(deck.target.value)}>
                        <option value="">--Selecione--</option>
                        <option value="deckReact">React</option>
                        <option value="deckFutebol">Futebol</option>
                        <option value="deckGerais">Conhecimentos Gerais</option>
                    </select>
                    <button type="submit">Lets Go!</button>
                </StyledForm>
            </ScreenItens>
        </ScreenContainer>
    )
}
