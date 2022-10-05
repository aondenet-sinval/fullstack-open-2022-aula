import './App.css';
import React from 'react';
import useForm from './hooks/useForm';

const Form = () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const enviarContato = () => {
    // faça o que for preciso :)
    console.log('App: ',values);
    let pessoa;
    for (var i = 0; i < values.length; i++) {
      pessoa = values[i].name;
    }
    console.log('Nome: ', pessoa);
  };
  return(
    <div>
    <form onSubmit={handleSubmit(enviarContato)}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Digite o seu nome"
      />
      <br />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Digite o seu e-mail"
      />
      <br />
      <input
        onChange={handleChange}
        type="text"
        name="message"
        placeholder="Mensagem"
      />
      <br />
      <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
    </form>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Contato</h1>
      <Form />
    </div>
  );
};
export default App;
