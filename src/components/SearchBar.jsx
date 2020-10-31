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
                    e.preventDefault();
                    console.log('in Onclick')
                    // e.target.value => value user input
                    fetch('/api', {
                        headers: {
                            'Content-Type' : 'application/json',
                            'Accept' : 'application/json'
                        }
                    }).then(data => {
                        console.log(data);
                        return data.json();
                    })
                    .then((data) => {
                        console.log(data);
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