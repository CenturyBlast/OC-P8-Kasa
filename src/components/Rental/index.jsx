import '../../sass/main.css';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse'
import rentalData from '../../data/logements.json';
import starRed from '../../data/starRed.png';
import starGrey from '../../data/starGrey.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Rental() {

    const idRental = useParams('id').id;

    const [imgCarousel, setImgCarousel] = useState([]);
    const dataRental = rentalData.filter(data => data.id === idRental);

    useEffect(() => {
        const dataRental = rentalData.filter(data => data.id === idRental);
        setImgCarousel(dataRental[0].pictures);
    }, [idRental]);

    return (
        <div className="Rental">
            <Carousel imgCarousel={imgCarousel} />
            <div className="Rental__container">
                <div className="Rental__infos">
                    <h1 className='Rental__infos_title'>{dataRental[0].title}</h1>
                    <h2 className='Rental__infos_location'>{dataRental[0].location}</h2>
                    <ul className='Rental__infos_tagbox'>
                        {dataRental[0].tags.map((tag, index) => (
                            <li key={index} className='Rental__infos_tagbox_tags'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='Rental__host'>
                    <div className='Rental__host_id'>
                        <div className='Rental__host_name'>
                            <p>{dataRental[0].host.name.split(' ')[0]}</p>
                            <p>{dataRental[0].host.name.split(' ')[1]}</p>
                        </div>
                        <img src={dataRental[0].host.picture} alt='propriétaire du lieu' className='Rental__host_picture' />
                    </div>
                    <div className='Rental__host_rating'>
                        {/* Création d'un tableau avec la syntaxe de décomposition */}
                        {[...Array(5)].map((star, index) => {
                            const ratingScore = index + 1;
                            return (
                                <img key={index} src={ratingScore <= dataRental[0].rating ? starRed : starGrey} alt="étoile" />
                            )
                        })}
                    </div>
                </div>

            </div>
            <div className="Rental__collapses">
                <Collapse title={'Description'} className='Rental__collapses_item' content={dataRental[0].description} />
                <Collapse title={'Équipements'} className='Rental__collapses_item' content={dataRental[0].equipments.map((equipement, index) => (
                    <div key={index} className='Rental__collapses_equipements'>{equipement}</div>
                ))} />
            </div>
        </div>
    );
}