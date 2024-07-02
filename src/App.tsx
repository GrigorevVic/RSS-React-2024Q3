import React from "react";
import Search from "./components/Search.jsx";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="top-block">
          <Search/>
        </div>
        <div className="bottom-block">нижний блок</div>
      </div>
    );
  }
}

export default App;
