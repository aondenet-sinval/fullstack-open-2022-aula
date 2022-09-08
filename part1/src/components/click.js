import React from 'react'

// const Ola = (props) => {
//   // const Oi = () => console.log('Oi: ', props);
//   return () => console.log('Oi: ', props);//Simplificada
//   // return Oi;
// }
// Ou tudo em uma linha
 const Ola = (props) => () => console.log('Oi: ', props);

const Click = ()=> {
  return(
    <div>
      <button onClick={Ola('Sinval')}>Clique</button><br />
      <button onClick={Ola('Pedro')}>Clique</button><br />
      <button onClick={Ola('Paulo')}>Clique</button>
    </div>
  )
}

export default Click;
