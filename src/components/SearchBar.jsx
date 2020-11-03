import React, { useState } from 'react';
import Product from './Product'

const SearchBar = props => {
    //create state for inputs and storage for fetched data
    const [brandInput, setBrandInput] = useState('');
    const [productInput, setProductInput] = useState('');
    const [product, setProduct] = useState({});

    //from the fetched api, travese/find/return the matching product
    const traverseAndFindMatchProduct = data => {
        for (const obj of data) {
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
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(data => {
            return data.json();
        })
            .then((data) => {
                traverseAndFindMatchProduct(data);
            });
    };

    return (
        <div id="searchInput" className="searchbar">
            <h1 className="headername">Undercover Cosmetics</h1>
            <form className="searchform">
                {/* set the values of inputs to corresponding state props when there is any input changes */}
                <input
                    type='text'
                    className="brandInput"
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
                <button className="searchbarbutton" onClick={(e) => {
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
            {Object.keys(product).length !== 0 && <Product product={product} />}
            {Object.keys(product).length === 0 && <img className="logo" src="https://lh3.googleusercontent.com/proxy/TvKgdB26IXEDGg_Svo0fZSp-3IGdrKEJ4BUPyu7N1hcj4bXK_Ih1t5ff8ZQeuifS1msQzioifPAi8ZpEdWHvPrK_9Zpuq9l0KaNK0Q4ka8dlAqB6AKuXnbdMxLTeZm3JJnRpIhTn"></img>}
        </div>
    )
}

export default SearchBar