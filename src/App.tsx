// IMPORTS
import React, { useState } from 'react';
import Button from './assets/components/Button/Button';
import Dice from './assets/components/Dice/Dice';

// CSS
import styles from './App.module.css';


// INTERFACES
interface AppState {
  diceState: Array<number>
};


// HELPERS
function populateBoard(diceArray: Array<number>): Array<JSX.Element> {
  return diceArray.map((diceEyes) => {
    return <Dice eyes={diceEyes} handleClick={diceClick} />
  });
};

function diceClick(event: any): void {
  
  console.log(`Clicked on dice:\t${event.target}`)
  console.dir(event)
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
    <main id='App' className={styles['App']} data-theme='bright'>

      <ul>
        {React.Children.toArray(populateBoard(data.diceState))}
      </ul>

      <Button {...buttonProps}/>
      
    </main>
  );
};

export default App;