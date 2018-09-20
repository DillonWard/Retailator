import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <i id='header-icon' className="fa fa-5x  fa-home"></i>
          <h1 className="App-title">Welcome to Retailator</h1>
        </header>
      </div>
    );
  }
}
