import play from "../assets/img/seta_play.png"
import correct from "../assets/img/icone_certo.png"
import almost from "../assets/img/icone_quase.png"
import wrong from "../assets/img/icone_erro.png"


export default function StatusIcon({ status, openQuestion }) {
    return (
        <>
            {status === "not answered" && <img src={play} alt="icone do play" onClick={openQuestion} />}
            {status === "correct" && <img src={correct} alt="icone correto" />}
            {status === "almost" && <img src={almost} alt="icone do quase" />}
            {status === "wrong" && <img src={wrong} alt="icone do errado" />}
        </>
    )
}