// CSS
import styles from './game-info.module.css';

interface InfoProp {
  title: string,
  body: string
};

function GameInfo(props: InfoProp): JSX.Element {
  const { title, body } = props;

  const titleClasses = {
    className: [
      styles[title],
    ].join(" ")
  };

  const bodyClasses = {
    className: [
      styles[body],
    ].join(" ")
  };

  return(
    <div className={styles['container']}>
      <h1 {...titleClasses}>{title}</h1>
      <p {...bodyClasses}>{body}</p>
    </div>
  );
};

export default GameInfo;