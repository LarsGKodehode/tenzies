/**
 * DEVELOPMENT
 * clears console of error messages between hotswaps
 * @link https://github.com/vitejs/vite/discussions/3143
 */ 
 if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}
// DEVELOPMENT

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// CSS
import './assets/css/global.css';
import './assets/css/palettes.css';
import './assets/css/typography.css';
import './main.css';

// App Options
const appProps = {
  gameOptions: {
    numberOfDice: 10,
  },

  /**
   * Options for the confetti component
   * some of these might be better to move to calling point
   */
  confettiOptions: {
    spread: 180,
    startVelocity: 60,
    scalar: 2,
    origin: {y: .85},
    gravity: .5,
    useWorker: true,
  },
}



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App {...appProps}/>
  </React.StrictMode>
);
