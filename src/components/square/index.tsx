import { Button } from "./styles";

interface SquareProps {
    value: string;
    onClick: () => void;
}

export function Square( {value, onClick} : SquareProps ) {
    return (
        <Button isX={value==='X'} type="button" onClick={() => onClick()}>
            {value}
        </Button>
    );
}