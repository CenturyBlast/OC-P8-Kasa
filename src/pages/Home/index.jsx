import './../../styles/home.scss';
import Card from './../../components/Card'
import homeImg from './seafront.jpg'


export default function Home() {
  return (
    <div className="Home">
      <img src={homeImg} alt="front de mer" className="Home-img" />
      <p>Chez vous, partout et ailleurs</p>
      <Card />
    </div>
  );
}