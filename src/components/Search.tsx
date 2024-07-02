import React from 'react';
import axios from 'axios';

import './Search.module.css';

interface searchString {
  searchStr: string;
}
12;
class Search extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      searchStr: ''
    } as searchString;

    if (localStorage.search) {
      this.state = { searchStr: localStorage.search };
    }
  }

  render() {
    const { searchStr } = this.state as searchString;

    const getData = async (data: string) => {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${data}`);
      return response.data.results;
    };

    if (searchStr === '') {
      const f = async () => {
        const data = await getData('');
        return data;
      };

      console.log(f(), '***');
    }

    return (
      <div className="wrapper">
        <div className="top-block">
          <div className="search">
            <input
              placeholder={searchStr}
              type="text"
              value={searchStr}
              onChange={(e) => {
                this.setState({ searchStr: e.target.value });
              }}
            />
            <button
              onClick={async () => {
                const { searchStr } = this.state as searchString;
                localStorage.setItem('search', searchStr);
                const data = await getData(searchStr);
                console.log(data);
              }}>
              search
            </button>
          </div>
        </div>
        <div className="bottom-block"></div>
      </div>
    );
  }
}

export default Search;
