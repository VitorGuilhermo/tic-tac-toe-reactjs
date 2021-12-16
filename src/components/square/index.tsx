import { useState } from "react";

interface SquareProps {
    pos: number;
}

export function Square( {pos} : SquareProps ) {
    const [value, setValue] = useState('');

    return (
        <button type="button" onClick={() => setValue('X')}>{value}</button>
    );
}