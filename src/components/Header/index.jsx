import './../../styles/header.scss'
import { Link } from 'react-router-dom'
import logoHeader from './kasalogo.png'

export default function Header() {
    return (
            <header className="Header">
                <div className="Header-content">
                    <img src={logoHeader} alt="logo kasa" />
                    <nav className='Header-nav'>
                        <Link to="/" className="Home-link">Accueil</Link>
                        <Link to="/about" className="About">A propos</Link>
                    </nav>
                </div>
            </header>
    );
}