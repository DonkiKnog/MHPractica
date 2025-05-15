import { useState } from 'react'

const Filtrar = ({busqueda, setBusqueda, monstruos, setIndice}) => {

    const [indiceLocal, setIndiceLocal] = useState([]);

    const filtra = (event) => {
        const resultado = monstruos.filter((monstruo) => monstruo.name.toLowerCase().includes(event.target.value.toLowerCase()))        
        setIndiceLocal(resultado)
        setBusqueda(event.target.value)
    } 
  
    const  elegir = (eleccion) => {        
        console.log('ELECCION', eleccion);
        setIndice(eleccion)
    }

    return(
        <div>
            <input value={busqueda} onChange={filtra}/>
            <br/>
            {indiceLocal.map((monstruoElegido, index) => <button key={monstruoElegido.name} onClick={() => elegir(indiceLocal.at(index))}>{monstruoElegido.name}</button>)}
        </div>
    )
    
}

export default Filtrar