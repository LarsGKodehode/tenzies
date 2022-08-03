import { useState } from "react";

interface DiceProps {
  eyes: number,
};

function Dice(props: DiceProps): JSX.Element {
  const { eyes } = props;
  return(
    <div>
      {eyes}
    </div>
  );
};


export default Dice;