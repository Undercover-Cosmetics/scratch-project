import './App.css';
import React from 'react'
import SearchBar from './components/SearchBar'

function App() {

  // fetch('https://makeup-api.herokuapp.com/api/v1/products.json/')
  //   .then(data => data.json()).then(data => {
  //     console.log(data)
  //   })

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <SearchBar />
    </div>
  );
}

export default App;
