import './HomeButton.css'
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <Link to="/" className="home-button">Powrót do strony głównej</Link>
    );
}
 
export default HomeButton;