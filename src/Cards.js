import Card from "./Card"
import { useState } from "react"

export default function Cards({cards}) {

    const [ cartaAberta, setCartaAberta] = useState(null)

    return (
        <>
            {cards.map((cards, index) => (
            <Card 
                key={index} 
                indice={index}
                abrirCarta={()=>setCartaAberta(index)}
                abriuCarta={index === cartaAberta}
                cards={cards}
            />))}
        </>
    )
}


//Não esquecer nunca map retorna primeiro o elemento, depois o indice e terceiro o próprio array