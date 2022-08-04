import { MouseEventHandler, useState } from "react";

// CSS
import styles from './dice.module.css'

interface DiceProps {
  eyes: number,
  handleClick: MouseEventHandler,
  isActive: boolean,
};

function Dice(props: DiceProps): JSX.Element {
  const { eyes, handleClick, isActive } = props;  

  return(
    <div
      className={[
        isActive ? "acitve" : "inactive",
        styles['dice']
      ].join(" ")}
      onClick={handleClick}
    >
      {eyes}
    </div>
  );
};


export default Dice;