import React from 'react'
// Usando manipuladores de eventos
const Click = () => {
  const Clicked = () => console.log('Fui clicado');
  return Clicked;
}

const Referencia = () => {
  console.log('React manipulador de eventos');
  return(
    <div>
      <h3>Função que retorna  função</h3>
      <button onClick={Click()}>Alerta Clique </button>
    </div>
  )
}
export default Referencia;
