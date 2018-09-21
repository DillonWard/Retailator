import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeCards from '../Components/HomeCards/homeCards';

export default class Routes extends Component{
    render() {
        return (
            <BrowserRouter>
              <Route path= "/home" component = {HomeCards}/>
            </BrowserRouter>
    
        );
      }
    
}