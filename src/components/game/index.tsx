import { useState } from 'react';
import { Board } from '../board/index'

import { Container, Content, GameInfoContent } from './styles';
import { FaPoll } from 'react-icons/fa';

export function Game() {
    const [nextPlayer, setNextPlayer] = useState('X');
    const [winner, setWinner] = useState('');

    function handleSetNextPlayer(value: string) {
        setNextPlayer(value);
    }

    function handleSetWinner(winner: string | null) {
        if(winner !== null)
            setWinner(winner);
    }

    return (
        <Container>
            <GameInfoContent>
                <div>
                    <h2><FaPoll/> </h2>
                    <h2>Game Info</h2>
                </div>
                <h3>Next player: {nextPlayer}</h3>
                <h3>{winner !== null ? ('Winner: '+winner) : ''}</h3>
            </GameInfoContent>

            <Content>
                <Board 
                    setNextPlayer={(nextPlayer) => handleSetNextPlayer(nextPlayer)} 
                    setWinner= {(winner) => handleSetWinner(winner)} />
            </Content>
        </Container>
    );
}