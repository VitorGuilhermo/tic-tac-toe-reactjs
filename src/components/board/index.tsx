import { useState } from 'react';
import { Square } from '../square/index';

import { Container, Content } from './styles';

export function Board() {
    const [squares, setSquares] =  useState(Array(9).fill(null));

    function renderSquare(index : number) {
        return <Square pos={squares[index]} />
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