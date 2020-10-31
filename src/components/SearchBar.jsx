import React from 'react';
// import { render } from 'react-dom'

//render 

const SearchBar = props => {
    //div for the search input 
    return (
        <div id="searchInput">
            <form>
                <input type='text' placeholder='Search your product here'></input>
                <button onClick={(e) => {
                    e.target.value //=> value user input
                    fetch('/api', {
                        method: 'POST',
                        headers: {
                          "Content-Type": "Application/JSON"
                        },
                        body: JSON.stringify(bodyObj),
                    })
                }}>Search</button>
            </form>
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