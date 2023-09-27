import '../../sass/main.css';
import Rental from '../../components/Rental';
import Collapse from './../../components/Collapse';
// import rentalData from '../../data/logements.json';

export default function RentalPage() {
    return (
        <div className='RentalPage__main'>
            <Rental />
            <div className="RentalPage__collapses">
                <Collapse
                // "Description"
                />
                <Collapse
                // "Équipements"
                />
            </div>
        </div>
    );
}

