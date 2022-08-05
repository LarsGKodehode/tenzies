import { MouseEventHandler } from "react";

// CSS
import styles from './button.module.css';

interface ButtonProps {
  handleClick: MouseEventHandler,
};

function Button(props: ButtonProps) {
  const { handleClick } = props;

  const buttonClasses = {
    className: [
      'font-huge',
      styles['button'],
    ].join(" ")
  }

  return(
    <button
      {...buttonClasses}
      onClick={handleClick}
    >
      Roll Dice
    </button>
  );
};

export default Button;