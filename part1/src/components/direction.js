import React, { useState } from 'react'

const Direction = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    rigth: 0
  })
// criamos cópias de objetos clicks com ...clicks
const handleLeftClicks = () =>
  setClicks({...clicks, left: clicks.left + 1})

const handleRigthClicks = () =>
  setClicks({...clicks, rigth: clicks.rigth + 1})

    return(
      <div>
      <h3>Vários estados</h3>
        <button>Esquerda: {clicks.left} || Direita: {clicks.rigth}</button>
        <button onClick={handleLeftClicks}>Left</button>
        <button onClick={handleRigthClicks}>Rigth</button>
      </div>
    )
}
export default Direction;
