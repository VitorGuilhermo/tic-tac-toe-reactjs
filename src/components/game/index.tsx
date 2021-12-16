import { Board } from '../board/index'

import { Container, Content } from './styles';

export function Game() {
    return (
        <Container>
            <div>
                <h1>Game Info</h1>
            </div>

            <Content>
                <Board />
            </Content>
        </Container>
    );
}