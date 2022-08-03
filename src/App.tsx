// IMPORTS
import React, { useState } from 'react';
import './App.css';
import Button from './assets/components/Button/Button';
import Dice from './assets/components/Dice/Dice';


// INTERFACES
interface AppState {
  diceState: Array<number>
};


// HELPERS
function populateBoard(diceArray: Array<number>): Array<JSX.Element> {
  return diceArray.map((diceEyes) => {
    return <Dice eyes={diceEyes} />
  });
};


// COMPONENT
function App() {
  const [ data, setData ] = useState<AppState>(
    {
      diceState: new Array(8).fill(1),
    }
  );

  function rollDice() {
    setData((oldData) => {
      const newDice = oldData.diceState.map(() => {
        return Math.floor(Math.random() * 6) + 1;
      });
      return {
        ...oldData,
        diceState: newDice
      }
    })
  };


  // Props
  const buttonProps = {
    handleClick: () => rollDice(),
  };

  return (
    <div className="App">
      <ul>
        {React.Children.toArray(populateBoard(data.diceState))}
      </ul>

      <Button {...buttonProps}/>
    </div>
  );
};

export default App;