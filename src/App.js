import "./App.css";

import React, { Component } from "react";
import File from "./File";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show
        </button>
        {this.state.show ? <File /> : null}
      </div>
    );
  }
}
