import SearchBar from "../../Components/SearchBar/SearchBar";
import CountryLink from "../../Components/CountryLink/CountryLink";
import { useQuery, gql} from "@apollo/client";
import React, { useState, useEffect } from "react";
import client from "../../Helpers/client";
import LoadingIcon from "../../UI/LoadingIcon/LoadingIcon";
import SelectBar from "../../Components/SelectBar/SelectBar";
import ErrorLoading from "../../UI/ErrorLoading/ErrorLoading";

interface countryType {
    name: string,
    code: string,
}
  
const Home: React.FC = () => {

    const LIST_COUNTRIES = gql`{
        countries {
          name
          code
          continent {
              code
          }
        }
      }
      `;

    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
    const [countries, setCountries] = useState<any | null>(null);
    const [continent, setContinent] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    const handleSearchBar = (e: any) => {
        
        const term: string = e.target.value;
        setSearch(e.target.value);

        if (continent) {
                const newCountries = [...data.countries].filter(x => (x.name.toLowerCase().includes(term.toLowerCase()) && x.continent.code === continent));
                setCountries(newCountries);

        } else {
                const newCountries = [...data.countries].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
                setCountries(newCountries);
        };
    };

    const changeSelectHandler = (e: any) => {
        
        if (e.value) {
            const newCountries = [...data.countries].filter(x => x.continent.code === e.value)
            setCountries(newCountries);
        } else {
            setCountries([...data.countries]);
        };
        
        setContinent(e.value);
        setSearch('');
    };

    const fetchCountries = () => {
        if(!loading && data) {
            setCountries([...data.countries]);
        }    
    }; 
      
      useEffect(() => {
        fetchCountries();
     }, [data])

    return (
        <div className="container">
            <div className="row">
                {loading && <LoadingIcon />}
                {(countries && !error)  && (
                    <>
                        <SearchBar onSearch={handleSearchBar} value={search}/>
                        <SelectBar onChange={changeSelectHandler}/>
                        {countries.map((x: countryType) => <CountryLink name={x.name} code={x.code} key={x.code}/>)}
                    </>
                )}
                {error && <ErrorLoading />}
            </div>
        </div>
    );
};
 
export default Home;
