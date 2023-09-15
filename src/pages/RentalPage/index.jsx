import './../../styles/rentalpage.scss';
import Rental from '../../components/Rental';
import Collapse from './../../components/Collapse';

export default function RentalPage() {
    return (
        <div className='RentalPage-container'>
            <Rental />
            <Collapse
            // "Description"
            />
            <Collapse
            // "Équipements"
            />
        </div>
    );
}

