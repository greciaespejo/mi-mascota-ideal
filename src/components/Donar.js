import { useState } from "react"
import { Button } from "@mui/material";

export default function Donar() {
    const [monto, setMonto] = useState(0)
    const [total, setTotal] = useState(0)
    
    //obtengo el valor del input
    const handleMontoInput = (e) => {
        setMonto(+e.target.value);
    };

    //el total es incremental
    const calcularTotal = () => {
        setTotal(total + monto)
        alert("Donaste " + monto + "$");
        resetMontoInput();
    }

    //reseteo el valor del input a 0
    const resetMontoInput = () => {
        setMonto("");
      };

    return (
        <div>
            <input type="number" id="monto" value={monto} placeholder="ingrese un monto" onChange={handleMontoInput} />
            <Button onClick={calcularTotal} variant="contained" color="primary">Donar</Button>
            <br/>
            <br/>
            <span>Recaudación de donaciones {total}$</span>
        </div>
    )
}