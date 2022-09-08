import React, { useState } from 'react'

const Value = () => {
  const [age, setAge] = useState(30)

  const setToAge = (newAge)=> {
    setAge(newAge)
  }
  return(
    <div>
    <h3>Função que retorna função ... Value</h3>
    <button>{age}</button>
      <button onClick={() => setToAge(31)}>Mudar idade</button>
      <button onClick={() => setToAge(32)}>Mudar idade</button>
      <button onClick={() => setToAge(33)}>Mudar idade</button>
    </div>
  )
}
export default Value;
