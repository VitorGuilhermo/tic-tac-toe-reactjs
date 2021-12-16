import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    align-itens: center;
    justify-content: center;

    margin-top: 5%;
`
export const Content = styled.div`
    width: 30rem;
    height: 30rem;
`

export const GameInfoContent = styled.div`
    width: 20rem;
    
    margin-right: 3rem;
    padding 2rem;

    border: 1px solid var(--lines);
    border-radius: 0.5rem;
    
    div {
        display: flex;

        h2 {
            font-size: 2rem;
            font-weight: 400;
            line-height: 100%;

            margin-bottom: 1.5rem;

            &:first-child {
                margin-right: 1rem;
            }
        }
    }
    
    h3 {
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 0.5rem;
    }
`