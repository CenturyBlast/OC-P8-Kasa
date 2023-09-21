import '../../sass/main.css'

export default function Rental(props) {
    const title = props.title;
    const location = props.location;
    const tags = props.tags;
    return (
        <div className="Rental-article">
            <div className='Carousel'>
                <img src='./../../../public/logements.json/{cover}' alt='intérieur' className='Carousel-img' />
            </div>
            <h1 className='Title'>{title}</h1>
            <h2 className='Location'>{location}</h2>
            <div className='Host'>
                <p className='Host-name'></p>
                <img src='./../../../public/logements.json/{picture}' alt='propriétaire' className='Host-picture' />
            </div>
            <p className='Tags'>{tags}</p>
            <span className='Rating'></span>
        </div>
    );
}