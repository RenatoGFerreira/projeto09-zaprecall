import Card from "./Card"
import { useState } from "react"

export default function Cards({ cards, coresBotoes, zap, quaseLembrei, naoLembrei, objetoUsado }) {
    

    const [cartaAberta, setCartaAberta] = useState(null)
    const [respondidas, setRespondidas] = useState([])
    // const [listaCompleta, setListaCompleta] = useState([])
    


    function marcarRespondidas(numero){
        setRespondidas([...respondidas, {indice: numero, status: objetoUsado}])
        setCartaAberta(null)
        
    }

        console.log("card:" + objetoUsado)
        console.log(respondidas)

    // function completarLista(){
    //     for(let i = 0 ; i < respondidas.length ; i++){
    //         setListaCompleta([...listaCompleta, {indice: respondidas[i], status: listaRespondidas}])
    //     }
    // }

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
                    marcarRespondidas={() => marcarRespondidas(index)}
                    respondidas={respondidas}
                />))}
        </>
    )
}


//Não esquecer nunca map retorna primeiro o elemento, depois o indice e terceiro o próprio array