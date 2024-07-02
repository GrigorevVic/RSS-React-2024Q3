import React from "react";
import axios from "axios";

import "./Search.module.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
    if (localStorage.search) {
      this.state.item = localStorage.search;
    }
  }

  render() {
    const { item } = this.state;
    const getData = async (data) => {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${data}`
      );
      return response.data.results;
    };

    return (
      <div className="search">
        <input
          placeholder={item}
          type="text"
          value={item}
          onChange={(e) => {
            this.setState({ item: e.target.value });
          }}
        />
        <button
          onClick={async () => {
            localStorage.setItem("search", this.state.item);
            const data = await getData(this.state.item);
            console.log(data);
            //  this.setState({ item: data[9].name });
          }}
        >
          button
        </button>
      </div>
    );
  }
}

export default Search;
