// IMPORTS
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

// components
import GameInfo from './assets/components/GameInfo/GameInfo';
import Button from './assets/components/Button/Button';
import Dice from './assets/components/Dice/Dice';

// CSS
import styles from './App.module.css';


// INTERFACES
interface AppState {
  diceState: Array<DiceState>,
  conditionWon: boolean,
};

interface DiceState {
  diceEyes: number,
  isActive: boolean,
  dieNumber: number,
};


// COMPONENT
function App() {

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
        dieNumber: i,
      });
    };

    return {
      diceState: diceArray,
      conditionWon: false,
    };
  };

  const [ data, setData ] = useState<AppState>(initialAppState);

  // HELPERS
  /**
   * Populates the board with dices
   * @param diceArray 
   * @returns 
   */
  function populateBoard(diceArray: Array<DiceState>): Array<JSX.Element> {
    return diceArray.map((diceState, index) => {

      const { diceEyes, isActive} = diceState;

      const diceProps = {
          diceEyes: diceEyes,
          handleClick: diceClick,
          isActive: isActive,
          dieNumber: index,
      };

      return(
        <Dice {...diceProps} />
      );
    });
  };


  /**
   * Handles rolling of dice
   */
  function rollDice() {
    setData((oldData) => {
      const newRoll = oldData.diceState.map((diceState) => {
        // return if dice is locked
        if(!diceState.isActive) {return diceState};

        const roll = Math.floor(Math.random() * 6) + 1;

        return {
          ...diceState,
          diceEyes: roll
        };
      });
      
      return {
        ...oldData,
        diceState: newRoll,
      };
    });
  };


  /**
   * Handles what happens when clicking on dice
   */
  function diceClick(event: BaseSyntheticEvent, dieNumber: number): void {

    setData((oldData: AppState): AppState => {

      const newDiceState = oldData.diceState.map((die, index) => {
        if(index !== dieNumber) {return die}
        else {
          return {
            ...die,
            isActive: !die.isActive,
          };
        };
      });

      return {
        ...oldData,
        diceState: newDiceState,
      };
    });
  };

  /**
   * Resets board
   */
  function resetBoard(): void {
    setData(initialAppState);
  };

  /**
   * Checks if win condition are satisfied
   */
  useEffect(() => {
      const diceState = data.diceState;
  
      let eyes;
  
      for(const die of diceState) {
        // first iteration
        if(eyes === undefined) {eyes = die.diceEyes};
  
        // return if not same value
        if(!(eyes === die.diceEyes)) {return}
      };

      // if we get here we have won
      console.log("we won");
      resetBoard();
  }, [data.diceState])


  // Props
  const gameInfoProps = {
    title: "Tenzies",
    body: [
      "Goal is to get all dices to have the same value.",
      "You can lock in a die by clicking on it.",
    ],
  };

  const ulProps = {
    className: [
      'font-huge',
      styles['game-board']
      ].join(" "),
  };

  const buttonProps = {
    handleClick: () => rollDice(),
  };

  return (
    <main id='App' className={styles['App']} data-theme='bright'>
      <GameInfo {...gameInfoProps} />

      <ul {...ulProps}>
        {React.Children.toArray(populateBoard(data.diceState))}

      </ul>

      <Button {...buttonProps}/>
      
    </main>
  );
};

export default App;