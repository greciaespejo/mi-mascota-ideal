import Button from '@mui/material/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

export default function ButtonPerro() {

    const history = useHistory();

    const handleRoute = () => {
        history.push("/ListaDePerros");
    }

    return (
        <>
            <div>
                <Button onClick={handleRoute} variant="contained" style={{ backgroundColor: '#4caf50', width: '100%' }}>
                    <div>
                        <h2>Perros</h2>
                        <FontAwesomeIcon className="icon" icon={faDog} />
                    </div>
                </Button>
            </div>
        </>
    )
}