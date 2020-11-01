import React, { useState, useEffect } from 'react';
import Product from './Product'

const SearchBar = props => {
    //create state for inputs and storage for fetched data
    const [brandInput, setBrandInput] = useState('');
    const [productInput, setProductInput] = useState('');
    const [product, setProduct] = useState({});

    const traverseAndFindMatchProduct = data => {
        for(const obj of data) {
            if (obj.brand !== null && obj.name !== null) {
            if (obj.brand.toLowerCase() === brandInput.toLowerCase() && obj.name.toLowerCase() === productInput.toLowerCase()) {
              const foundProduct = {
                  id: obj.id,
                  brand: obj.brand, 
                  name: obj.name, 
                  image_link: obj.image_link,
                  description: obj.description
              };
              setProduct(foundProduct);
              break;
              }}
          };
    }

    //function to fetch from api and save it in product state
    const fetchAndSaveProduct = () => {
        //fetch from api
        fetch('/api', {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }).then(data => {
            return data.json();
        })
        .then((data) => {
            traverseAndFindMatchProduct(data);
        });
    };

    return (
        <div id="searchInput">
            <form>
                <input 
                    type='text' 
                    name='brand' 
                    value={brandInput} 
                    placeholder='Brand' 
                    onChange={(e) => {
                        setBrandInput(e.target.value);
                }}></input>
                <input 
                    type='text' 
                    name='product' 
                    placeholder='Name of the product'
                    value={productInput}
                    onChange={(e) => {
                        setProductInput(e.target.value);
                }}>
                </input>
                <button onClick={(e) => {
                  e.preventDefault();
                  setBrandInput('');
                  setProductInput('');
                  fetchAndSaveProduct();
                }}>Search</button>
            </form>
            <Product product={product}/>
        </div>
    )
}
//{username??:value in the input}
//req.body.username
//onClick={
    //fetch(url)
    //.then(data.json -> components)
    //backend -> frontend

    //fetch data from json file
    //return data(image source url...) - shaped in server
    //stored in state
    //pass down the state into product
    //set attribute to render
//}

export default SearchBar