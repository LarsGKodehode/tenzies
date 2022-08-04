// IMPORTS
import React, { useState } from 'react';
import Button from './assets/components/Button/Button';
import Dice from './assets/components/Dice/Dice';

// CSS
import styles from './App.module.css';


// INTERFACES
interface AppState {
  diceState: Array<DiceState>
};

interface DiceState {
  diceEyes: number,
  isActive: boolean,
}


// HELPERS
/**
 * Populates the board with dices
 * @param diceArray 
 * @returns 
 */
function populateBoard(diceArray: Array<DiceState>): Array<JSX.Element> {
  return diceArray.map((diceState: DiceState) => {
    const { diceEyes, isActive} = diceState;

    return(
      <Dice
        eyes={diceEyes}
        handleClick={diceClick}
        isActive={isActive}
      />)
  });
};

/**
 * Handles what happens when clicking on dice
 */
function diceClick(event: any): void {
  console.log(`Clicked on dice:\t${event.target}`)
  console.dir(event)
};

/**
 * Construct the initial state of App,
 * currently only dices
 * @returns 
 */
const initialAppState = (): AppState => {

  const numberOfDice = 10;

  let diceArray: Array<DiceState> = [];

  for(let i = 0; i < numberOfDice; i++) {
    diceArray.push({
      diceEyes: Math.floor(Math.random() * 6) + 1,
      isActive: true,
    });
  };

  return {
    diceState: diceArray
  };
};


// COMPONENT
function App() {
  const [ data, setData ] = useState<AppState>(initialAppState);

  function rollDice() {
    setData((oldData) => {
      const newRoll = oldData.diceState.map((diceState) => {
        const roll = Math.floor(Math.random() * 6) + 1;
        return {
          ...diceState,
          diceEyes: roll
        }
      });
      
      return {
        ...oldData,
        diceState: newRoll,
      };
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