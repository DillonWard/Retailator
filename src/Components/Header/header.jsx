import React, { Component } from "react";
import "./header.css";
import { Container, Row, Col, } from "mdbreact";

export default class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Contact: Help@retailator.com</p>
        </header>
      </div>
    );
  }
}
