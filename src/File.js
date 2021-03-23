import React, { Component } from "react";
import logo from "./Capture6.PNG";

export default class File extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "TOUIL Abdelhak",
        profession: "Web Developer",
        bio: "I'm a web developer",
        imgSrc: logo,
      },
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.person.fullName}</h1>
        <img src={this.state.person.imgSrc} alt="Pic" />
        <h2>{this.state.person.profession}</h2>
        <h3>{this.state.person.bio}</h3>
      </div>
    );
  }
}
