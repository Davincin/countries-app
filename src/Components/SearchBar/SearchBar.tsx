import React from 'react';
import './SearchBar.css'

interface Props {
    value: string,
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<Props> = ({value, onSearch}) => {
    
    return (
        <div className="searchbar">
        <label className="searchbar__label" htmlFor="searchbar">Wyszukaj kraj:</label>
        <input
            name="searchbar"
            className="searchbar__input"
            type="text"
            value={value}
            onChange={onSearch}
        />
        </div>
    );
}
 
export default SearchBar;