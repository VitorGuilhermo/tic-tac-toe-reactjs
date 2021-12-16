import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background: var(--lines);
    border: 2px solid white;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    div{
        width: 100%;
        height: 33.34%;

        display: flex;
        align-itens: center;
        justify-content: space-between;

        button {
            width: 100%;

            margin: 0.1rem;

            background: var(--background);
            color: var(--text);

            transition: filter 0.2s;

            &:hover {
                filter: opacity(0.95);
            }
        }
    }
    

`