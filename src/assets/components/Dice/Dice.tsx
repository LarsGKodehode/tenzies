import { MouseEventHandler, useState } from "react";

// CSS
import styles from './dice.module.css'

interface DiceProps {
  eyes: number,
  handleClick: MouseEventHandler,
};

function Dice(props: DiceProps): JSX.Element {
  const { eyes, handleClick } = props;
  
  const [ active, setActive ] = useState<boolean>(true);

  

  return(
    <div
      className={[
        active ? "acitve" : "inactive",
        styles['dice']
      ].join(" ")}
      onClick={handleClick}
    >
      {eyes}
    </div>
  );
};


export default Dice;