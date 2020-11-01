import React, { useState } from 'react';
// import { render } from 'react-dom'
import Product from './Product'

//render 

const SearchBar = props => {
    //div for the search input 
    const [brandInput, setBrandInput] = useState('');
    const [productInput, setProductInput] = useState('');
    const [product, setProduct] = useState({});

    // console.log(brandInput);
    // console.log(productInput)
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
                        setProductInput(e.target.value)
                }}>
                </input>
                <button onClick={(e) => {
                    e.preventDefault();
                    console.log('in Onclick');
                    // console.log(brand.value);
                    // console.log(product.value);
                    // e.target.value => value user input
                   setBrandInput('');
                   setProductInput('');
                    fetch('/api', {
                        headers: {
                            'Content-Type' : 'application/json',
                            'Accept' : 'application/json'
                        }
                    }).then(data => {
                        console.log('in the promise');
                        return data.json();
                    })
                    .then((data) => {
                        // console.log(data)
                        for(const obj of data) {
                            console.log('in the forEach function')
                            
                          if (obj.brand !== null && obj.name !== null) {
                          if (obj.brand.toLowerCase() === brandInput && obj.name.toLowerCase() === productInput) {
                            const foundProduct = {
                                brand: brandInput, 
                                name: productInput, 
                                image_link: obj.image_link,
                                description: obj.description
                            };

                            setProduct(foundProduct);
                            console.log('found product:', foundProduct);
                            break;
                            }}
                        };
                        console.log('prod state', product);
                    })
                }}>Search</button>
            </form>
            <Product product={product}/>
        </div>
    )
//{username??:value in the input}
//req.body.username
}
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