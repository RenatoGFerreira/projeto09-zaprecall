import { ClosedQuestion, OpenedQuestion, ContainerButtons } from "./StyledFlashCard"
import { useState } from "react"
import virar from "../../assets/img/seta_virar.png"
import StatusIcon from "../StatusIcon"

export default function FlashCard({ index, card }) {

    const [started, setStarted] = useState(false)
    const [turned, setTurned] = useState(false)
    const [finished, setFinished] = useState(false)
    const [status, setStatus] = useState("not answered")

    function openQuestion() {
        if(!finished){
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
                            <button onClick={() => closeQuestion("wrong")}>Não Lembrei</button>
                            <button onClick={() => closeQuestion("almost")}>Quase Lembrei</button>
                            <button onClick={() => closeQuestion("correct")}>Zap!</button>
                        </ContainerButtons>
                    </OpenedQuestion>
                )
            )
            }
        </>

    )
}