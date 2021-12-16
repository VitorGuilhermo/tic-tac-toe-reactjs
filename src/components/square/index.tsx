interface SquareProps {
    value: string;
    onClick: () => void;
}

export function Square( {value, onClick} : SquareProps ) {
    return (
        <button type="button" onClick={() => onClick()} >{value}</button>
    );
}