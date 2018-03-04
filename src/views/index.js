import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Home/>
    );
  }
}

export default App;
