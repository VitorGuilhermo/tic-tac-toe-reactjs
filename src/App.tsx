import React from 'react';

import { Game } from './components/game/index';

import { GlobalStyle } from './assets/styles/global';


export function App() {
  return (
    <div>
        <Game />
        <GlobalStyle />
    </div>
  );
}