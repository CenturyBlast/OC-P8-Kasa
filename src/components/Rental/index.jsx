import '../../sass/main.css';
import Carousel from '../../components/Carousel';
// import carouselData from '../../data/logements.json';

export default function Rental() {
    // const title = props.title;
    // const location = props.location;
    // const tags = props.tags;
    return (
        <div className="Rental">
            {/* {carouselData.map((item) => ( */}
                <Carousel />
            <div className="Rental__container">
                <div className="Rental__infos">
                    <h1 className='Rental__infos-title'>title</h1>
                    <h2 className='Rental__infos-location'>location</h2>
                    <p className='Rental__infos-tags'>tags</p>
                </div>
                <div className='Rental__host'>
                    <p className='Rental__host-name'>host name</p>
                    <img src='./../../../public/logements.json/{picture}' alt='propriétaire' className='Rental__host-picture' />
                    <span className='Rental__host-rating'>stars</span>
                </div>
            </div>
        </div>
    );
}