import ButtonPerro from './ButtonPerro'
import ButtonGato from './ButtonGato';
import Grid from '@mui/material/Grid'

export default function Mascotas() {

    // const mascotas = [
    //     { tipo: 'perro', icon: faDog },
    //     { tipo: 'gato', icon: faCat }
    // ];

    return (
        <div>
            <h2 style={{ textTransform: 'uppercase' }}>Elegí tu tipo de mascota</h2>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <ButtonPerro/>
                </Grid>
                <Grid item xs={6}>
                    <ButtonGato/>
                </Grid>
            </Grid>
        </div>
    )
}
