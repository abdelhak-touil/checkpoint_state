import React, { Component } from "react";
import logo from "../src/Capture6.PNG";

export default class File extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "TOUIL Abdelhak",
      profession: "Web Developer",
      bio: "I'm a web developer",
      imgSrc: { logo },
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.fullName}</h1>
        {this.state.imgSrc}
        <h2>{this.state.profession}</h2>
        <h3>{this.state.bio}</h3>
      </div>
    );
  }
}
