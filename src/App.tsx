import { useState, useEffect } from 'react';
import Search from './components/Search';
import Render from './components/Render';
import axios from 'axios';
import ErrorBoundary from './components/ErrorBoundary';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  async function getData(search: string) {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${search}`);
    const results = response.data.results;
    setData(results);
  }

  useEffect(() => {
    const search = localStorage.search ? localStorage.search : '';
    getData(search);
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <div className="top-block">
          <Search getData={getData} />
        </div>
        <div className="bottom-block">
          <Render data={data} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
