import { useState } from 'react';
import { Square } from '../square/index';

import { Container, Content } from './styles';

interface BoardProps {
    setNextPlayer: (value: string) => void;
}

export function Board({setNextPlayer}: BoardProps) {
    const [squares, setSquares] =  useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(index: number) {
        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
        setNextPlayer(!xIsNext ? 'X' : 'O');
    }

    function renderSquare(index: number) {
        return (
            <Square value={squares[index]} onClick={() => handleClick(index)} />
        );
    }

    return (
        <Container>
            <Content>
                <div>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </Content>
        </Container>
    );
}