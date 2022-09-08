import React from 'react'
import { createRoot } from 'react-dom/client';
import Destruturing from './components/destruturing'
import Display from './components/reactState'
import Direction from './components/direction'
import Direct from './components/direct'
import Event from './components/event'

const App = () => {

  return (
    <React.Fragment>
    <Display />
    <Event />
    <Direction />
    <Direct />
    <Destruturing />
    </React.Fragment>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
