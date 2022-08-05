import { MouseEventHandler, useState } from "react";

// CSS
import styles from './dice.module.css'

interface DiceProps {
  diceEyes: number,
  handleClick: CallableFunction,
  isActive: boolean,
  dieNumber: number,
};

function Dice(props: DiceProps): JSX.Element {

  const { diceEyes, handleClick, isActive, dieNumber } = props;  

  return(
    <div
      className={[
        isActive ? "acitve" : "inactive",
        styles['dice']
      ].join(" ")}
      onClick={(e) => handleClick(e, dieNumber)}
    >
      {diceEyes}
    </div>
  );
};


export default Dice;