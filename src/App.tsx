import { Component, ReactComponentElement, ReactNode } from 'react';
import './App.css';
import Button from './assets/components/Button/Button';
import Dice from './assets/components/Dice/Dice';

function populateBoard(element: JSX.Element): Array<JSX.Element> {
  const numberOfDice = 8;
  return new Array(numberOfDice).fill(element)
};

function App() {
  return (
    <div className="App">
      <ul>
        {populateBoard(<Dice />)}
      </ul>
      <Button />
    </div>
  )
};

export default App;