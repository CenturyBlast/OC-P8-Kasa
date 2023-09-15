import './../../styles/card.scss'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <Link to="/rentalpage" >Fiche Location
            <div className="Card-link"></div>
        </Link>
    );
}