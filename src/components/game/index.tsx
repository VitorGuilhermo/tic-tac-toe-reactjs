import { useState } from 'react';
import { Board } from '../board/index'

import { Container, Content } from './styles';

export function Game() {
    const [nextPlayer, setNextPlayer] = useState('X');

    function handleSetNextPlayer(value: string) {
        setNextPlayer(value);
    }

    return (
        <Container>
            <div>
                <h1>Game Info</h1>
                <h2>Next player: {nextPlayer}</h2>
            </div>

            <Content>
                <Board setNextPlayer={(nextPlayer) => handleSetNextPlayer(nextPlayer)} />
            </Content>
        </Container>
    );
}