import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background: var(--lines);
    border: 2px solid white;
    border-radius: 0.5rem;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    div{
        width: 100%;
        height: 33%;

        margin-bottom: 0.1rem;

        display: flex;
        align-itens: center;
        justify-content: space-between;
    }
`