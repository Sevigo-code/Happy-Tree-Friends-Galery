import './styles/search.css';
import searchIcon from '../assets/buscar.png'

function SearchBar({ setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <img src={searchIcon} alt="Icon" />
      <input
        type="text"
        placeholder="Search character..."
        onChange={handleSearch} 
        
      />

    </div>
  );
}

export default SearchBar;
