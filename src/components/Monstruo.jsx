import { useState, useEffect } from 'react'

const Monstruo = ({monstruos, busqueda, indice, monstruoAleatorio}) => {

    const [monstruo, setMonstruo] = useState(null);
    const [imgURL, setImgURL] = useState("");

    //console.log('mostro aletorio', monstruoAleatorio);

    useEffect(() => {
        if (indice !== null) {
            setMonstruo(indice);
            setImgURL(`./src/MHIcon/${indice?.games[0].image}`);
        }
    }, [indice]);

    useEffect(() => {
        if (busqueda) {
            const resultado = monstruos
            .filter((m) =>m.name.toLowerCase().includes(busqueda.toLowerCase()))
            .reduce ((obj, monstruo) => {
                obj[monstruo.id] = monstruo;
                return obj;
            },{})
            setMonstruo(Object.values(resultado)[0]);
            const imagen = Object.values(resultado)[0]
            setImgURL(`./src/MHIcon/${imagen?.games[0]?.image}`);
        }
    }, [busqueda, monstruos]);

    useEffect(() => {
        if (monstruoAleatorio){
            setMonstruo(monstruoAleatorio)
            setImgURL(`./src/MHIcon/${monstruoAleatorio?.games[0]?.image}`)
        }
    },[monstruoAleatorio]);


    if (monstruo) {  
        return(
            <div>
                <img src={imgURL} style={{height: 256, width: 256}}></img>
                <div>
                    <p>Nombre: {monstruo.name}</p>
                    <p>Tipo: {monstruo?.type}</p>
                    <p>Elemento: </p>{monstruo?.elements ? (<ul>{monstruo.elements.map((elemento) => (<li key={elemento}>{elemento}</li>))}</ul>) : (<ul><li>Physical</li></ul>)}
                    <p>Plaga: </p>{monstruo?.ailments ? (<ul>{monstruo.ailments.map((plaga) => (<li key={plaga}>{plaga}</li>))}</ul>) : (<ul><li>Nothing</li></ul>)}
                    <p>Debilidades: </p>{monstruo?.weakness ? (<ul>{monstruo.weakness.map((debilidad) => (<li key={debilidad}>{debilidad}</li>))}</ul>) : (<ul><li>Nothing</li></ul>)}
                    <p>Información: {monstruo?.games[0]?.info}</p>
                </div>
            </div>
        )
    }

    return  (
        <div>
        </div>
    )   
    
}

export default Monstruo