import React from 'react';

import { Game } from './components/game/index';

import { GlobalStyle } from './assets/styles/global';
import { Logo } from './assets/styles/styles';
import { FaGamepad } from 'react-icons/fa';


export function App() {
  return (
    <div>
        <Logo>
          <h1><FaGamepad/> </h1>
          <h1>Tic-Tac-Toe</h1>
        </Logo>
        <Game />
        <GlobalStyle />
    </div>
  );
}