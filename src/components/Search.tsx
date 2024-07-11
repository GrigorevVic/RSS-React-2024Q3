import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Search({ getData }) {
  const [search, setSearch] = useState('');

  function handleSearch(e: { preventDefault: () => void }) {
    e.preventDefault();
    localStorage.setItem('search', search);
    setSearch(search);
    getData(search);
  }

  return (
    <div className="search">
      <input
        placeholder={localStorage.search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
}

export default Search;
