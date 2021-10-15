import { useEffect, useState } from "react"
import { Button } from "@mui/material";

export default function ListaDePerros() {

    const [perro, setPerro] = useState([]);

    useEffect(() => {
        obtenerListaDePerros()
    }, [])

    const obtenerListaDePerros = async () => {
        const data = await fetch('https://61663ff813aa1d00170a643a.mockapi.io/api/PerrosData/dogs')
        const perro = await data.json()
        setPerro(perro)
    }

    return (
        <div>
            <h3>LISTA DE PERROS EN ADOPCIÓN</h3>
            <div>
                {
                    perro.map(item => (
                        <div style={{width: '30%', textAlign:'center', display:'inline-block'}}>
                        <ul key={item.id}>
                            <li>
                                {item.nombre}
                            </li>
                            <li>
                                <img src={item.foto} style={{ width:'80%' }} />
                            </li>
                            <li>
                                {item.edad}
                            </li>
                            <li>
                                Tamaño: {item.estatura}
                            </li>
                            <li>
                                {item.ubicacion}
                            </li>
                            <br/>
                            <Button variant="contained">Enviar solicitud de adopción</Button>
                        </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}