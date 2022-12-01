import Card from "./Card"


export default function Cards({cards}) {
    return (
        <>
            {cards.map((cards, index) => (<Card key={index} indice={index}/>))}
        </>
    )
}


//Não esquecer nunca map retorna primeiro o elemento, depois o indice e terceiro o próprio array