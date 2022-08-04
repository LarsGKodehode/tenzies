import { MouseEventHandler, useState } from "react";

interface DiceProps {
  eyes: number,
  handleClick: MouseEventHandler,
};

function Dice(props: DiceProps): JSX.Element {
  const { eyes, handleClick } = props;
  
  const [ active, setActive ] = useState<boolean>(true)

  return(
    <div
      className={active ? "acitve" : "inactive"}
      onClick={handleClick}
    >
      {eyes}
    </div>
  );
};


export default Dice;