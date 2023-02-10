import { ScreenContainer, BodyContainer } from "../../assets/css/ScreenContainer"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import FlashCard from "../../components/FlashCard/FlashCard"
import deckReact from "../../constants/deckReact"
import { useState } from "react"

export default function DeckCards() {
    const [counter, setCounter] = useState(0)

    return (
        <ScreenContainer>
            <Header />
            <BodyContainer>
                {deckReact.map((card, i) => 
                <FlashCard 
                    key={i} 
                    index={i} 
                    card={card}
                />
                )}
            </BodyContainer>
            <Footer totQuestions={deckReact.length} questionsCounter={counter}/>
        </ScreenContainer>
    )
}

