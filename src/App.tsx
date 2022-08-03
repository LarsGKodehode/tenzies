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
    console.log("rolling dice")
  };

  return (
    <div className="App">
      <ul>
        {React.Children.toArray(populateBoard(data.diceState))}
      </ul>

      <Button handleClick={() => rollDice()}/>
    </div>
  );
};

export default App;