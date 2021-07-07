import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import RentCage from './components/Rent-cage';
import Addcard from './components/AddCart';
import { useState } from 'react';
import Payment from './components/Payment';
import React from 'react';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      Data:{}
    }
  }
  receiveData=(value)=>
  {
    this.setState(
      {
        Data:value
      }
    )
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rentcage" component={RentCage} 
            data={this.receiveData}/>
            <Route exact path="/add-cart" component={Addcard} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App
