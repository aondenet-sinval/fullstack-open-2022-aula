import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const contatos = [
  {name: "sinval", email: "gracinda@mail.com", mensagem: "mensagem"},
  {name: "jaime", email: "gracinda@mail.com", mensagem: "mensagem"},
  {name: "gilberto", email: "gracinda@mail.com", mensagem: "mensagem"},
]
console.log('contatos em ndex.js: ', contatos);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
