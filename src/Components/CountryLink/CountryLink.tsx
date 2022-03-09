import { Link } from "react-router-dom";
import './CountryLink.css'

interface Props {
    name: string,
    code: string
}

const CountryLink: React.FC<Props> = ({name, code}) => {
    
    return (
        <Link className="country-link" to={`/${code.toLowerCase()}`}>
            <p>Nazwa: {name}</p>
            <p>Kod: {code}</p>
        </Link>
    );
}
 
export default CountryLink;