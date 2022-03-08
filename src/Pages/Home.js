import SearchBar from "../Components/SearchBar/SearchBar";
import CountryLink from "../Components/CountryLink/CountryLink";
import { ApolloProvider, useQuery, gql} from "@apollo/client";
import { useState, useEffect } from "react";
import client from "../Helpers/client";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon";
import SelectBar from "../Components/SelectBar/SelectBar";
import ErrorLoading from "../UI/ErrorLoading/ErrorLoading";

  
const Home = () => {

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
    const [countries, setCountries] = useState();
    const [continent, setContinent] = useState();
    const [search, setSearch] = useState("")

    const handleSearchBar = e => {
        const term = e.target.value;
        setSearch(e.target.value)

        if (continent) {
                const newCountries = [...data.countries].filter(x => (x.name.toLowerCase().includes(term.toLowerCase()) && x.continent.code === continent));
                setCountries(newCountries)

        } else {
                const newCountries = [...data.countries].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
                setCountries(newCountries)
        }
        
        console.log(continent);
    }

    const changeSelectHandler = e => {
        
        if (e.value) {
            const newCountries = [...data.countries].filter(x => x.continent.code === e.value)
            setCountries(newCountries)
        } else {
            setCountries([...data.countries])
        }
        
        setContinent(e.value)
        setSearch('')
        
    }

    const fetchCountries = () => {
        if(!loading && data) {
            setCountries([...data.countries])
        }    
    } 
      
      
      useEffect(() => {
        fetchCountries()
        // setCountries(...data)
    
        
     }, [data])

    return (
        <div className="container">
            <div className="row">
                {loading && <LoadingIcon />}
                {(countries && !error)  && (
                    <>
                        <SearchBar onSearch={handleSearchBar} value={search}/>
                        <SelectBar onChange={changeSelectHandler}/>
                        {countries.map(x => <CountryLink name={x.name} code={x.code} key={x.code}/>)}
                    </>
                )}
                {error && <ErrorLoading />}
            </div>
        </div>
    );
}
 
export default Home;
