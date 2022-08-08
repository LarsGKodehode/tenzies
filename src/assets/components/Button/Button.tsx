import { MouseEventHandler } from "react";

// CSS
import styles from './button.module.css';

interface ButtonProps {
  text: string,
  handleClick: MouseEventHandler,
};

function Button(props: ButtonProps) {
  const { text, handleClick } = props;

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
      {text}
    </button>
  );
};

export default Button;