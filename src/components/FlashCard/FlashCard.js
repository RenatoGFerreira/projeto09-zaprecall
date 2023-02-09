import { ClosedQuestion } from "./StyledFlashCard"
import play from "../../assets/img/seta_play.png"

export default function FlashCard() {
    return (
        <ClosedQuestion>
            Pergunta 1
            <img src={play} alt="play para virar"/>
        </ClosedQuestion>
    )
}