import { MouseEventHandler } from "react";

interface ButtonProps {
  handleClick: MouseEventHandler,
};

function Button(props: ButtonProps) {
  return(
    <button
      onClick={props.handleClick}
    >
      Roll Dice
    </button>
  );
};

export default Button;