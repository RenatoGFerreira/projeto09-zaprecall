import Card from "./Card"
import { useState } from "react"

export default function Cards({ cards, coresBotoes, zap, quaseLembrei, naoLembrei }) {

    const [cartaAberta, setCartaAberta] = useState(null)


    return (
        <>
            {cards.map((cards, index) => (
                <Card
                    key={index}
                    indice={index}
                    abrirCarta={() => setCartaAberta(index)}
                    abriuCarta={index === cartaAberta}
                    cards={cards}
                    coresBotoes={coresBotoes}
                    zap={zap}
                    quaseLembrei={quaseLembrei}
                    naoLembrei={naoLembrei}
                />))}
        </>
    )
}


//Não esquecer nunca map retorna primeiro o elemento, depois o indice e terceiro o próprio array