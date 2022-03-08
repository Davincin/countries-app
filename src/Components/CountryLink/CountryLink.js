import { Link } from "react-router-dom";
import './CountryLink.css'

const CountryLink = props => {
    
    const {code, name} = props;
    
    return (
        <Link className="country-link" to={`/${code.toLowerCase()}`}>
            <p>Nazwa: {name}</p>
            <p>Kod: {code}</p>
        </Link>
    );
}
 
export default CountryLink;