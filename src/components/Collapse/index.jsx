import '../../sass/main.css';
import collArrow from '../../data/arrow_collapse.png';
import { useState } from 'react';

export default function Collapse({ title, content }) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="Collapse" >
                <h3 className='Collapse__title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img
                        className={toggle ? 'Arrow Arrow__up' : 'Arrow Arrow__down'}
                        src={collArrow}
                        alt="contenu visible"
                    />
                </h3>
                <div className={toggle ? 'Collapse__content' : 'Collapse__content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (<p key={index}>{item}</p>)
                    }) : content}
                </div>
            </div>
        </>
    );
}