import React, { Component, Fragment } from "react";
import "./App.css";

import Number from "./components/Number";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Number />
        <Counter />
      </Fragment>
    );
  }
}

export default App;
