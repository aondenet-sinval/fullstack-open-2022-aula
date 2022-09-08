import React, {useState} from 'react'
import History from './history'
import Click from './click'

// Objetivo: adicionar um componente que lembra os cliques
// allClicks
const Direct = () => {
  const [left, setLeft] = useState(0)
  const [rigth, setRigth] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClicks = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRigthClicks = () => {
    setAllClicks(allClicks.concat('R'))
    setRigth(rigth + 1)
  }
  //Renderização condicional
  const Button = ({left, rigth}) => {
    console.log("Dentro de Button", left);
    if (left > 0 || rigth > 0) {
      return<button>{allClicks.join(' ')}</button>
    }
    return<p>Escolha a direção.</p>

  }


  return(
    <div>
    <button>Left: {left}</button><button>Rigth: {rigth}</button><br />
    <button onClick={handleLeftClicks}>Left +</button>
    <button onClick={handleRigthClicks}>Rigth +</button>
    <h3>Renderização condicional</h3>
    <h3>..Button</h3>
    <Button left={left} rigth={rigth} />
    <h3>..History</h3>
    <History allClicks={allClicks} />
    <h3>..Click </h3>
    <Click />
    </div>
  )
}

export default Direct;
