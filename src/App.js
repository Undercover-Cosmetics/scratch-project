import './App.css';
import React, { useState } from 'react';
// import Product from './components/Product'
import SearchBar from './components/SearchBar';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       // product = {
//       // },
//       // review = {
//       // },
//       // input = { 
//       // }
//       //brandInput
//       //productInput
//       //usernameInput
//       //reviewInput
//     };
//   }
//   render(){
//     return (
//       <div className="wrapper">
//         <SearchBar />
//         <Product />
//       </div>
//     );
//   }
// }
const App = props => {
  // const [product, setProduct] = useState({});
  // console.log(product);
  return (
      <div className="wrapper">
        <SearchBar />
        {/* <SearchBar product={product} setProduct={changeProduct}/> */}
        {/* <Product product={product}/> */}
      </div>
  )
}

export default App;
