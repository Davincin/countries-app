import './SearchBar.css'

const SearchBar = props => {
    
    return (
        <div className="searchbar">
        <label className="searchbar__label" htmlFor="searchbar">Wyszukaj kraj:</label>
        <input
            name="searchbar"
            className="searchbar__input"
            type="text"
            value={props.value}
            onChange={e => props.onSearch(e)}
        />
        </div>
    );
}
 
export default SearchBar;