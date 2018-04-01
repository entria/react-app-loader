import React, { Component } from 'react';
import './App.css';

import AnyExternalApp from './externals/AnyExternalApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnyExternalApp />
      </div>
    );
  }
}

export default App;
