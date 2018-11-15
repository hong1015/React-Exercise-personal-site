import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';
//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Portfolio from './components/pages/portfolio';
//include
import './assets/css/default.min.css';

import image1 from './assets/images/apiaryTemp.jpg';



class App extends Component {
  render() {
      return (
          <Router>
      <div className="App">
        <Header /> 
   
            <Route exact path='' component={Homepage}/>
                <Route exact path='/portfolio' component={Portfolio}/>

        <Footer />
      </div>
          </Router>
    );
  }
}

export default App;
