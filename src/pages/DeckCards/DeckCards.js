import { ScreenContainer } from "../../assets/css/ScreenContainer"
import { BodyContainer, AnswersContainer, ResponseContainer } from "./StyledDeckCards"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import FlashCard from "../../components/FlashCard/FlashCard"
import deckReact from "../../constants/deckReact"
import { useState } from "react"
import StatusIcon from "../../components/StatusIcon"
import sad from "../../assets/img/sad.png"
import happy from "../../assets/img/party.png"

export default function DeckCards() {
    const [counter, setCounter] = useState(0)
    const [answerList, setAnswerList] = useState([])


    function increaseCounter() {
        setCounter(counter + 1)
    }

    function createAnswerList(status) {
        setAnswerList([...answerList, status])
    }
    console.log(`Lista: ${answerList}`)

    return (
        <ScreenContainer>
            <Header />
            <BodyContainer>
                {deckReact.map((card, i) =>
                    <FlashCard
                        key={i}
                        index={i}
                        card={card}
                        increaseCounter={increaseCounter}
                        createAnswerList={createAnswerList}
                    />
                )}
            </BodyContainer>
            <Footer>
                {counter === deckReact.length && (answerList.includes("wrong") ? (
                    <ResponseContainer>
                    <img src={sad} alt="emoji triste"/>
                    <h1>Ainda faltam alguns, mas não desanime!!</h1>
                    </ResponseContainer>
                ):(
                    <ResponseContainer>
                    <img src={happy} alt="emoji triste"/>
                    <h1>Parabéns, você está no caminho certo!</h1>
                    </ResponseContainer>
                ))}
                <h1>{counter}/{deckReact.length} Concluídos</h1>
                <AnswersContainer>
                    {answerList.map((a, i) => <StatusIcon status={a} key={i} />)}
                </AnswersContainer>
            </Footer>
        </ScreenContainer>
    )
}

