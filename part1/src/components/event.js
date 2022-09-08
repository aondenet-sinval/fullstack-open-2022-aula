import React, {useState} from 'react'
  // Função passada como props
const Button = (props) => <button onClick={props
                              .handlerClick}>{props
                                .nome}</button>

const Event = () => {
  // Definir o componente aqui é erro
  // const Button = (props) => {
  //   return <button onClick={props.handlerClick}>{props.nome}</button>
  // }
  const [age, setAge] = useState(30)
  const setToAge = (newAge)=> {
    setAge(newAge)
  }
  return(
    <div>
    <h3>Event</h3>
    <button>{age}</button>
      <Button handlerClick={() => setToAge(31)} nome="Sinval" />
      <Button handlerClick={() => setToAge(32)} nome="Pedro" />
      <Button handlerClick={() => setToAge(33)} nome="Paulo" />
    </div>
  )
}

export default Event;
