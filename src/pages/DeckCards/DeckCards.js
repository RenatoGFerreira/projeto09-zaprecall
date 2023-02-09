import { ScreenContainer } from "../../assets/css/ScreenContainer"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import FlashCard from "../../components/FlashCard/FlashCard"

export default function DeckCards() {
    return (
        <ScreenContainer>
            <Header/>
            <FlashCard/>
            <FlashCard/>
            <FlashCard/>
            <FlashCard/>
            <Footer/>
        </ScreenContainer>
    )
}