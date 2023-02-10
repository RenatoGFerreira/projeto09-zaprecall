import { FooterConcluido } from "./StyledFooter"

export default function Footer({totQuestions, questionsCounter}) {
    return (
        <FooterConcluido>
            <h1>{questionsCounter}/{totQuestions} Concluídos</h1>
        </FooterConcluido>
    )
}

