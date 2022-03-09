import { useQuery, gql} from "@apollo/client";
import { useLocation } from "react-router";
import client from "../../Helpers/client";
import Country from "../../Components/Country/Country";
import LoadingIcon from "../../UI/LoadingIcon/LoadingIcon";
import ErrorLoading from "../../UI/ErrorLoading/ErrorLoading";
import HomeButton from "../../Components/HomeButton/HomeButton"
import React, { useState } from "react";
import { useEffect } from "react";


const CountryPage: React.FC = () => {
    
    const location = useLocation();
    const code: string = location.pathname.toUpperCase().slice(1);
    const [emptyData, setEmptyData] = useState<boolean>(true);

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
    
    useEffect(() => {
        (data && setEmptyData(data.countries.length === 0));
    }, [data]);
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading && <LoadingIcon/>}
                    {(!emptyData  && !error && !loading) && <Country {...data.countries[0]}/>}
                    {(error || (!loading && emptyData)) && <ErrorLoading />}
                    <HomeButton />
                </div>
            </div>
        </div>
    );
};
 
export default CountryPage;