import '../../sass/main.css'
import arrowLeft from '../../data/arrow_left.png'
import arrowRight from '../../data/arrow_right.png'

export default function Carousel(props) {
    // const img = props.pictures;

    return (
        <div className='Carousel'>
            <img src='{img}' alt='intérieur' className='Carousel__img' />
            <img src={arrowLeft} alt="flèche gauche" className="Carousel__arrow-left" id="arrowL" />
            <img src={arrowRight} alt="flèche droite" className="Carousel__arrow-right" id="arrowR" />
        </div>
    );
}