import React from  'react'
// Usando a renderização condicional
const History = (props) => {

  if (props.allClicks.length === 0) {
  return (
      <div><br />
        App usado para registrar o pressionamento de botão...
      </div>
    )
  }

  return(
    <div>
      <p>Histórico de pressionamento: {props.allClicks.join(' ')}</p>
    </div>
  )
}

export default History;
