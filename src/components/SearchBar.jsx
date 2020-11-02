import React, { useState } from 'react';
import Product from './Product'

const SearchBar = props => {
    //create state for inputs and storage for fetched data
    const [brandInput, setBrandInput] = useState('');
    const [productInput, setProductInput] = useState('');
    const [product, setProduct] = useState({});

    //from the fetched api, travese/find/return the matching product
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
              }
            }
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
                {/* set the values of inputs to corresponding state props when there is any input changes */}
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
                  //prevent the click to invoke any reloading
                  e.preventDefault();
                  //reset the values of inputs to empty string
                  setBrandInput('');
                  setProductInput('');
                  //get the data and save it in the product state
                  fetchAndSaveProduct();
                }}>Search</button>
            </form>
            {/* conditional rendering: only render the product component when user makes a successful search */}
            {Object.keys(product).length !== 0 && <Product product={product}/>}
        </div>
    )
}

export default SearchBar