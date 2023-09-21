import '../../sass/main.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className="Error-container">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className="Back-home">Retourner sur la page d'accueil</Link>
        </div>
    );
}