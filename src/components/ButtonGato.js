import Button from '@mui/material/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCat} from '@fortawesome/free-solid-svg-icons'

export default function ButtonGato() {
    return (
        <>
            <div>
                <Button variant="contained" style={{ backgroundColor: '#ff9100', width:'100%' }}>
                    <div>
                        <h2>Gatos</h2>
                        <FontAwesomeIcon className="icon" icon={faCat} />
                    </div>
                </Button>
            </div>
        </>
    )
}