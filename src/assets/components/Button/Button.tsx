import { MouseEventHandler } from "react";

interface ButtonProps {
  handleClick: MouseEventHandler,
};

function Button(props: ButtonProps) {
  const { handleClick } = props;

  return(
    <button
      onClick={handleClick}
    >
      Roll Dice
    </button>
  );
};

export default Button;