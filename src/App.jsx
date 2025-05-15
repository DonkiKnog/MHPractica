import { useState, useEffect } from 'react'
import './App.css'
import monstersData from './MHIcon/monsters_mh_wilds_large_only.json'
import Filtrar from './components/Filtrar.jsx'
import Monstruo from './components/Monstruo.jsx'
import Aleatorizar from './components/Aleatorizar.jsx'

function App() {

  const [monstruos, setMonstruos] = useState([])
  const [busqueda, setBusqueda] = useState('Busca el monstruo o borra el mensaje')
  const [monstruoAleatorio, setMonstruoAleatorio] = useState(null)
  const [indice, setIndice] = useState(null)

  useEffect(() => {
    setMonstruos(monstersData.monsters)
  }, []);

  console.log('Aleatorio', monstruoAleatorio);
  console.log('Busqueda', busqueda);
  console.log('Indice', indice);
  
  return (
    <>
      <div>
        <Filtrar busqueda={busqueda} setBusqueda={setBusqueda} monstruos={monstruos} setIndice={setIndice}/>
        <Aleatorizar monstruos={monstruos} setMonstruoAleatorio={setMonstruoAleatorio}/>
        <Monstruo monstruos={monstruos} busqueda={busqueda} indice={indice} monstruoAleatorio={monstruoAleatorio}/>
      </div>
    </>
  )
}

export default App
