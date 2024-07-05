import React from 'react';
import Search from './components/Search';
import ErrorBoundary from './components/ErrorBoundary';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
