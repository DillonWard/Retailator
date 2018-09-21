import React, { Component } from "react";
import "./header.css";
import { Container, Row, Col, Button } from "mdbreact";

export default class Header extends Component {
  render() {
    return (
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark elegant-color">
      
      <div class="container">
     
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
       aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>
     
       <div class="collapse navbar-collapse justify-content-center font-weight-bold" id="basicExampleNav">
     
         <ul class="navbar-nav">
          <li class="nav-item">
           <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#">Features</a>
          </li>
     
         </ul>
     
         <a class="navbar-brand px-lg-4 mr-0" href="#">
         <i id='header-icon' className="fa fa-4x  fa-home"></i>
          <h1 className="App-title">Welcome to Retailator</h1>
         </a>
     
         <ul class="navbar-nav">
          <li class="nav-item">
           <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#">Testimonials</a>
          </li>
         </ul>
     
        </div>
        </div>
     </nav>
     </div>
    );
  }
}
