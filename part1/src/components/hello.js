import React from 'react'
// Usando destruturing por meio da propriedade passada por meio de props
const Hello = (props) => {
  const {name, phone} = props
  return(
    <div>
      <h1>Desetruturando Props</h1>
      <p>Nome: {name}, telefone: {phone}.</p>
    </div>
  )
}
export default Hello;
