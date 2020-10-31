import './App.css';
import React, { Component } from 'react';
import Product from './components/Product'
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render(){
    return (
      <div className="wrapper">
        <SearchBar />
        <Product />
      </div>
    );
  }
}

export default App;
