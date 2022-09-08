import React, { useState } from 'react'
// usando desestruturação definimos a variavel 'counter' e a função 'setCounter'
// que será usada para atualizar o valor da variável.
// O gancho useState definiu o valor 0 para o valor inicial

const Button = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
    return(
      <div>
        <button>{counter}</button>
        <button onClick={increaseByOne}>Aumentar </button>
        <button onClick={setToZero}>Zerar </button>
        <button onClick={decreaseByOne}>Diminuir</button>
      </div>
    )
}

export default Button;
