import "./App.css";

import React, { Component } from "react";
import File from "./File";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      date: new Date(),
    };
  }
  componentDidMount() {
    this.intervall = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show
        </button>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        {this.state.show ? <File /> : null}
      </div>
    );
  }
}
