import { ClosedQuestion, OpenedQuestion, ContainerButtons, ButtonAnswer } from "./StyledFlashCard"
import { useState } from "react"
import virar from "../../assets/img/seta_virar.png"
import StatusIcon from "../StatusIcon"
import { VERDE, VERMELHO, AMARELO } from "../../constants/cores"

export default function FlashCard({ index, card, increaseCounter, createAnswerList }) {

    const [started, setStarted] = useState(false)
    const [turned, setTurned] = useState(false)
    const [finished, setFinished] = useState(false)
    const [status, setStatus] = useState("not answered")

    function openQuestion() {
        if (!finished) {
            setStarted(true)
            setFinished(true)
        }
    }

    function openAnswer() {
        setTurned(true)
    }

    function closeQuestion(questionStatus) {
        setStarted(false)
        setTurned(false)
        setStatus(questionStatus)
        increaseCounter()
        createAnswerList(questionStatus)
    }


    return (
        <>
            {!started ? (
                <ClosedQuestion status={status}>
                    <p>Pergunta {index + 1}</p>
                    <StatusIcon status={status} openQuestion={openQuestion} />
                </ClosedQuestion>
            ) : (

                !turned ? (
                    <OpenedQuestion>
                        {card.question}
                        <img src={virar} alt="seta virar" onClick={openAnswer} />
                    </OpenedQuestion>
                ) : (
                    <OpenedQuestion>
                        {card.answer}
                        <ContainerButtons>
                            <ButtonAnswer background={VERMELHO} onClick={() => closeQuestion("wrong")}>Não Lembrei</ButtonAnswer>
                            <ButtonAnswer background={AMARELO} onClick={() => closeQuestion("almost")}>Quase Lembrei</ButtonAnswer>
                            <ButtonAnswer background={VERDE} onClick={() => closeQuestion("correct")}>Zap!</ButtonAnswer>
                        </ContainerButtons>
                    </OpenedQuestion>
                )
            )
            }
        </>

    )
}