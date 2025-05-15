const Aleatorizar = ({monstruos, setMonstruoAleatorio}) => {

    const aleatorio = (e) => {
        e.preventDefault()
        const total = monstruos.length;
        const cual = Math.floor(Math.random()*total);
        setMonstruoAleatorio(monstruos[cual])
    }

    return  (
        <button onClick={aleatorio}>Aleatorizar</button>
    )
}

export default Aleatorizar