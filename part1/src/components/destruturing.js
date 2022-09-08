import React from 'react';
const Estrutura = {
    nome: "Sinval",
    endereco: "Rua g",
    telefones: {
      fixo: "3021-0395",
      celular: "99900-5211",
    }
  }
  // primeira aplicação de desestruturação
const { telefones } = Estrutura
// segunda aplicação de desestruturação
const Destruturing = (props)=>{
  const {fixo, celular } = telefones
  return(
    <div>
      <h1>Usando destruturing</h1>
      <p>{fixo}</p>
      <p>{celular}</p>

    </div>
  )
}

export default Destruturing;
