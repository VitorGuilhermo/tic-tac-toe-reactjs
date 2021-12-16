import { useEffect, useState } from 'react';
import { Square } from '../square/index';

import { Container, Content } from './styles';

interface BoardProps {
    setNextPlayer: (value: string) => void;
    setWinner: (winner: string | null) => void;
}

export function Board({ setNextPlayer, setWinner }: BoardProps) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function calculateWinner(squares: Array<string>) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    useEffect(() => {
        setWinner(calculateWinner(squares));
    }, [squares])

    function handleClick(index: number) {
        const newSquares = squares.slice();
        if (calculateWinner(newSquares) || squares[index]) {
            return;
        }
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