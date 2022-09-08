import './index.css';
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

const App = (props) => {
  const { anedoctes } = props;
  const [selected, setSelected] = useState(0);
  const [voteAnedocte, setVoteAnedocte] = useState(
    [
        {anedocte: anedoctes[0], votes: 0},
        {anedocte: anedoctes[1], votes: 0},
        {anedocte: anedoctes[2], votes: 0},
        {anedocte: anedoctes[3], votes: 0},
        {anedocte: anedoctes[4], votes: 0},
        {anedocte: anedoctes[5], votes: 0}
    ]
   );
    //create number aleactory
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const updateAnedocte = () => {
      setSelected(getRandomInt(0,5));
    }

  const addVote = () => {
    // const copyAnedocte = [ ...voteAnedocte]
    setVoteAnedocte( {...voteAnedocte }, { votes: voteAnedocte[selected].votes += 1 } );
  }

  console.log(voteAnedocte);
  return(
    <div>
      <h1>Anedocte of the day:</h1>
      <p>{voteAnedocte[selected].anedocte}</p>
      <p>{voteAnedocte[selected].votes}</p>
      <button onClick={addVote}>votes</button>
      <button onClick={updateAnedocte}>Next Anedocte</button>
      <h1>Anedocte with most votes:</h1>
      <p>Anedoctes</p>
      <p>has {voteAnedocte[selected].votes} votes</p>
    </div>
  )
}

const anedoctes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App anedoctes={anedoctes} />);
