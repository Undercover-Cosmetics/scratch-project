import React from 'react';
// import { render } from 'react-dom'

//render 

const SearchBar = props => {
    //div for the search input 
    return (
        <div id="searchInput">
            <form method='POST' action='/product'>
                <input type='text' placeholder='Search your product here'></input>
                <button>Search</button>
            </form>
        </div>
    )

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