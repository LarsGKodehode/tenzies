// CSS
import styles from './game-info.module.css'

interface InfoProp {
  title: string,
  body: string
};

function GameInfo(props: InfoProp): JSX.Element {
  const { title, body } = props;

  return(
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};