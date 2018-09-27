import React, { Component } from "react";
import "./header.css";
import { Container, Row, Col, } from "mdbreact";

export default class Header extends Component {
  render() {
    return (
        <header className="App-header">
        &copy; {(new Date().getFullYear())} Copyright: <a id='cpr' href="https://github.com/DillonWard/Retailator" target="_blank"> Retailator - Dillon Ward </a>
        </header>
    );
  }
}
