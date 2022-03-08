import { ApolloProvider, useQuery, gql} from "@apollo/client";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import client from "../Helpers/client";
import Country from "../Components/Country/Country";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon";
import ErrorLoading from "../UI/ErrorLoading/ErrorLoading";
import HomeButton from "../Components/HomeButton/HomeButton"

const CountryPage = props => {
    
    const location = useLocation();
    const code = location.pathname.toUpperCase().slice(1,3);

    const COUNTRY = gql`{
        countries (filter: {code: {eq: "${code}"}}) {
          name
          code
          emoji
          languages {
              name
          }
        }
      }
      `;

      const {data, loading, error} = useQuery(COUNTRY, {client});
    
    const [country, setCountry] = useState()

    const fetchCountry =  () => {
        
        if(data && !loading) {
            const newCountry =  [...data.countries];
            console.log(newCountry[0]);
            setCountry(newCountry[0])
        }
    }

    useEffect(() => {
        
        fetchCountry();

    }, [data])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading && <LoadingIcon/>}
                    {(country && !error) && <Country {...country}/>}
                    {error && <ErrorLoading />}
                    <HomeButton />
                </div>
            </div>
        </div>
    );
}
 
export default CountryPage;