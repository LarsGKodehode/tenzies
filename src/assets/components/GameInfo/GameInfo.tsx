import React from 'react';
// CSS
import styles from './game-info.module.css';

interface InfoProp {
  title: string,
  body: Array<string>
};

function GameInfo(props: InfoProp): JSX.Element {
  const { title, body } = props;

  function extractLines(): Array<JSX.Element> {
    return body.map(line => (<p>{line}</p>));
  };

  return(
    <header className={styles['container']}>
      <h1>{title}</h1>
      {React.Children.toArray(extractLines())}
      <hr></hr>
    </header>
  );
};

export default GameInfo;