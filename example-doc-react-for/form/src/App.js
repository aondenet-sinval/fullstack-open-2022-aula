import './App.css';
import React from 'react';
import useForm from './hooks/useForm';

const App = (props) => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };

  return (
    <div>
      <h1>Contato</h1>
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
  );
};
export default App;
