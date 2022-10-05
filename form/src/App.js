import './App.css';
import React, { useState} from 'react';


const App = () => {
  const [contato, setContato] = useState({})
  console.log('App.js: ', contato);
  const handleInputChange = (event) => {
    const target = event.target
    const name = target.name.value
    const email = target.email.value
    const message = target.message.value
    //harmazenando os valores de target
      setContato( [...contato,
        {
      name: name,
      email: email,
      message: message
    }])
    console.log('contato adicionados: ', contato);
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="name"
          onChange={handleInputChange} value={contato.name} />
        <br />
        <input type="text" name="email" placeholder="email"
          onChange={handleInputChange} value={contato.email} />
        <br />
        <input type="textarea" name="message" placeholder="message"
          onChange={handleInputChange} value={contato.message} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default App;
