import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/header';
import FooterPage from './Components/Footer/footer';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Header></Header>
        <FooterPage></FooterPage>
      
      </React.Fragment>


    );
  }
}

export default App;
