import styled from 'styled-components';

interface ButtonProps {
    isX: boolean;
}

export const Button = styled.button<ButtonProps>`
    width: 100%;
    height: 100%;

    margin: 0.1rem;

    background: var(--background);
    color: ${(props) => props.isX ? 'var(--player-one)' : 'var(--player-two)'};

    font-weight: 800;
    font-size: 2rem;

    transition: filter 0.2s;

    &:hover {
        filter: opacity(0.95);
    }
`