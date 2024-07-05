import React from 'react';
import axios from 'axios';

import './Search.module.css';

interface SearchString {
  searchStr: string;
  peoples: PeopleData[];
  hasError: boolean;
}

interface PeopleData {
  name: string;
  gender: string;
  height: string;
  mass: string;
}

class Search extends React.Component {
  constructor(props: object) {
    super(props);

    this.state = {
      searchStr: '',
      peoples: [],
      hasError: false
    } as SearchString;

    if (localStorage.search) {
      this.state = { searchStr: localStorage.search, peoples: [] };
    }
  }

  async componentDidMount() {
    const { searchStr } = this.state as SearchString;
    const response = await axios.get(`https://swapi.dev/api/people/?search=${searchStr}`);
    const peoples = response.data.results;
    this.setState({ peoples });
  }

  click = () => {
    this.setState({ peoples: null });
  };

  render() {
    const { searchStr, peoples, hasError } = this.state as SearchString;

    if (hasError) {
      return <div>Ой, произошла ошибка</div>;
    }

    const getData = async (data: string) => {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${data}`);
      const peoples = response.data.results;
      this.setState({ peoples });
    };

    return (
      <div className="wrapper">
        <button
          onClick={() => {
            this.click();
          }}>
          error
        </button>
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
                const { searchStr } = this.state as SearchString;
                localStorage.setItem('search', searchStr);
                this.setState({ searchStr });
                await getData(searchStr);
              }}>
              search
            </button>
          </div>
        </div>
        <div className="bottom-block">
          {peoples.map((people: PeopleData) => (
            <div className="card" key={people.name}>
              <p className="name">name: {people.name}</p>
              <p className="info"> gender: {people.gender}</p>
              <p className="info">height: {people.height}</p>
              <p className="info">mass: {people.mass}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
